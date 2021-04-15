import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Tabs from "./pages/Tabs";
import SkeletonComponent from "./pages/SkeletonComponent";
import Users from "./pages/Users";
import Posts from "./containers/features/Posts";
import Counter from "./containers/features/Counter";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/tabs/*" component={Tabs} />
			<Route exact path="/skeleton" component={SkeletonComponent} />
			<Route exact path="/users/:id" component={Users} />
			<Route exact path="/redux/posts" component={Posts} />
			<Route exact path="/redux/counter" component={Counter} />
			<Route exact render={() => <p>404 Not Found</p>} />
		</Switch>
	);
};

export default Routes;
