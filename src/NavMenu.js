import React from "react";
import { NavLink } from "react-router-dom";
import { Badge, List, Navbar, ListGroupItem, TabPane } from "reactstrap";

class NavMenu extends React.Component {

    color = { background: 'SlateGray' }

    render() {

        return (
            <div>
                <NavLink style={{ 'text-decoration': 'none' }} to='/'>
                    <Badge style={{ 'text-color': 'LightGrey' }} >
                        Home
                    </Badge> </NavLink>
                <NavLink style={{ 'text-decoration': 'none' }} to='/weather'>
                    <Badge style={{ 'text-color': 'LightGrey' }} >
                        Weather
                    </Badge> </NavLink>


            </div>
        )
    }
}

export default NavMenu;