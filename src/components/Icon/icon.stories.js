import React from "react"
import Icon from "."
import {ReactComponent as SmileIcon} from "assets/icons/smile.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCommentDots} from "@fortawesome/free-solid-svg-icons"


export default {
    title: "UI 组件/Icon",
    components: Icon
}

export const Default = () => <Icon icon={SmileIcon}/>

export const CustomColor = () => {
    return <Icon icon={SmileIcon} color="#ccc" />
}

export const CustomSize = () => {
    return <Icon icon={SmileIcon} width={48} height={48} />
}

export const FrontAwesome = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCommentDots} fontSize={16} />
            <FontAwesomeIcon icon={faCommentDots} fontSize={32} color="gray" />
            <FontAwesomeIcon icon={faCommentDots} fontSize={64} color="blue" />
            <FontAwesomeIcon icon={faCommentDots} fontSize={128} color="pink" />
        </div>
        )

}