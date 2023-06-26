import { Meta, StoryFn } from "@storybook/react";
import { App, IAppProps } from "./App";
import { context } from "./serviceContext";
import { ServiceProvider } from "./rx-state/service-adapter-react/context/ServiceProvider";

export default {
  title: "RxJs",
  component: App,
} as Meta<IAppProps>;

const Template: StoryFn<IAppProps> = (args: IAppProps) => {
  const serviceContext = context.useServiceContext({});
  return (
    <ServiceProvider serviceContext={serviceContext}>
      <App {...args} />
    </ServiceProvider>
  );
};

export const Default: StoryFn<IAppProps> = Template.bind({});
Default.args = {};
