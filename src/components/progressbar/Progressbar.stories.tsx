import type { Meta, StoryObj } from '@storybook/react';
import { Progressbar as ProgressbarView } from './Progressbar';

export default {
    title: 'Components/Progressbar',
    component: ProgressbarView,
} as Meta;

type Story = StoryObj<typeof ProgressbarView>;

export const Progressbar: Story = {
  args: {
    percentage: 50,
    ariaLabel: 'progress-bar-description',
    testId: 'progress-bar-1',
  },
};