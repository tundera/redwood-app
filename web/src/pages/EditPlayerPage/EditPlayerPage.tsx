import PlayersLayout from "src/layouts/PlayersLayout";
import EditPlayerCell from "src/components/EditPlayerCell";

function EditPlayerPage({id}) {
	return <PlayersLayout>
		<EditPlayerCell id={id} />
	</PlayersLayout>;
}

export default EditPlayerPage;
