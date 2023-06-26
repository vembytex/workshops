import { Meta, StoryFn } from "@storybook/react";
import { App, IAppProps } from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default {
  title: "Redux",
  component: App,
} as Meta<IAppProps>;

function AppWrapper(props: IAppProps) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}

const Template: StoryFn<IAppProps> = (args: IAppProps) => (
  <AppWrapper {...args} />
);

export const Default: StoryFn<IAppProps> = Template.bind({});
Default.args = {};
