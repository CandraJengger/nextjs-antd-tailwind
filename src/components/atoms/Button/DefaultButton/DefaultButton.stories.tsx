import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import ButtonComp from '.'

export default {
  title: 'Components/Button',
  component: ButtonComp,
  argTypes: {
    type: {
      options: ['default'
      , 'primary'
      , 'secondary'
      , 'danger'
      , 'success'
      , 'warning'
      , 'ghost'],
      control: { type: 'select' },
    },
    size: {
      options: ["small" , "middle" , "large" ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ButtonComp>

const Story: ComponentStory<typeof ButtonComp> = (args: any) => <ButtonComp {...args} />

export const Button = Story.bind({})
Button.args = {
  text: 'Button',
  type: 'default',
  block: false,
  size: 'middle',
  disabled: false
}
