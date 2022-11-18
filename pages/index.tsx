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
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Cube from "../components/Cube";
import Form from "../components/Form";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
	const pageMargin = "2rem";
	const sectionMargin = "6rem";

	return (
		<Stack spacing={0}>
			<ReactFullpage
				anchors={["hero", "what-we-do", "design", "draft", "filing", "contact"]}
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
									<Navbar margin={pageMargin} />
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
									<Stack w="50vw" gap="2rem" ml={sectionMargin}>
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
											<Box as="a" href="#design" data-menuanchor="design">
												<Button variant="yellow">Designing</Button>
											</Box>
											<Box as="a" href="#draft" data-menuanchor="draft">
												<Button variant="yellow">Drafting</Button>
											</Box>
											<Box as="a" href="#filing" data-menuanchor="filing">
												<Button variant="yellow">Filing</Button>
											</Box>
										</HStack>
									</Stack>
									<Image h="100vh" src="./building.png" />
								</Flex>
							</div>
							<div className="section" style={{ position: "relative" }}>
								<Image
									bgColor={"pink.200"}
									src="./dots.png"
									top="0"
									left="0"
									position="absolute"
									zIndex={"-1"}
								/>
								<Flex h="100vh" alignItems="center">
									<Stack w="50vw" gap="2rem" ml={sectionMargin}>
										<Heading>Designing</Heading>
										<Text>
											Our architectural services include modeling, rendering and
											designing. We will provide you with a hands-on creative
											team that will bring value to your company from day one.
											We will see to your idea from beginning to end
											concentrating not only on the design, but also in its
											functionality and graphic representation.
										</Text>
										<Box>
											<Button>View More</Button>
										</Box>
									</Stack>
									{/* <Box>
										<Swiper
											effect={"cube"}
											grabCursor={true}
											cubeEffect={{
												shadow: true,
												slideShadows: true,
												shadowOffset: 20,
												shadowScale: 0.94,
											}}
											pagination={true}
											modules={[EffectCube, Pagination]}
											className="mySwiper"
										>
											<SwiperSlide>
												<Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
											</SwiperSlide>
											<SwiperSlide>
												<Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
											</SwiperSlide>
											<SwiperSlide>
												<Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
											</SwiperSlide>
											<SwiperSlide>
												<Image src="https://swiperjs.com/demos/images/nature-4.jpg" />
											</SwiperSlide>
										</Swiper>
									</Box> */}
								</Flex>
							</div>
							<div className="section" style={{ position: "relative" }}>
								<Image
									bgColor={"yellow.300"}
									src="./fibonacci.png"
									top="0"
									left="0"
									position="absolute"
									zIndex={"-1"}
								/>
								<Flex h="100vh" alignItems="center" justifyContent={"right"}>
									<Stack w="50vw" gap="2rem" mr={sectionMargin}>
										<Heading>Drafting</Heading>
										<Text>
											Our architectural services include drafting and detailing.
											We will draft whatever you need and deliver high-quality,
											clean work in a timely manner.
										</Text>
										<Box>
											<Button variant="yellow">View More</Button>
										</Box>
									</Stack>
								</Flex>
							</div>
							<div className="section">
								<Flex
									h="100vh"
									justifyContent={"space-between"}
									alignItems="center"
									px={sectionMargin}
									bgGradient="conic-gradient(from 180deg at 50% 50%, #E2BDBD -82.5deg, #FDE8DE 136.88deg, #E2BDBD 277.5deg, #FDE8DE 496.88deg)"
								>
									<Stack w="50vw" gap="2rem">
										<Heading>Filing</Heading>
										<Text>
											We go wall the way. Our team of experts will not only
											draft or design your pojects, they’ll put together any
											kind of legal document required for the prject to be filed
											and aproved. These services include DOB, Street Tree Plan,
											Construction Fence Plan, Site Safety Plan, etc.
										</Text>
									</Stack>
									<Image src="./filing.png" w="35rem" />
								</Flex>
							</div>
							<div className="section">
								<Flex
									pl={sectionMargin}
									h="100vh"
									bgColor={"beige.300"}
									alignItems={"center"}
									justifyContent="space-between"
								>
									<Stack>
										<Heading mb="3rem">Let's get in touch</Heading>
										<Form />
									</Stack>
									<Stack gap="4rem">
										<Testimonial
											margin={sectionMargin}
											name="John"
											profession="civil engineer"
											text="“Martha Chumo is no ordinary 18 year old. In one summer, she taught herself to code and got a job.”"
										/>
										<Testimonial
											margin={sectionMargin}
											name="Pam"
											profession="Architect"
											text="“When it comes to backlink analysis, Ahrefs is my #1 go-to tool. If you’re serious about SEO, you need Ahrefs.”"
										/>
									</Stack>
								</Flex>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Stack>
	);
}
