import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RedwoodReactQueryProvider } from 'redwoodjs-react-query-provider'
import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'src/styles/theme'

import './scaffold.css'
import './index.css'

const queryClient = new QueryClient()

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

function App() {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider client={supabaseClient} type="supabase">
          <RedwoodReactQueryProvider>
            <ChakraProvider theme={theme}>
              <Routes />
            </ChakraProvider>
          </RedwoodReactQueryProvider>
        </AuthProvider>
      </QueryClientProvider>
    </FatalErrorBoundary>
  )
}

export default App
