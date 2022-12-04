import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock} from "./Clock";

export default {
  title: 'Clock',
  component: Clock,
} as ComponentMeta<typeof Clock>;


const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const DigitClockStory = Template.bind({});

DigitClockStory.args = {
  mode: 'digit'
};

export const AnalogClockStory = Template.bind({});

AnalogClockStory.args = {
  mode: 'analog'
};


