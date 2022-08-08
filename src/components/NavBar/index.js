import React from "react";
import StyledNavBar, {MenuIcon, StyledMenuItem, MenuItems} from "./style";
import Badge from "../Badge";
import Avatar from "../Avater";
import "styled-components/macro"

import profileImage from "assets/images/772.jpg"
import {faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Link, matchPath, useLocation} from "react-router-dom";

function NavBar({children, ...rest}) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status={"online"}/>
            <MenuItems>
                <MenuItem to="/" showBadge icon={faCommentDots}/>
                <MenuItem to="/contacts" icon={faUsers}/>
                <MenuItem to="/files" icon={faFolder}/>
                <MenuItem to="/notes" icon={faStickyNote}/>
                <MenuItem icon={faEllipsisH}/>
                <MenuItem to="/settings" icon={faCog} css={`align-self: end`}/>
            </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem({to, icon, showBadge, ...rest}) {
    const loc = useLocation()
    const active = !!matchPath(loc.pathname, {
        path: to,
        exact: to === "/"
    })
    return (
        <StyledMenuItem active={active} {...rest} >
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}/>
                </Badge>
            </Link>
        </StyledMenuItem>
    )
}

NavBar.propTypes = {}

export default NavBar
export {MenuItem}