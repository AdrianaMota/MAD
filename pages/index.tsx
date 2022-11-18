import {
	Stack,
	Button,
	Text,
	VStack,
	Image,
	Flex,
	Heading,
	Box,
} from "@chakra-ui/react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
	return (
		<Stack spacing={0}>
			<ReactFullpage
				anchors={["hero", "projects", "about", "contact"]}
				menu="#menu"
				scrollingSpeed={1000}
				autoScrolling={true}
				render={({}) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={"section"}>
								<Stack
									bgGradient="radial-gradient(50% 50% at 50% 50%, #F7E7E0 0%, #F4D7C9 100%);"
									h="100vh"
								>
									<Image src="./Logo.png" w="13rem" ml="2rem" mt="2rem" />
									<Box mt="5rem" mb="5rem" textAlign={"center"}>
										<Heading variant="heading">Architecture</Heading>
										<Heading variant="subheading">mad perfect</Heading>
									</Box>
									<Image src="/hero.png" />
								</Stack>
							</div>
							<div className="section"></div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Stack>
	);
}
