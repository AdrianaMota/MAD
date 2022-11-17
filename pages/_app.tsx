import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../utils/theme";

import "@fontsource/dancing-script";
import "@fontsource/marcellus";
import "@fontsource/montserrat";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={defaultTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
