import styled from "@emotion/styled";
import MainLayouts from "../layouts/MainLayouts";
import { Checkbox, Input } from "../components/atoms/UI/Inputs";
import {
  MapFilterSearchIcons,
} from "../components/atoms/Icons";
import MapCard from "../components/molecules/MapBlock";

const Map = () => {
  
  // const [selected, setSelected] = usePlaceAut

  return (
    <MainLayoutStyled title="Карта" className="section--map">
      <div className="title">
        Пункты Альфа в городе{" "}
        <span className="title title--green">Алматы (65)</span>
      </div>

      <MapBlock className="map">
        <div className="map_filter">
          <div className="map_fllter-check">
            <Checkbox>
              <input type="checkbox" id="lang2" name="lang2" value="Python" />
              <label htmlFor="lang2">
                <div className="subtitle-block">Прием посылок более 35 кг</div>
              </label>
            </Checkbox>

            <Checkbox>
              <input type="checkbox" id="lang2" name="lang2" value="Python" />
              <label htmlFor="lang2">
                <div className="subtitle-block">Работает в выходные</div>
              </label>
            </Checkbox>
          </div>
        </div>

        <MapCard />
      </MapBlock>
    </MainLayoutStyled>
  );
};

const MainLayoutStyled = styled(MainLayouts)`
    &.section--map {
        @media (max-width: 768px) {
            padding-bottom: 0;
            .container {
                padding-inline: 0;
            }

            .map_filter {
                padding-inline: 2rem;
            }

            .title {
                padding-left: 2rem;
            }
        }
    }
`

const MapBlock = styled.div`
  .map_filter-search {
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
    }

    input {
      padding-left: 6.2rem;

      width: 100%;
      max-width: 460px;
    }
  }

  .map_fllter-check {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    .map_fllter-check {
        flex-wrap: wrap;
        row-gap: 1.2rem;
    }
  }
`;

export default Map;
