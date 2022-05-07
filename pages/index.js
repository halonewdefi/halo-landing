import { Flex, Heading, Image } from '@chakra-ui/react'
import { logoteaser, discord, twitter, telegram, reddit } from '../svg'

const Home = () => {

	const socialStyle = {
		w: '40px',
		_hover: {
			cursor: 'pointer',
		},
	}

	return (
		<Flex
			h='100vh'
			justifyContent='center'
			alignItems='flex-end'
			maxW='647px'
			flexWrap='wrap'
			m='0 auto'
		>
			<Flex
				w='auto'
				h='auto'
				minH='245px'
				maxW={{ base: '398px', md: '647px' }}
				flexWrap='wrap'
				justifyContent={{ base: 'center', md: 'right' }}
			>
				<Image
					maxH='245px'
					src={logoteaser}
					alt='Official Halo Teaser'
					zIndex='2'
				/>
				<Heading
					mt={{ base: '35px', md: '0' }}
					ml={{ base: '0', md: '64px' }}
					mb='0'
					color='white'
					whiteSpace='pre'
					fontSize='48px'
					fontWeight='normal'
					lineHeight='1.3'
				>
					{`NEW DEFI
PROTOCOL
BUILT ON
ETHEREUM`}
				</Heading>
				<Heading
					fontSize='16px'
					color='white'
					letterSpacing='1.2px'
					mt='35px'
					mb='0'
				>LAUNCHING SOON Q2 2022</Heading>
			</Flex>
			<Flex
				w='auto'
				h='165px'
				maxW={{ base: '398px', md: '647px' }}
				bottom='0'
				justifyContent='center'
				alignItems='flex-start'
				gridGap='30px'
				zIndex='1'
			>
				<Image
					src={discord}
					alt='Discord'
					{...socialStyle}
				/>
				<Image
					src={twitter}
					alt='Twitter'
					{...socialStyle}
				/>
				<Image
					src={telegram}
					alt='Telegram'
					{...socialStyle}
				/>
				<Image
					src={reddit}
					alt='Reddit'
					{...socialStyle}
				/>
			</Flex>
		</Flex>
	)
}

export default Home
