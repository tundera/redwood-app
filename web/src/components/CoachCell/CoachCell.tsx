import Coach from "src/components/Coach";

export const QUERY = gql`
  query FIND_COACH_BY_ID($id: String!) {
    coach: coach(id: $id) {
      id
      createdAt
      updatedAt
      handle
      name
      type
      isAssistant
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
		Coach not found
	</div>;
}

export function Success({coach}) {
	return <Coach coach={coach} />;
}
