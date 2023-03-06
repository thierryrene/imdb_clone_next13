import "./globals.css";

import Header from "../components/Header";
import head from "./head";

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
