// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Route, Router, Set, Private } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'

function Routes() {
  return (
    <Router pageLoadingDelay={300}>
      <Set wrap={MainLayout}>
        <Route path="/color-schemes/new" page={NewColorSchemePage} name="newColorScheme" />
        <Route path="/color-schemes/{id}/edit" page={EditColorSchemePage} name="editColorScheme" />
        <Route path="/color-schemes/{id}" page={ColorSchemePage} name="colorScheme" />
        <Route path="/color-schemes" page={ColorSchemesPage} name="colorSchemes" />
        <Route path="/players/new" page={NewPlayerPage} name="newPlayer" />
        <Route path="/players/{id}/edit" page={EditPlayerPage} name="editPlayer" />
        <Route path="/players/{id}" page={PlayerPage} name="player" />
        <Route path="/players" page={PlayersPage} name="players" prerender={true} />
        <Route path="/coaches/new" page={NewCoachPage} name="newCoach" />
        <Route path="/coaches/{id}/edit" page={EditCoachPage} name="editCoach" />
        <Route path="/coaches/{id}" page={CoachPage} name="coach" prerender={true} />
        <Route path="/coaches" page={CoachesPage} name="coaches" />
        <Route path="/teams/new" page={NewTeamPage} name="newTeam" />
        <Route path="/teams/{id}/edit" page={EditTeamPage} name="editTeam" />
        <Route path="/teams/{id}" page={TeamPage} name="team" />
        <Route path="/teams" page={TeamsPage} name="teams" prerender={true} />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" prerender={true} />
      </Set>
      <Route notfound={true} page={NotFoundPage} />
    </Router>
  )
}

export default Routes
