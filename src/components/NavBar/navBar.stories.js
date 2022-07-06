import React from "react"
import NavBar, {MenuItem} from "."
import {faCommentDots} from "@fortawesome/free-solid-svg-icons"
import "styled-components/macro"

export default {
    title: "页面组件/NavBar",
    components: NavBar
}

export const Default = () => <NavBar>Hello world</NavBar>

export const Menu = () => {
    return (
        <div css={`
            background-color: ${({ theme }) => theme.darkPurple};
            width: 100px;
        `}>
            <MenuItem showBadge active icon={faCommentDots} />
        </div>
    )
}