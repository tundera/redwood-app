import {
	Box,
	Flex,
	Heading,
	Link,
	Text,
	chakra,
	useColorModeValue,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import React from "react";
import type {FC} from "react";

export interface CallToActionProps {
	title: string;
	subtitle: string;
	description: string;
	link?: {
		href: string;
		label: string;
	};
}

const MotionButton = motion(chakra.button);

export const CallToAction: FC<CallToActionProps> = (
	{title, subtitle, description, link},
) => {
	const bg = useColorModeValue("black", "white");
	const color = useColorModeValue("white", "black");
	const subtitleColor = useColorModeValue("indigo.300", "indigo.700");

	return <Box bgGradient={`linear(to-r, ${bg}, indigo.500)`}>
		<Box textAlign="center"
		w="full"
		mx="auto"
		py={{base: "12", lg: "16"}}
		px={{base: "4", sm: "6", lg: "8"}}
		zIndex="10">
			<Heading as="h2"
			fontSize={{base: "4xl", sm: "6xl"}}
			fontWeight="extrabold"
			color={color}>
				{title}
				<chakra.span display="block"
				fontSize={{base: "3xl", sm: "4xl"}}
				color={subtitleColor}>
					{subtitle}
				</chakra.span>
			</Heading>
			<Text fontSize="xl" mt="4" maxW="md" mx="auto" color={color}>
				{description}
			</Text>
			{link &&
			<Flex justify="center" mt={{lg: "0"}} flexShrink={{lg: 0}}>
				<Box mt="12" display="inline-flex" rounded="md" shadow="base">
					<Link to="/about">
						<MotionButton as="a"
						href="https://github.com/tundera/frostbit/README.md"
						type="button"
						color="white"
						bg="indigo.600"
						shadow="md"
						w="full"
						textAlign="center"
						fontSize="md"
						fontWeight="semibold"
						py="2"
						px="4"
						rounded="lg"
						whileHover={{scale: 1.1}}
						whileTap={{scale: 0.9}}
						_hover={{bg: "indigo.700"}}>
							Learn more
						</MotionButton>
					</Link>
				</Box>
			</Flex>}
		</Box>
	</Box>;
};
