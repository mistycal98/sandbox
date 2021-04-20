import MuiBox from "@material-ui/core/Box";
import MuiCard from "@material-ui/core/Card";
import React from "react";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import SacrementoKings from "../assets/svgs/sacremento.jsx";
import MuiTypography from "@material-ui/core/Typography";
import MuiAvatar from "@material-ui/core/Avatar";

const Frame = styled(MuiBox)`
	&.MuiBox-root {
		width: 17rem;
		height: 37rem;
		background: linear-gradient(180deg, #003b7e 0%, #006fee 100%);
		border-radius: 25px;
		border: 10px solid #e0e0e0;
		position: relative;
		margin-top: 1rem;
	}
`;

const Notification = styled(MuiCard)`
	&.MuiCard-root {
		padding: 5px 0;
		min-height: 6rem;
		border-radius: 10px;
		margin: 5rem 0.5rem;
		background: rgba(255, 255, 255, 0.7);
	}
`;

const CardHeader = styled(MuiCardHeader)`
	&.MuiCardHeader-root {
		padding: 0.3rem;
	}
	.MuiCardHeader-title {
		font-size: 0.8rem;
	}
	.MuiCardHeader-avatar {
		margin: 0.2rem 0.1rem;
	}
`;

const CardContent = styled(MuiCardContent)`
	&.MuiCardContent-root {
		padding: 0 0.5rem;
		margin: 0;
		display: flex;
	}
	&.MuiCardContent-root:last-child {
		padding-bottom: 0;
	}
`;
const Title = styled(MuiTypography)`
	&.MuiTypography-root {
		margin: 0 0.1rem;
	}
`;
const Subtitle = styled(MuiTypography)`
	&.MuiTypography-root {
		min-width: 13.1rem;
		font-size: 0.72rem;
		margin: 0 0.1rem;
	}
`;

const Avatar = styled(MuiAvatar)`
	&.MuiAvatar-root {
		width: 26px;
		height: 26px;
	}
`;

const Mobile = ({ team, title, body, avatar }) => {
	return (
		<Frame>
			<Notification>
				<CardHeader avatar={<SacrementoKings width="20" />} title={team} />
				<CardContent>
					<MuiBox>
						<Title>{title}</Title>
						<Subtitle>{body}</Subtitle>
					</MuiBox>
					<MuiBox>
						<Avatar variant="rounded" alt="image" src={avatar}></Avatar>
					</MuiBox>
				</CardContent>
			</Notification>
		</Frame>
	);
};

Mobile.defaultProps = {
	team: "",
	title: "",
	body: "",
	avatar: "",
};

export default Mobile;
