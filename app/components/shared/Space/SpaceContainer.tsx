import React from "react";
import { Popconfirm, Space } from "antd";

import { UiButton } from "../../ui";
import { TSpace } from "./space.types";

const SpaceContainer: React.FC<TSpace> = ({ items }) => {
  return (
    <Space size="small">
      {items?.map(({ onClick, color, icon, confirm = false }, i) =>
        !confirm ? (
          <UiButton key={i} icon={icon} onClick={onClick} color={color} />
        ) : (
          <Popconfirm
            key={i}
            placement="leftTop"
            okType="danger"
            title="Вы уверены!"
            onConfirm={onClick}
            okText="Да"
            cancelText="Нет"
          >
            <UiButton icon={icon} color={color} />
          </Popconfirm>
        )
      )}
    </Space>
  );
};

export default SpaceContainer;
