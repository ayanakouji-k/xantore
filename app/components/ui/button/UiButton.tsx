import React from "react";
import { Button } from "antd";

import { TUiButton } from "./button.types";

const UiButton: React.FC<TUiButton> = ({
  text,
  onClick,
  icon,
  color = "#7367f0",
  loading = false,
}) => {
  return (
    <Button
      onClick={onClick}
      icon={icon}
      htmlType="submit"
      loading={loading}
      type="primary"
      style={{ backgroundColor: color, border: "none" }}
    >
      {text}
    </Button>
  );
};

export default UiButton;
