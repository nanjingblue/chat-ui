import React from "react"
import Filter from "."
import Select from "../Select";
import Option from "../Option";
import Icon from "../Icon";
import {ReactComponent as Plus} from "assets/icons/plus.svg";
import Button from "../Button";

export default {
    title: "UI 组件/Filter",
    components: Filter
}

export const Default = () => {
   return (
       <Filter>
           <Filter.Filters label="列表排序">
               <Select>
                   <Option>最新消息优先</Option>
                   <Option>在线好友优先</Option>
               </Select>
           </Filter.Filters>

           <Filter.Action label="创建会话">
               <Button>
                   <Icon icon={Plus} width={12} height={12} />
               </Button>
           </Filter.Action>
       </Filter>
   )
}