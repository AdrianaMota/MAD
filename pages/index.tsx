import {
	Stack,
	Button,
	Text,
	VStack,
	Image,
	Flex,
	Heading,
	Box,
	HStack,
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
							<div className="section">
								<Flex
									h="100vh"
									bgColor={"yellow.300"}
									alignItems="center"
									justifyContent={"space-between"}
								>
									<Stack w="50vw" gap="2rem" ml="4rem">
										<Heading>What we do</Heading>
										<Text>
											We put together the perfect team of professional to
											understand the client’s vision and goals to provide the
											best possible service and help grow their business. We
											find the best talents for every role and care for their
											well being and career. This sets us apart from other
											companies since{" "}
											<strong>our people is our best asset.</strong>
										</Text>
										<HStack gap="1.5rem">
											<Button variant="yellow">Designing</Button>
											<Button variant="yellow">Drafting</Button>
											<Button variant="yellow">Filing</Button>
										</HStack>
									</Stack>
									<Image h="100vh" src="./building.png" />
								</Flex>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Stack>
	);
}
