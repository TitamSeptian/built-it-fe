import { extendTheme,ComponentStyleConfig  } from '@chakra-ui/react'
import foundations from './foundations'

const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}
const Input = {
    defaultProps: {
        color: "myorange.500",
        colorScheme: "myorange",
        // variant: "unstyled",
    },
};

export const theme = {
    direction,
    ...foundations,
    config,
    components: {
        Input,
    },
    defaultProps: {
        colorScheme: 'myorange',
    }
}

export default extendTheme(theme)
