import "./globals.css";

import Header from "../components/Header";
import Providers from "../app/Providers";
import head from "./head";

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head />
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
