import type { Meta, StoryObj } from '@storybook/react';

import { CardHorizontal } from './Service';

const meta = {
  component: CardHorizontal,
} satisfies Meta<typeof CardHorizontal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};