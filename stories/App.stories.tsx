import { Meta, StoryFn } from "@storybook/react";
import { App, IAppProps } from "./App";
import React from "react";

export default {
  title: "App",
  component: App,
} as Meta<IAppProps>;

const Template: StoryFn<IAppProps> = (args: IAppProps) => <App {...args} />;

export const Default: StoryFn<IAppProps> = Template.bind({});
Default.args = {};
