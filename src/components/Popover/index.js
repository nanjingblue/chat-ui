import React, {useState} from "react";
import PropTypes from "prop-types";
import StyledPopover, {Content, Target, Triangle} from "./style";

function Popover({children, content, offset = {}, onVisible, onHide, ...rest}) {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        if (visible) {
            setVisible(false)
            onHide && onHide()  // 回调
        } else {
            setVisible(true)
            onVisible && onVisible() // 回调
        }
    }

    return (
        <StyledPopover onClick={handleClick} {...rest}>
            <Content visible={visible} offset={offset}>{content}</Content>
            {/*指向附加组件的三角形*/}
            <Triangle visible={visible} offset={offset} />
            {/*附加组件*/}
            <Target>{children}</Target>
        </StyledPopover>
    )
}

Popover.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    offset: PropTypes.shape({x: PropTypes.string, y:PropTypes.string}),
    onVisible: PropTypes.func,
    onHide: PropTypes.func,
}

export default Popover
