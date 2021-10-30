import React from 'react'

import { text, optionsKnob, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { Label } from '@shared'

import { theme } from '@theme'

import { Container } from '../../decorators/container'

storiesOf('Shared/Label', module)
  .addDecorator(Container)
  .addParameters({
    component: Label,
    backgrounds: [
      { name: 'light', value: theme.colors.light, default: true },
      { name: 'dark', value: theme.colors.dark }
    ]
  })
  .add(
    'Title',
    () => (
      <Label
        color={optionsKnob(
          'Title Theme',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Muted: 'muted',
            Light: 'light',
            Dark: 'dark'
          },
          'primary',
          { display: 'inline-radio' }
        )}
        bold={boolean('Title Bold', true)}
        size={select(
          'Title Size',
          { Small: 'small', Medium: 'medium' },
          'large'
        )}
      >
        {text('Content', 'BWallet')}
      </Label>
    ),
    {
      notes: 'Use esse componente sempre que precisar de um titulo'
    }
  )
