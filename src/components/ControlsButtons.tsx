import React from "react";

import * as S from "./styledComponents";

type ControlButtonsProps = {
  previoustButtonClick: () => void;
  nextButtonClick: () => void;
  previousButtonDisabled: boolean;
  nextButtonDisabled: boolean;
};

const ControlsButtons = ({
  previoustButtonClick,
  nextButtonClick,
  previousButtonDisabled,
  nextButtonDisabled
}: ControlButtonsProps) => {
  return (
    <S.ControlsWrapper mv={10}>
      <S.Wrapper>
        <S.Button
          disabled={previousButtonDisabled}
          onClick={previoustButtonClick}
        >
          Previous
        </S.Button>
      </S.Wrapper>
      <S.Wrapper>
        <S.Button disabled={nextButtonDisabled} onClick={nextButtonClick}>
          Next
        </S.Button>
      </S.Wrapper>
    </S.ControlsWrapper>
  );
};

export default ControlsButtons;
