import { Meta, StoryFn } from "@storybook/react";
import { App, IAppProps } from "./App";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default {
  title: "React Query",
  component: App,
} as Meta<IAppProps>;

const queryClient = new QueryClient();

const Template: StoryFn<IAppProps> = (args: IAppProps) => (
  <QueryClientProvider client={queryClient}>
    <App {...args} />
  </QueryClientProvider>
);

export const Default: StoryFn<IAppProps> = Template.bind({});
Default.args = {};
