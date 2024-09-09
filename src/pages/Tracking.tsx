import { useState } from "react";
import TrackingSearch from "../components/molecules/TrackingSearch";
import MainLayouts from "../layouts/MainLayouts";
import { Block } from "../components/atoms/UI/Block";
import { CheckActiveIcons } from "../components/atoms/Icons";
import styled from "@emotion/styled";

const Tracking = () => {
  const [search, setSearch] = useState<string>("");
  const [showTrackings, setShowTrackings] = useState<boolean>(false);

  return (
    <MainLayouts title="Мои посылки">
      <div className="title">Мои посылки</div>

      <div className="tracking">
        <TrackingSearch
          onSearch={setSearch}
          search={search}
          setShowTrackings={setShowTrackings}
        />

        {showTrackings && (
          <div className="tracking_show">
            <div className="title">
              Статус доставки: <span style={{ color: "#02447F" }}>В пути</span>
            </div>

            <TrackShow className="flex items-center content-between">
              <div className="flex items-center gap-1_2">
                <CheckActiveIcons />
                <div className="subtitle-block">01.02.2024</div>
                <div className="subtitle-block">№02.240202151313</div>
              </div>

              <div className="subtitle-block">Москва</div>
            </TrackShow>
          </div>
        )}
      </div>
    </MainLayouts>
  );
};

const TrackShow = styled(Block)`
  @media (max-width: 480px) {
    svg {
      width: 16px;
      height: 16px;
    }

    .gap-1_2 {
      gap: 1.2rem;

      .subtitle-block {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Tracking;
