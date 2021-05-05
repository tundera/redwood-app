import {Link, routes} from "@redwoodjs/router";

import Teams from "src/components/Teams";

export const QUERY = gql`
  query TEAMS {
    teams {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      city
      abbreviation
      logo
      logoSlug
      wins
      losses
      winPercentage
      conference
      division
      established
    }
  }
`;

export function Loading() {
	return <div>
		Loading...
	</div>;
}

export function Empty() {
	return <div className="rw-text-center">
		{"No teams yet. "}
		<Link to={routes.newTeam()} className="rw-link">
			{"Create one?"}
		</Link>
	</div>;
}

export function Success({teams}) {
	return <Teams teams={teams} />;
}
