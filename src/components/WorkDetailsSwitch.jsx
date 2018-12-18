import React from "react";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";

const WorkDetailsSwitch = ({ enabled, onChange }) => (
  <Switch checked={enabled} onChange={onChange} />
);

export default WorkDetailsSwitch;
