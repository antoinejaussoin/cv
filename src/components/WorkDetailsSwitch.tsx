import React from "react";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";

interface WorkDetailsSwitchProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
}

export default function WorkDetailsSwitch({
  enabled,
  onChange,
}: WorkDetailsSwitchProps) {
  return <Switch checked={enabled} onChange={onChange} />;
}
