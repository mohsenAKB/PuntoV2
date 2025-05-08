import React, { Children, FC } from "react";
import type { TooltipProps } from "antd";
import { Button, ConfigProvider, Flex, Segmented, Tooltip } from "antd";

const AntTooltip: FC<TooltipProps> = (props): JSX.Element => {
  return (
    <Tooltip placement="top" title={props.title} arrow={props.arrow}>
      <Button>{props.children}</Button>
    </Tooltip>
  );
};

export default AntTooltip;
