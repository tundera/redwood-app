import {useMutation} from "@redwoodjs/web";
import {toast} from "@redwoodjs/web/toast";
import {navigate, routes} from "@redwoodjs/router";
import PlayerForm from "src/components/PlayerForm";

import {QUERY} from "src/components/PlayersCell";

const CREATE_PLAYER_MUTATION = gql`
  mutation CreatePlayerMutation($input: CreatePlayerInput!) {
    createPlayer(input: $input) {
      id
    }
  }
`;

function NewPlayer() {
	const [createPlayer, {loading, error}] = useMutation(
		CREATE_PLAYER_MUTATION,
		{
			onCompleted: () => {
				toast.success("Player created");
				navigate(routes.players());
			},
		},
	);

	function onSave(input) {
		createPlayer({variables: {input}});
	}

	return <div className="rw-segment">
		<header className="rw-segment-header">
			<h2 className="rw-heading rw-heading-secondary">
				New Player
			</h2>
		</header>
		<div className="rw-segment-main">
			<PlayerForm onSave={onSave} loading={loading} error={error} />
		</div>
	</div>;
}

export default NewPlayer;
