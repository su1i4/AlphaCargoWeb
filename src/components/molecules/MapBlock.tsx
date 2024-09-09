import styled from "@emotion/styled";
import {
  AlertIcons,
  GISIcons,
  MapFilterListIcons,
  MapFilterWareHouseIcons,
  MetroIcons,
  TimerIcons,
} from "../atoms/Icons";
import { useEffect, useState } from "react";
import MapMarker from "./MapMarker";
import { useAppDispatch } from "../../hooks/useAppDisptach";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getOfficesInformationThunk } from "../../store/thunk/assets.thunk";
import { CountDown } from "../../utlis/countdown";
import { IOffices } from "../../types/assets.types";

type RemainingT = {
  hours: string;
  minutes: string;
};

const defaultRemainingTime: RemainingT = {
  hours: "00",
  minutes: "00",
};

type OfficeTime = {
  open: number;
  close: number;
  remainingTime: RemainingT;
};

const MapCard = () => {
  const [contentShow, setContentShow] = useState<boolean>(false);
  const [saveOffices, setSaveOffices] = useState<IOffices>();
  const dispatch = useAppDispatch();
  const offices = useTypedSelector((state) => state.assets.offices)
  const [searchLatLng, setSearchLatLng] = useState<string>("");

  const [officeTimes, setOfficeTimes] = useState<OfficeTime[]>([]);

  const updateRemainingTime = (open: number, close: number) => {
    return CountDown(open, close);
  };

  useEffect(() => {
    dispatch(getOfficesInformationThunk());
  }, [dispatch]);

  useEffect(() => {
    if (offices.length > 0) {
      const initialOfficeTimes = offices.map((office) => ({
        open: office?.openingHour as number,
        close: office?.closingHour as number,
        remainingTime: defaultRemainingTime,
      }));
      setOfficeTimes(initialOfficeTimes);
    }
  }, [offices]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOfficeTimes((prevOfficeTimes) =>
        prevOfficeTimes.map((officeTime) => ({
          ...officeTime,
          remainingTime: updateRemainingTime(officeTime.open, officeTime.close),
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [officeTimes]);

  const isCheckTime = (
    remainingTime: RemainingT,
    open: number,
    close: number
  ) => {
    const { hours, minutes } = remainingTime;
    const currentTime = new Date().getHours();

    if (currentTime >= open && currentTime < close) {
      return {
        color: "green",
        status: "Открыто",
      };
    } else {
      return {
        color: "red",
        status: `Откроется через ${hours} ч. ${minutes} мин.`,
      };
    }
  };

  console.log(searchLatLng)

  const onSaveOfficess = (item: IOffices) => setSaveOffices(item);

  return (
    <MapCardStyled className="flex gap-3">
      <div className="map_card">
        <MapMarker searchLatLng={searchLatLng} />
      </div>

      <div className="map_card-content">
        {!saveOffices && (
          <div
            className="map_card-popap flex items-center gap-1_2"
            onClick={() => setContentShow(!contentShow)}
          >
            <MapFilterListIcons />
            <div className="subtitle-block">
              {!contentShow ? "Открыть" : "Cкрыть"} список
            </div>
          </div>
        )}

        {contentShow && (
          <>
            {!saveOffices && (
              <div className="map_card-warehouse">
                {offices.map((item, index) => {
                  const officeTime = officeTimes[index];
                  const status = officeTime
                    ? isCheckTime(
                        officeTime.remainingTime,
                        officeTime.open,
                        officeTime.close
                      )
                    : { color: "gray", status: "Нет данных" };

                  return (
                    <div
                      className="map_card-warehouse-block"
                      key={index + 1}
                      onClick={() => onSaveOfficess(item as IOffices)}
                    >
                      <div className="flex items-center gap-1_2">
                        <MapFilterWareHouseIcons />
                        <div className="warehouse_title">Пункт Альфа</div>
                      </div>
                      <div className="subtitle-block">{item?.address}</div>
                      <div
                        className={`warehouse_title warehouse_title${
                          status.color === "red" ? "--red" : "--green"
                        }`}
                      >
                        {status.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {saveOffices && (
              <div className="map_card-warehouse">
                <div className="map_card-warehouse-block map_card-warehouse-block--offices">
                  <div className="flex items-center gap-1_2">
                    <div className="warehouse_title warehouse_title--offices_save">
                      Пункт Альфа ALM41
                    </div>
                  </div>
                  <div className="title-block">{saveOffices?.address}</div>
                  <div
                    className={`warehouse_title warehouse_title flex gap-1_2 items-center`}
                  >
                    <MetroIcons />
                    {"Станция метро Абай"}
                  </div>
                  <div
                    className={`warehouse_title warehouse_title flex gap-1_2 items-center`}
                  >
                    <TimerIcons />
                    {saveOffices?.openingHour}
                  </div>

                  <hr />

                  <div
                    className="warehouse_gis flex items-center content-between"
                    onClick={() => setSearchLatLng(saveOffices?.address)}
                  >
                    <div className="flex items-center gap-1_2">
                      <GISIcons />
                      <div className="subtitle-block gis-title">
                        Построить маршрут
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="warehouse_gis flex items-center content-between">
                    <div className="flex items-center gap-1_2">
                      <AlertIcons />
                      <div className="subtitle-block gis-title">
                        Подробнее о пункте выдачи
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </MapCardStyled>
  );
};

const MapCardStyled = styled.div`
  margin-top: 5rem;
  .map_card {
    width: 1095px;
    height: 720px;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .map_card-content {
    width: 315px;
  }

  .map_card-popap {
    cursor: pointer;
    border-bottom: 1px solid #27457c4a;
    border-right: 1px solid #27457c4a;
    padding-bottom: 1rem;
  }

  .map_card-warehouse-block {
    padding-block: 1rem;
    padding-right: 0.6rem;
    border-right: 1px solid #27457c4a;
    height: 100%;

    cursor: pointer;

    &--offices {
      border-right: none;
    }
  }

  .subtitle-block,
  .title-block {
    margin-block: 1.6rem;
  }

  .subtitle-block {
    &.gis-title {
      font-size: 1.3rem;
    }
  }

  .warehouse_title {
    color: #8c8c8c;
    font-size: 1.5rem;

    &--red {
      color: #ff0000;
    }

    &--green {
      color: #34ac4f;
    }

    &.flex {
      margin-bottom: 2rem;
    }
  }

  hr {
    margin: 1rem 0;
    padding: 0;
    height: 0;
    border: none;
    border-top: 1px solid #27457c4a;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    .map_card {
      order: 2;
      width: 100%;
    }

    .map_card-content {
      order: 1;
      position: relative;

      .map_card-warehouse {
        position: absolute;
        top: 100%;
        z-index: 70;
        background-color: #fff;
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-inline: 1rem;

        .map_card-warehouse-block {
          border: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    gap: 0;
    margin-top: 2rem;
    .map_card-content {
      width: 100%;
      .map_card-popap {
      }
    }

    .warehouse_title {
      font-size: 1.2rem;
    }

    .map_card-popap {
      padding-left: 2rem;
      border: none;
    }

    .map_card-warehouse-block {
      padding-block: 1.2rem;

      border-bottom: 1px solid #27457c4a !important;

      &:last-of-type {
        border: none !important;
      }
    }
  }
`;

export default MapCard;
