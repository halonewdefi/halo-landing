import { ChakraProvider } from '@chakra-ui/react'
import theme from '../themes/halo'
import '../css/fontface.css'

const MyApp = ({ Component, pageProps }) => {
	return <ChakraProvider theme={theme}>
		<Component {...pageProps} />
	</ChakraProvider>
}

export default MyApp
