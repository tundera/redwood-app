import ColorScheme from "src/components/ColorScheme";

export const QUERY = gql`
  query FIND_COLOR_SCHEME_BY_ID($id: String!) {
    colorScheme: colorScheme(id: $id) {
      id
      createdAt
      updatedAt
      primary
      secondary
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
		ColorScheme not found
	</div>;
}

export function Success({colorScheme}) {
	return <ColorScheme colorScheme={colorScheme} />;
}
