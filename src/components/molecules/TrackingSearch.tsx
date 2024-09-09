import { Dispatch, FC, SetStateAction, useState } from "react";
import { Block } from "../atoms/UI/Block";
import { SearchFooterIcons, TrackingIcons } from "../atoms/Icons";
import styled from "@emotion/styled";
import { Input } from "../atoms/UI/Inputs";
import { PrimaryButton } from "../atoms/UI/Buttons";
import { ErrorText } from "../atoms/UI/Text";

interface IProps {
  onSearch: Dispatch<SetStateAction<string>>;
  setShowTrackings: Dispatch<SetStateAction<boolean>>;
  search: string;
}

const TrackingSearch: FC<IProps> = ({ onSearch, search, setShowTrackings }) => {
  const [error, setError] = useState<string>("");

  const onSearchSuccess = () => {
    if (search.length > 0) {
      setShowTrackings(true);
      setError("");
    } else {
      setError("Не правильно трекер код");
      setShowTrackings(false);
    }
  };

  return (
    <TrackingBlock>
      <div className="flex items-center gap-1_2">
        <TrackingIcons />
        <div className="title-block" style={{ margin: "0" }}>
          Отследить направление
        </div>
      </div>

      <div className="flex gap-1_2" style={{ marginTop: "2rem" }}>
        <div className="tracking_search">
          <Input
            placeholder="Номер"
            name="tracking"
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          <SearchFooterIcons />
        </div>
        <PrimaryButtonStyled onClick={onSearchSuccess}>
          Отследить
        </PrimaryButtonStyled>
      </div>

      {error && search.length === 0 && <ErrorText>{error}</ErrorText>}
    </TrackingBlock>
  );
};

const TrackingBlock = styled(Block)`
  width: 100%;
  max-width: 705px;

  .tracking_search {
    position: relative;
    width: 100%;

    svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  margin-bottom: 8rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;

    max-width: 100%;
  }
`;

const PrimaryButtonStyled = styled(PrimaryButton)`
  color: white;
  background-color: #02447f;
  border-radius: 10px;
  padding: 1rem 3rem 1.2rem 3rem;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default TrackingSearch;
