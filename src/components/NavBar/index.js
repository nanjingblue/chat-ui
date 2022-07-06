import React from "react";
import PropTypes, {func} from "prop-types";
import StyledNavBar, {MenuIcon, StyledMenuItem} from "./style";
import Badge from "../Badge";

function NavBar({children, ...rest}) {
    return (
        <StyledNavBar {...rest}>
           {children}
        </StyledNavBar>
    )
}

function MenuItem({icon, active, showBadge, ...rest}) {
    return (
        <StyledMenuItem active={active} {...rest} >
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

NavBar.propTypes = {
    children: PropTypes.any
}

export default NavBar
export {MenuItem}