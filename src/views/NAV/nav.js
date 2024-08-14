import React from "react";
import "./nav.scss"

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Nav;