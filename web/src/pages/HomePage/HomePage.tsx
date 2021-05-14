import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import { Link, Text } from '@chakra-ui/layout'
// import { CallToAction } from '@monorepo/components'

import CenterCta from 'src/components/CenterCta/CenterCta'
import ColumnFeatures from 'src/components/ColumnFeatures/ColumnFeatures'
import PriceTiers from 'src/components/PriceTiers/PriceTiers'
import DataTable from 'src/components/DataTable/DataTable'

function HomePage() {
  return (
    <>
      <CenterCta />
      <DataTable />
      <ColumnFeatures />
      <PriceTiers />
      {/* <CallToAction
        title="Title"
        subtitle="subtitle"
        description="Some more text"
      /> */}
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
