import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JumpText from "../springs/JumpText";
import "./JumpTextExample.css";
import { SpringConfig } from "react-spring";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/JumpText(跳动文字)",
  component: JumpText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof JumpText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JumpText> = (args) => (
  <JumpText {...args} />
);

export const Example = Template.bind({});
export const CustomExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

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

Example.args = {
  isJump: true,
  children: [
    <Children text="这是一段跳动文字" />,
    <Children text="这是一段跳动文字" color="red" fontSize="1.5rem" />,
  ],
};

const config: SpringConfig = { mass: 5, tension: 1000, friction: 80, bounce: 1 };

CustomExample.args = {
  isJump: true,
  children: [
    <Children text="这是一段跳动文字" color="black" />,
    <Children text="这是一段跳动文字" color="black" fontSize="2.5rem" />,
    <Children text="这是一段跳动文字" color="black" fontSize="3rem" />,
  ],
  config: config,
};

Example.storyName = "默认动画效果";
CustomExample.storyName = "自定义动画效果";
