import {
	Stack,
	Box,
	Text,
	VStack,
	Image,
	Flex,
	Heading,
} from "@chakra-ui/react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
	return (
		<>
			<ReactFullpage
				anchors={["hero", "projects", "about", "contact"]}
				menu="#menu"
				scrollingSpeed={1000}
				autoScrolling={true}
				render={({}) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={"section"}>
								<Box bgColor={"red"} w="300px" h="300px">
									HELLOOO
								</Box>
							</div>
							<div className="section">
								<Box bgColor={"blue"} w="300px" h="300px">
									HOLAAAA
								</Box>
							</div>
							<div className="section">
								<Box bgColor={"teal"} w="300px" h="300px">
									BONJOURR
								</Box>
							</div>
							<div className="section ">
								<Box bgColor={"pink"} w="300px" h="300px">
									KONICHIWA
								</Box>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
}
