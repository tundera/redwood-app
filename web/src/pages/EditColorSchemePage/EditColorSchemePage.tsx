import ColorSchemesLayout from "src/layouts/ColorSchemesLayout";
import EditColorSchemeCell from "src/components/EditColorSchemeCell";

function EditColorSchemePage({id}) {
	return <ColorSchemesLayout>
		<EditColorSchemeCell id={id} />
	</ColorSchemesLayout>;
}

export default EditColorSchemePage;
