import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, {Notes} from "./style";
import FilterList from "../FilterList";
import NoteCard from "../NoteCard";

function NoteList({children, ...rest}) {
    return (
        <StyledNoteList {...rest}>
            <FilterList options={["最新笔记优先", "有改动优先"]} actionLabel="添加笔记">
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (
                        <NoteCard key={i} />
                    ))}
                </Notes>
            </FilterList>
        </StyledNoteList>
    )
}

NoteList.propTypes = {
    children: PropTypes.any
}

export default NoteList
