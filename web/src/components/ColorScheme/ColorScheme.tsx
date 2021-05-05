import {useMutation} from "@redwoodjs/web";
import {toast} from "@redwoodjs/web/toast";
import {Link, navigate, routes} from "@redwoodjs/router";

import {QUERY} from "src/components/ColorSchemesCell";

const DELETE_COLOR_SCHEME_MUTATION = gql`
  mutation DeleteColorSchemeMutation($id: String!) {
    deleteColorScheme(id: $id) {
      id
    }
  }
`;

function jsonDisplay(obj) {
	return <pre>
		<code>
			{JSON.stringify(obj, null, 2)}
		</code>
	</pre>;
}

function timeTag(datetime) {
	return <time dateTime={datetime} title={datetime}>
		{new Date(datetime).toUTCString()}
	</time>;
}

function checkboxInputTag(checked) {
	return <input type="checkbox" checked={checked} disabled={true} />;
}

function ColorScheme({colorScheme}) {
	const [deleteColorScheme] = useMutation(
		DELETE_COLOR_SCHEME_MUTATION,
		{
			onCompleted: () => {
				toast.success("ColorScheme deleted");
				navigate(routes.colorSchemes());
			},
		},
	);

	function onDeleteClick(id) {
		if (confirm(`Are you sure you want to delete colorScheme ${id}?`)) {
			deleteColorScheme({variables: {id}});
		}
	}

	return <>
		<div className="rw-segment">
			<header className="rw-segment-header">
				<h2 className="rw-heading rw-heading-secondary">
					ColorScheme
					{colorScheme.id}
					Detail
				</h2>
			</header>
			<table className="rw-table">
				<tbody>
					<tr>
						<th>
							Id
						</th>
						<td>
							{colorScheme.id}
						</td>
					</tr>
					<tr>
						<th>
							Created at
						</th>
						<td>
							{timeTag(colorScheme.createdAt)}
						</td>
					</tr>
					<tr>
						<th>
							Updated at
						</th>
						<td>
							{timeTag(colorScheme.updatedAt)}
						</td>
					</tr>
					<tr>
						<th>
							Primary
						</th>
						<td>
							{colorScheme.primary}
						</td>
					</tr>
					<tr>
						<th>
							Secondary
						</th>
						<td>
							{colorScheme.secondary}
						</td>
					</tr>
					<tr>
						<th>
							Team id
						</th>
						<td>
							{colorScheme.teamId}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<nav className="rw-button-group">
			<Link to={routes.editColorScheme({id: colorScheme.id})}
			className="rw-button rw-button-blue">
				Edit
			</Link>
			<a href="#"
			className="rw-button rw-button-red"
			onClick={() => onDeleteClick(colorScheme.id)}>
				Delete
			</a>
		</nav>
	</>;
}

export default ColorScheme;
