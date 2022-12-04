import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UseEffect} from "./UseEffect";
import {UseEffectWithTimeout} from "./UseEffectWithTimeout";
import {UseEffectReset} from "./UseEffectReset";

export default {
  title: 'UseEffect',
  component: UseEffect,
} as ComponentMeta<typeof UseEffect>;

const Template: ComponentStory<typeof UseEffect> = (args) => <UseEffect/>;

export const UseEffectStory = Template.bind({});

const Template2: ComponentStory<typeof UseEffectWithTimeout> = (args) => <UseEffectWithTimeout/>;

export const UseEffectWithTimeoutStory = Template2.bind({});

const Template3: ComponentStory<typeof UseEffectReset> = (args) => <UseEffectReset/>;

export const UseEffectResetStory = Template3.bind({});

