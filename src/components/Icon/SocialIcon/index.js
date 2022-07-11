import React from "react";
import PropTypes, {func} from "prop-types";
import Button from "../../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SocialIcon({ icon, bgColor, href, ...rest}) {
    return (
        <Button
            size="30px"
            bgColor={bgColor}
            onClick={() => href && window.open(href, "_blank")}
            {...rest}
        >
            <FontAwesomeIcon icon={icon} style={{fontSize: "15px"}} />
        </Button>
    )
}

SocialIcon.propTypes = {
    icon: PropTypes.elementType,
    bgColor: PropTypes.string,
    href: PropTypes.string
};

export default SocialIcon