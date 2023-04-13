import type { Meta, StoryObj } from '@storybook/react';
import { App } from './index';

export default {
    title: 'Views/Index',
    component: App,
} as Meta;

type Story = StoryObj<typeof App>;

export const Index: Story = {
    args: {},
};