import Player from "src/components/Player";

export const QUERY = gql`
  query FIND_PLAYER_BY_ID($id: String!) {
    player: player(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      slug
      height
      weight
      number
      position
      teamId
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
		Player not found
	</div>;
}

export function Success({player}) {
	return <Player player={player} />;
}
