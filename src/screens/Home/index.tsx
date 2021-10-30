import React from 'react'
import { Image } from 'react-native'

import { Label } from '@shared'

import { icons } from '@assets'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <Label color="primary_blue">Home</Label>
      <Image source={icons.bell} style={{ width: 50, height: 50 }} />
    </S.Container>
  )
}
