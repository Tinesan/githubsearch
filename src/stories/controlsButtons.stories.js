import React from "react";
import ControlsButtons from "../components/ControlsButtons";

export default { title: "ControlsButtons" };

export const disabled = () => (
  <ControlsButtons
    previoustButtonClick={() => {}}
    nextButtonClick={() => {}}
    previousButtonDisabled
    nextButtonDisabled
  />
);

export const enabled = () => (
  <ControlsButtons
    previoustButtonClick={() => {}}
    nextButtonClick={() => {}}
    previousButtonDisabled={false}
    nextButtonDisabled={false}
  />
);
