import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RedwoodReactQueryProvider } from 'redwoodjs-react-query-provider'
import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'src/styles/theme'
import supabase from 'src/lib/supabase'

import './scaffold.css'
import './index.css'

const queryClient = new QueryClient()

function App() {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider client={supabase} type="supabase">
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
