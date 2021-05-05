import {
	Flex,
	Heading,
	Link,
	List,
	ListItem,
	useColorModeValue,
} from "@chakra-ui/react";
import {Link as RedwoodLink, routes} from "@redwoodjs/router";

import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/Footer";

const MainLayout: React.FunctionComponent = ({children}) => {
	const bg = useColorModeValue("white", "brand.500");

	return <>
		<Navbar />
		<Flex direction="column"
		align="center"
		flexDirection="column"
		bg={bg}
		minH="100vh">
			<header>
				<Heading as="h1">
					<Link as={RedwoodLink} to={routes.home()}>
						Home
					</Link>
				</Heading>
				<nav>
					<List>
						<ListItem>
							<Link as={RedwoodLink} to={routes.about()}>
								About
							</Link>
						</ListItem>
					</List>
				</nav>
			</header>
			<main>
				{children}
			</main>
		</Flex>
		<Footer />
	</>;
};

export default MainLayout;
