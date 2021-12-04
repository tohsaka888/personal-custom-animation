import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextMovement from "../springs/TextMovement";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TextMovement(移动文字)",
  component: TextMovement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextMovement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextMovement> = (args) => (
  <TextMovement {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  text: "Hello,我是Tohsaka888",
  isMove: true,
};

Example.storyName = "默认示例";
