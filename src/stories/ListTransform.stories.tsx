import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListTransfrom from "../springs/ListTransform";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ListTransfrom(移动列表)",
  component: ListTransfrom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ListTransfrom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListTransfrom> = (args) => (
  <ListTransfrom {...args} />
);

const Children = ({
  text,
  color,
  fontSize,
}: {
  text: string;
  color?: string;
  fontSize?: string;
}) => {
  return (
    <div className="example-text" style={{ color: color, fontSize: fontSize }}>
      {text}
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isMove: true,
  children: [
    <Children text="这是一段跳动文字" color="black" />,
    <Children text="这是一段跳动文字" color="black" fontSize="2.5rem" />,
    <Children text="这是一段跳动文字" color="black" fontSize="3rem" />,
  ],
};

Primary.storyName = "默认示例"