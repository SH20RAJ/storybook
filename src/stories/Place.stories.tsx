import type { Meta, StoryObj } from '@storybook/react';

import Place from './Place';

const meta = {
  component: Place,
} satisfies Meta<typeof Place>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};