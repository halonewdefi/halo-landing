import { mode } from '@chakra-ui/theme-tools'
import fonts from './fonts'
import typography from './typography'
import colors from './colors'
import alert from './alert'
import badge from './badge'
import button from './button'
import tooltip from './tooltip'
import input from './input'
import numberInput from './numberinput'
import select from './select'
import menu from './menu'
import switchComp from './switch'
import link from './link'
import { extendTheme } from '@chakra-ui/react'
import spinner from './spinner'
import modal from './modal'
import tag from './tag'
import popover from './popover'
import layers from './layers'

const overrides = {
	config: {
		useSystemColorMode: false,
		initialColorMode: 'light',
	},
	styles: {
		global: props => ({
			body: {
				fontSize: '1em',
				fontWeight: 'normal',
				height: '100vh',
				color: mode('type.body.dark', 'type.body.light')(props),
				bg: mode('bg.light', 'bg.dark')(props),
				backgroundImage: 'url(png/bg-min.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			},
			'input::placeholder': {
				color: '#000',
			},
			'.chakra-alert button:focus': {
				boxShadow: '0 0 0 3px #7b7ce0',
			},
			'h1, h2, h3, h4, h5, h6, h7': {
				fontFamily: 'Heading',
				color: mode('primary.blue.100', 'secondary.purple.100')(props),
				textTransform: 'uppercase',
			},
			h1: {
				fontSize: '1.5rem',
				margin: '0 0 .3rem',
			},
			h2: {
				margin: '0 0 .23rem',
			},
			h3: {
				margin: '0 0 .2rem',
			},
			h4: {
				fontSize: '0.7rem',
				margin: '0 0 .16rem',
			},
			'img[src=\'\']': {
				opacity: '0',
			},
			'img:not([src])': {
				opacity: '0',
			},
			'*:focus-visible': {
				outline: 'none',
			},
		}),
	},
	fonts: fonts,
	textStyles: typography,
	colors: colors,
	components: {
		Alert: alert,
		Button: button,
		Input: input,
		NumberInput: numberInput,
		Badge: badge,
		Tooltip: tooltip,
		Select: select,
		Menu: menu,
		Link: link,
		Spinner: spinner,
		Modal: modal,
		Switch: switchComp,
		Tag: tag,
		Popover: popover,
	},
	layerStyles: layers,
}

export default extendTheme(overrides)
