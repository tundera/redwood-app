import {Link, routes} from "@redwoodjs/router";
import {Toaster} from "@redwoodjs/web/toast";

function CoachesLayout(props) {
	return <div className="rw-scaffold">
		<Toaster />
		<header className="rw-header">
			<h1 className="rw-heading rw-heading-primary">
				<Link to={routes.coaches()} className="rw-link">
					Coaches
				</Link>
			</h1>
			<Link to={routes.newCoach()} className="rw-button rw-button-green">
				<div className="rw-button-icon">
					+
				</div>
				New Coach
			</Link>
		</header>
		<main className="rw-main">
			{props.children}
		</main>
	</div>;
}

export default CoachesLayout;
