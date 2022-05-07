import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Press%20Start%202P&display=optional'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Raleway&display=optional'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document