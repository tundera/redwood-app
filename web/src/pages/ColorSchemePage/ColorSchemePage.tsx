import ColorSchemesLayout from "src/layouts/ColorSchemesLayout";
import ColorSchemeCell from "src/components/ColorSchemeCell";

function ColorSchemePage({id}) {
	return <ColorSchemesLayout>
		<ColorSchemeCell id={id} />
	</ColorSchemesLayout>;
}

export default ColorSchemePage;
