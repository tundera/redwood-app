import Team from "src/components/Team";

export const QUERY = gql`
  query FIND_TEAM_BY_ID($id: String!) {
    team: team(id: $id) {
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
	return <div>
		Team not found
	</div>;
}

export function Success({team}) {
	return <Team team={team} />;
}
