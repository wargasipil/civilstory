import type { Meta, StoryObj } from '@storybook/react';

import ServiceList from './ServiceList';

const meta = {
  component: ServiceList,
} satisfies Meta<typeof ServiceList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};