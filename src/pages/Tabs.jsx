import React from "react";
import MuiTabs from "@material-ui/core/Tabs";
import MuiTab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Route, Link, Switch } from "react-router-dom";

const Tabs = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Route
			path="/tabs"
			render={() => (
				<>
					<MuiTabs value={value} onChange={handleChange}>
						<MuiTab label="Item One" component={Link} to="/tabs/tab1" {...a11yProps(0)}></MuiTab>
						<MuiTab label="Item Two" component={Link} to="/tabs/tab2" {...a11yProps(1)}></MuiTab>
						<MuiTab label="Item Three" component={Link} to="/tabs/tab3" {...a11yProps(2)}></MuiTab>
					</MuiTabs>
					<Switch>
						<Route path="/tabs/tab1" exact render={() => <TabPanel>Tab 1</TabPanel>} />
						<Route path="/tabs/tab2" exact render={() => <TabPanel>Tab 2</TabPanel>} />
						<Route path="/tabs/tab3" exact render={() => <TabPanel>Tab 3</TabPanel>} />
					</Switch>
				</>
			)}
		/>
	);
};

export default Tabs;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
