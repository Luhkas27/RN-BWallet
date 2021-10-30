import React from 'react'
import Config from 'react-native-config'

import { ThemeProvider } from 'styled-components'

import { Home } from '@screens'

import { theme } from '@theme'

import StorybookUI from '../storybook'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App
