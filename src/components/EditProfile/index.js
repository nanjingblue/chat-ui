import React, {useState} from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {GenderAndRegion, SelectGroup, GroupTitle, StyledIconInput} from "./style";
import Profile from "../Profile";
import Avatar from "../Avater";
import seven from "assets/images/773.jpg"
import Button from "../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"
import InputText from "../Input/InputText";
import Radio from "../Radio";
import LabelContainer from "../LabelContainer";
import Select from "../Select";
import Option from "../Option";
import Icon from "../Icon";
import {faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

function EditProfile({children, ...rest}) {
    // false 显示个人资料， true 显示编辑页面
    const [showEdit, setShowEdit] = useState(false)
    if (!showEdit) {
        return <Profile onEdit={() => setShowEdit(true)} showEditBtn showCloseIcon={false} />
    }
    return (
        <StyledEditProfile {...rest}>
            <Avatar src={seven} size="160px" css={`grid-area: 1 / 1 / 2 / 2; justify-self: center; margin-bottom: 12px;`}/>
            <Button
                size="52px"
                css={`grid-area: 1 / 1 / 3 / 2; z-index: 10; align-self: end; justify-self: end;`}
                onClick={() => setShowEdit(false)}
            >
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <GroupTitle>基本信息</GroupTitle>
            <InputText label="昵称" />
            <GenderAndRegion>
                <Radio.Group label="性别">
                    <Radio name="gender">男</Radio>
                    <Radio name="gender">女</Radio>
                </Radio.Group>
                <LabelContainer label="地区">
                    <SelectGroup>
                        <Select type="form">
                            <Option>省份</Option>
                        </Select>
                        <Select type="form">
                            <Option>城市</Option>
                        </Select>
                        <Select type="form">
                            <Option>区县</Option>
                        </Select>
                    </SelectGroup>
                </LabelContainer>
            </GenderAndRegion>
            <InputText label="个性签名" />

            <GroupTitle>联系信息</GroupTitle>
            <InputText label="联系电话" />
            <InputText label="电子邮箱" />
            <InputText label="个人网站" />

            <GroupTitle>社交信息</GroupTitle>
            <IconInput icon={faTwitter} />
            <IconInput icon={faGithub} bgColor="black" />
            <IconInput icon={faInstagram} bgColor="#e34f4c" />
        </StyledEditProfile>
    )
}

function IconInput({icon, bgColor, ...rest}) {
    return (
        <StyledIconInput>
            <Icon.Social icon={icon} bgColor={bgColor} />
            <InputText {...rest} />
        </StyledIconInput>
    )
}

EditProfile.propTypes = {
    children: PropTypes.any
}

export default EditProfile
