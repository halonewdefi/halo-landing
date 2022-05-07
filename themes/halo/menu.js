import { mode } from '@chakra-ui/theme-tools'

export default {
	baseStyle: (props) => ({
		list: {
			background: mode('baseBg.light',
				'baseBg.dark')(props),
			borderRadius: '0.68rem',
			borderWidth: '0',
			boxShadow: '0',
			_focus: {
				boxShadow: '0',
			},
			p: '1rem 0',
		},
		item: {
			color: mode('type.link.dark',
				'type.link.light')(props),
			paddingInlineStart: '1rem',
			paddingInlineEnd: '1rem',
			width: '90%',
			margin: '0 auto',
			alignItems: 'normal',
			borderRadius: '0.68rem',
			_hover: {
				background: mode('#f4ebd9', '#333')(props),
			},
			_active: {
				background: mode('#f4ebd9', '#333')(props),
			},
			_focus: {
				color: mode('type.link.dark',
					'type.link.light')(props),
			},
		},
		divider: {
			borderColor: 'stroke.dark',
		},
	}),
}