import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, {Intro, Name} from "./style";
import Avatar from "../Avater";
import face from "assets/images/77.jpg"

function ContactCard({children, ...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status="online" />
            <Name>七七</Name>
            <Intro>真名：肚饿真君</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {
    children: PropTypes.any
}

export default ContactCard
