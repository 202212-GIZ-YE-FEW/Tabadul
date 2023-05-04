import Image from "next/image";
import React from "react";

import {
    Button,
    ImageSection,
    MainContainer,
    ProfileImg,
    Section,
    Text,
    UserInfo,
} from "./UserDetails.style";
import Pen from "../../../../public/images/pen.svg";
import ProfileImage from "../../../../public/images/ProfilePlaceholder.svg";

const UserDetails = ({ user }) => {
    const localuser = {
        fname: "Name",
        surname: "Surname",
        location: "Sana'a",
        phone: "777888999",
        email: "test@example.com",
        language: "En",
    };
    return (
        <>
            <MainContainer>
                <ImageSection>
                    <ProfileImg
                        src={ProfileImage}
                        alt='Profile Image'
                        width={222}
                        height={222}
                    />
                    <Text>
                        {localuser.fname} {localuser.surname}
                    </Text>
                    <Text>{localuser.location}</Text>
                </ImageSection>
                <UserInfo>
                    <Section>
                        <Text>
                            {localuser.fname} {localuser.surname}
                        </Text>
                        <Text>{localuser.location}</Text>
                    </Section>
                    <Section>
                        <Text>Phone:{localuser.phone}</Text>
                        <Text>Email: {localuser.email}</Text>
                    </Section>
                    <Section>
                        <Text>Language: {localuser.language}</Text>
                    </Section>
                    <Button>
                        <Image src={Pen} alt='Edit' />
                    </Button>
                </UserInfo>
            </MainContainer>
        </>
    );
};

export default UserDetails;
