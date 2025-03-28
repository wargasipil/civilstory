import type { Meta, StoryObj } from '@storybook/react';

import Service from './Service';

const meta = {
  component: Service,
} satisfies Meta<typeof Service>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};