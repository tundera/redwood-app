import { ChakraProvider, ChakraTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import type { FC } from 'react'
import fonts from '../font-face'
import { theme as defaultTheme } from '../theme'

interface Props {
  theme?: ChakraTheme
}
export const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}

export type { Props as ThemeProviderProps }
