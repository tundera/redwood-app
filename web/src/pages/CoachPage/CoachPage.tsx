import CoachesLayout from "src/layouts/CoachesLayout";
import CoachCell from "src/components/CoachCell";

function CoachPage({id}) {
	return <CoachesLayout>
		<CoachCell id={id} />
	</CoachesLayout>;
}

export default CoachPage;
