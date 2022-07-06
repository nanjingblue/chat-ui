import React from "react"
import Badge from "."
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default {
    title: "UI 组件/Badge",
    components: Badge
}

export const Default = () => <Badge count={5} />

export const DotVariant = () => {
    return (
        <div>
            <Badge variant="dot" show="true" count={5}>
                <FontAwesomeIcon icon={faCommentDots} fontSize="24px" />
            </Badge>
        </div>
    )
}
