import Head from "next/head";

export default function head() {
	return (
		<Head>
			<title>STEAL THE LOOK</title>
			<meta name="title" content="STEAL THE LOOK" />
			<meta name="description" content="site de moda" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://stealthelook.vercel.app" />
			<meta property="og:title" content="STEAL THE LOOK" />
			<meta property="og:description" content="site de moda" />
			<meta
				property="og:image"
				content="https://stealthelook.vercel.app/_next/static/media/stl-logo.a2e1fb26.svg"
			/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content="https://stealthelook.vercel.app" />
			<meta name="twitter:title" content="STEAL THE LOOK" />
			<meta name="twitter:description" content="site de moda" />
			<meta
				name="twitter:image"
				content="https://stealthelook.vercel.app/_next/static/media/stl-logo.a2e1fb26.svg"
			/>
		</Head>
	);
}
