import React from "react";
import { useState } from "react";
import MobileView from "../containers/MobileView";

const Mobile = () => {
	const [team, setTeam] = useState("Sacremento Kings");
	const [title, setTitle] = useState("We're Blasting Off 🚀");
	const [subtitle, setSubtitle] = useState("OneSignal announces 500% growth, delivering 2 trillion messages annually.");

	const avatar =
		"https://firebasestorage.googleapis.com/v0/b/feedback-widget-3af40.appspot.com/o/Media.png?alt=media&token=68544ae4-dad9-431d-915c-7d4ee30dab62";

	return (
		<>
			<form>
				<label htmlFor="">Team</label>
				<input type="text" value={team} onChange={(event) => setTeam(event.target.value)} />
				<label htmlFor="">Title</label>
				<input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
				<label htmlFor="">Body</label>
				<input type="text" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />
			</form>
			<MobileView
				team={team && team}
				title={title && title}
				body={subtitle && subtitle}
				avatar={avatar && avatar}
			/>
		</>
	);
};

export default Mobile;
