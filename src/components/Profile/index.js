import React from "react";
import PropTypes, {func} from "prop-types";
import StyledProfile, {Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks} from "./style";
import "styled-components/macro";
import Avatar from "../Avater";
import seven from "assets/images/772.jpg"
import photo1 from "assets/images/773.jpg"
import photo2 from "assets/images/774.jpg"
import photo3 from "assets/images/775.jpg"
import Paragraph from "../Paragraph";
import Emoji from "../Emoji";
import Icon from "../Icon";
import {faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Seperator from "../Seperator";
import TextStories from "../Text/text.stories";
import Text from "../Text";
import { ReactComponent as Cross} from "assets/icons/cross.svg";
import Button from "../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

function Profile({showEditBtn, showCloseIcon=true, onEdit, status, children, ...rest}) {
    return (
        <StyledProfile {...rest}>
            {/*关闭按钮*/}
            {showCloseIcon && < CloseIcon icon={Cross} />}
            <Avatar
                css={`margin: 26px 0; grid-area: 1 / 1 / 3 / 2;`}
                src={seven}
                size="160px"
                status={status}
                statusIconSize="25px"
            />
            {/*编辑按钮*/}
            {showEditBtn && (
                <Button size="52px" onClick={onEdit} css={`grid-area: 1 / 1 / 3 / 2; align-self: end; margin-left: 100px; z-index: 10;`}>
                    <FontAwesomeIcon icon={faPencil} fontSize="24px" />
                </Button>
            )}
            <Paragraph
                size="xlarge"
                css={`margin-bottom: 12px;`}
            >
                七七
            </Paragraph>
            <Paragraph
                size="medium"
                type="secondary"
                css={`margin-bottom: 18px;`}
            >
                璃月 不卜庐
            </Paragraph>
            <Paragraph
                css={`margin-bottom: 26px;`}
            >
                喜欢椰奶~<Emoji label="mike">🐏🍼</Emoji>
            </Paragraph>

            <SocialLinks>
                <Icon.Social icon={faTwitter} href="" />
                <Icon.Social icon={faGithub} bgColor="black" />
                <Icon.Social icon={faInstagram} bgColor="#e34f4c" />
            </SocialLinks>

            <Seperator css={`margin: 30px 0;`} />

            <ContactSection>
                <Description label="联系电话：">+86 15380933203</Description>
                <Description label="电子邮件：">mayitrust@gmail.com</Description>
                <Description label="个人网站：">blog.njnu.icu</Description>
            </ContactSection>

            <Seperator css={`margin: 30px 0;`} />

            <AlbumSection>
                <AlbumTitle>
                    <Text type="secondary">相册</Text>
                    <a>查看全部</a>
                </AlbumTitle>

                <Album>
                    <Photo src={photo1} alt="" />
                    <Photo src={photo2} alt="" />
                    <Photo src={photo3} alt="" />
                </Album>
            </AlbumSection>
        </StyledProfile>
    )
}

function Description({ label, children}) {
    return (
        <Paragraph>
            <Text type="secondary">{label}: </Text>
            <Text>{children}</Text>
        </Paragraph>
    )
}

Profile.propTypes = {
    children: PropTypes.any
}

export default Profile
