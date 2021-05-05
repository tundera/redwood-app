import {useMutation} from "@redwoodjs/web";
import {toast} from "@redwoodjs/web/toast";
import {navigate, routes} from "@redwoodjs/router";
import CoachForm from "src/components/CoachForm";

import {QUERY} from "src/components/CoachesCell";

const CREATE_COACH_MUTATION = gql`
  mutation CreateCoachMutation($input: CreateCoachInput!) {
    createCoach(input: $input) {
      id
    }
  }
`;

function NewCoach() {
	const [createCoach, {loading, error}] = useMutation(
		CREATE_COACH_MUTATION,
		{
			onCompleted: () => {
				toast.success("Coach created");
				navigate(routes.coaches());
			},
		},
	);

	function onSave(input) {
		createCoach({variables: {input}});
	}

	return <div className="rw-segment">
		<header className="rw-segment-header">
			<h2 className="rw-heading rw-heading-secondary">
				New Coach
			</h2>
		</header>
		<div className="rw-segment-main">
			<CoachForm onSave={onSave} loading={loading} error={error} />
		</div>
	</div>;
}

export default NewCoach;
