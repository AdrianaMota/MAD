import {
	Stack,
	Image,
	Box,
	Button,
	HStack,
	Flex,
	Text,
	Heading,
} from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";

export default function draft() {
	const pageMargin = "2rem";
	const sectionMargin = "6rem";
	return (
		<Stack>
			<Navbar margin={pageMargin} />
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Stack gap="2rem" w="50vw">
					<Heading fontSize={"xxl"}>Drafting</Heading>
					<Text>
						Our architectural services include drafting and detailing. We will
						draft whatever you need and deliver high-quality, clean work in a
						timely manner.
					</Text>
				</Stack>
				<Image src="./draftHero.png" w="50rem" />
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Image src="./adaptability.png" w="30rem" />
				<Stack gap="2rem" w="50vw">
					<Heading>Adaptability</Heading>
					<Text>
						We adapt to your drawing style, standards and softwares, blending
						perfectly with your team and injecting momentum to your architecture
						department.
					</Text>
				</Stack>
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Stack gap="2rem" w="50vw">
					<Heading>Not hand-holding required</Heading>
					<Text>
						We can draft anything. You just tell us what your needs are and we
						will provide you with professionals who push forward both personally
						and professionally. They’ll bring that same forward moving energy to
						the team they work for.
					</Text>
				</Stack>
				<Image src="./noHandHolding.png" w="50rem" />
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Image src="./teamwork.png" w="50rem" />
				<Stack gap="2rem" w="50vw">
					<Heading>Teamwork is the best work</Heading>
					<Text>
						You manage the project and our amazing teams are yours to direct.
						These hand-picked teams will find the best way to communicate with
						you and express your ideas on paper.
					</Text>
				</Stack>
			</Flex>
			<Stack py="20rem">
				<Heading variant="subheading" textAlign="center">
					We are here for you
				</Heading>
			</Stack>
		</Stack>
	);
}
