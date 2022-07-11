import Avatar from "./index";

import face1 from "assets/images/face-male-1.jpg"
import face2 from "assets/images/face-male-2.jpg"
import face3 from "assets/images/face-male-3.jpg"
import face4 from "assets/images/face-male-4.jpg"

import seven from "assets/images/77.jpg"

export default {
    title: "UI 组件/Avatar",
    component: Avatar
}

export const Default = () => {
    return <Avatar src={seven}/>
}

export const Sizes = () => {
    return (
        <div className="row-elements">
            <Avatar src={face1} size="48px" status="online" />
            <Avatar src={face2} size="56px" />
            <Avatar src={face3} size="64px" />
            <Avatar src={face4} size="72px" status="offline" />
        </div>
        )
}

export const WithStatus = () => {
    return (
        <div className="row-elements">
            <Avatar src={seven} size="48px" status="online" statusIconSize="8px"/>
            <Avatar src={seven} size="48px" status="offline" />
            <Avatar src={face3} size="160px" status="online" statusIconSize="25px"/>
        </div>
    )
}