import PlayersLayout from "src/layouts/PlayersLayout";
import PlayerCell from "src/components/PlayerCell";

function PlayerPage({id}) {
	return <PlayersLayout>
		<PlayerCell id={id} />
	</PlayersLayout>;
}

export default PlayerPage;
