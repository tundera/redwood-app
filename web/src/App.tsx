import {AuthProvider} from "@redwoodjs/auth";
import {createClient} from "@supabase/supabase-js";
import {FatalErrorBoundary} from "@redwoodjs/web";
import {QueryClient, QueryClientProvider} from "react-query";
import {RedwoodReactQueryProvider} from "redwoodjs-react-query-provider";
import FatalErrorPage from "src/pages/FatalErrorPage/FatalErrorPage";
import Routes from "src/Routes";
import fonts from "../styles/font-face";
import theme from "../styles/theme";
import "./scaffold.css";
import "./index.css";
import {ChakraProvider} from "@chakra-ui/react";
import {Global} from "@emotion/react";
const queryClient = new QueryClient();

const supabaseClient = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY,
);

function App() {
	return <FatalErrorBoundary page={FatalErrorPage}>
		<QueryClientProvider client={queryClient}>
			<AuthProvider client={supabaseClient} type="supabase">
				<RedwoodReactQueryProvider>
					<ChakraProvider theme={theme}>
						<Global styles={fonts} />
						<Routes />
					</ChakraProvider>
				</RedwoodReactQueryProvider>
			</AuthProvider>
		</QueryClientProvider>
	</FatalErrorBoundary>;
}

export default App;
