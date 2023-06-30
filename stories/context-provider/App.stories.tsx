import { Meta, StoryFn } from "@storybook/react";
import { App, IAppProps } from "./App";
import React from "react";
import { Store, useStoreReducer } from "./store";

export default {
  title: "Context Provider",
  component: App,
} as Meta<IAppProps>;

const Template: StoryFn<IAppProps> = (args: IAppProps) => {
  const [state, dispatch] = useStoreReducer();

  return (
    <Store.Provider value={{ state, dispatch }}>
      <App {...args} />
    </Store.Provider>
  );
};

export const Default: StoryFn<IAppProps> = Template.bind({});
Default.args = {};
