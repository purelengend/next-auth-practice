import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Components
import { Button, SearchIcon } from '@/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: [
        'outline',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const IconButton: Story = {
  args: {
    startIcon: <SearchIcon />,
    children: 'Icon Button',
    variant: 'outline',
  },
};
