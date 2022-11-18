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

export default function design() {
	const pageMargin = "2rem";
	const sectionMargin = "6rem";
	return (
		<Stack>
			<HStack justifyContent={"space-between"} mx={pageMargin} mt={pageMargin}>
				<Image src="./Logo.png" w="13rem" />
				<HStack gap="3rem">
					<Text as="a">What we do</Text>
					<Box as="a" href="#contact" data-menuanchor="contact">
						<Button variant="brown">Contact us</Button>
					</Box>
				</HStack>
			</HStack>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Stack gap="2rem" w="50vw">
					<Heading fontSize={"xxl"}>Designing</Heading>
					<Text>
						Our architectural services include modeling, rendering and
						designing. We will provide you with a hands-on creative team that
						will bring value to your company from day one. We will see to your
						idea from beginning to end concentrating not only on the design, but
						also in its functionality and graphic representation.
					</Text>
				</Stack>
				<Image src="./designHero.jpeg" w="50rem" />
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Image src="./zeroToHero.jpeg" w="30rem" />
				<Stack gap="2rem" w="50vw">
					<Heading>From Zero to Hero</Heading>
					<Text>
						We’ve got you from a conceptual sketch to a complicated 3d rendering
						job, and all the steps in between. It is our philosophy that in
						order to sell any project you need immaculate presentation and
						graphics to explain it in the best possible way. We help you achieve
						that, and more by assembling a team of the best architects in the
						country that will not only create your architectural project but
						will also prepare it to be sold to your clients.
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
					<Heading>More than Technical, Art</Heading>
					<Text>
						Sometimes technical plans are not enough. Here at MAD Studio we go
						the extra mile to make sure your projects have that artsy element
						that everybody love.
					</Text>
				</Stack>
				<Image src="./art.png" w="50rem" />
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Image src="./theNew.png" w="50rem" />
				<Stack gap="2rem" w="50vw">
					<Heading>The Old and The New</Heading>
					<Text>
						From an interior renovation to a whole floor addition, we will help
						you find a solution by integrating the new with the existing always
						pointing to the betterment of the space.
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
					<Heading>We Do Where You Shop</Heading>
					<Text>
						We have broad experience in restaurant and commercial design,
						creating interesting and confortable spaces we strive to create an
						unforgettable experience for the users.
					</Text>
				</Stack>
				<Image src="./shop.png" w="50rem" />
			</Flex>
			<Flex
				pt="10rem"
				px={sectionMargin}
				justifyContent="space-between"
				alignItems={"center"}
			>
				<Image src="./grand.png" w="50rem" />
				<Stack gap="2rem" w="50vw">
					<Heading>Small to Grand</Heading>
					<Text>
						We work from small to grand scale projects, taking into account
						context, market and users to bring to life not only an aesthetic a
						functional project but a profitable one that will help the
						betterment of the community.
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
