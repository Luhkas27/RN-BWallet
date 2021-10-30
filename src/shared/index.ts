import styled from 'styled-components/native'

import { theme } from '@theme'

type Size = {
  [key: string]: string
}

interface LabelProps {
  size?: Size
  color?: string
  font?: string
  spacing?: string
  bold?: boolean
}

export const Label = styled.Text<LabelProps>`
  ${theme.typography.interBold24};
  color: ${({ color }) => theme.colors[color] || theme.colors.dark};
  margin: ${({ spacing }) => spacing || '0px'};
`
