import React from 'react'
import { View } from 'react-native'

export const Container = (storyFn) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}
    >
      {storyFn()}
    </View>
  )
}
