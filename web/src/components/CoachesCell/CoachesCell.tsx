import {Link, routes} from "@redwoodjs/router";

import Coaches from "src/components/Coaches";

export const QUERY = gql`
  query COACHES {
    coaches {
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
	return <div className="rw-text-center">
		{"No coaches yet. "}
		<Link to={routes.newCoach()} className="rw-link">
			{"Create one?"}
		</Link>
	</div>;
}

export function Success({coaches}) {
	return <Coaches coaches={coaches} />;
}
