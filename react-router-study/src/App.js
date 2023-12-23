import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';

function UserDetails() {
    console.log(useRouteMatch())
    return <div>User Details</div>;
}

function UserPosts() {
    return <div>User Posts</div>;
}

function User() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>User Component</h2>
            <ul>
                <li>
                    <Link to={`${url}/details`}>User Details</Link>
                </li>
                <li>
                    <Link to={`${url}/posts`}>User Posts</Link>
                </li>
            </ul>

            {/* 嵌套路由 */}
            <Switch>
                <Route path={`${path}/details`}>
                    <UserDetails />
                </Route>
                <Route path={`${path}/posts`}>
                    <UserPosts />
                </Route>
            </Switch>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Link to="/user">User</Link>

                <Switch>
                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
