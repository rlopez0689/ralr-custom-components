import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'My Label',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio' }
    }

} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
        size: 'normal'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps',
        size: 'normal',
        allCaps: true,
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        size: 'normal',
        color: 'text-secondary'
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Custom Color',
        size: 'normal',
        fontColor: 'red'
    }
}