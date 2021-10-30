import React from 'react'
import { AppRegistry } from 'react-native'

import { withKnobs } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import {
  getStorybookUI,
  configure,
  addDecorator
} from '@storybook/react-native'

import './rn-addons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Home } from '@screens'

addDecorator(withKnobs)
addDecorator(withBackgrounds)

configure(() => {
  require('./stories')
}, module)

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  onDeviceUI: true,
  asyncStorage: AsyncStorage
})

const StoryBookRoot = () => {
  return <StorybookUIRoot />
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default console.tron.storybookSwitcher(StoryBookRoot)(Home)
