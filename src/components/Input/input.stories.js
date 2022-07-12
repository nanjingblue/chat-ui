import React from "react"
import Input from "."
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard, faSmile} from "@fortawesome/free-solid-svg-icons";

export default {
    title: "UI 组件/Input",
    components: Input
}

export const Default = () => <Input />

export const Search = () => <Input.Search />

export const WithAffix = () => <Input prefix={<FontAwesomeIcon icon={faClipboard} color="#cccccc" fontSize={18} /> } suffix={<FontAwesomeIcon icon={faSmile} color="#cccccc" fontSize={18} />} />

export const InputWithLabel = () => <Input.Text label="昵称" />
export const InputWithoutLabel = () => <Input.Text />
