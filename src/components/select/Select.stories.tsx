import type { Meta, StoryObj } from '@storybook/react';
import { Select as SelectView, SelectProps } from './Select';

export default {
    title: 'Components/Select',
    component: SelectView,
} as Meta;

type Story = StoryObj<typeof SelectView>;

export const Select: Story = {
    args: {
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ],
        defaultValue: '1',
        ariaLabel: 'Select an option',
        ariaDescribedBy: 'select-description',
        testId: 'select-1',
    },
};