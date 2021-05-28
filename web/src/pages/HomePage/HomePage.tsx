import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import { Link, Text, Box } from '@chakra-ui/layout'
import { Auth } from '@supabase/ui'

import supabase from 'src/lib/supabase'

function HomePage() {
  return (
    <>
      <Box w={{ base: '100%', md: '80' }} textAlign="center">
        <Auth
          supabaseClient={supabase}
          providers={['github']}
          socialLayout="vertical"
        />
      </Box>
      <Text>
        My default route is named
        <code>home</code>, link to me with `
        <Link as={RedwoodLink} to={routes.home()}>
          Home
        </Link>
        `
      </Text>
    </>
  )
}

export default HomePage
