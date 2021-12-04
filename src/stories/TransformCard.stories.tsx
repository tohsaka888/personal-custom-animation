import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TransformCard from "../springs/TransformCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TransformCard(移动卡片)",
  component: TransformCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TransformCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TransformCard> = (args) => (
  <TransformCard {...args} />
);

const Children = ({
  backgroundColor,
  width,
  height,
}: {
  backgroundColor: string;
  width: number;
  height: number;
}) => {
  return (
    <div
      style={{
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor,
      }}
    />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isMove: true,
  children: <Children backgroundColor={"red"} width={300} height={150} />,
};

Primary.storyName = "默认示例";
