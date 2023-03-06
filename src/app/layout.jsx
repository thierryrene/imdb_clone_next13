import "./globals.css";

import Head from "./head";

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<Head />
			<body>{children}</body>
		</html>
	);
}
