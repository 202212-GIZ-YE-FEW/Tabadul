import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { auth, db } from "@/utils/firebase";

import {
    Button,
    ImageSection,
    MainContainer,
    PenImage,
    ProfileImg,
    Section,
    Text,
    UserInfo,
} from "./UserDetails.style";
import Pen from "../../../../public/images/pen.svg";
import ProfileImage from "../../../../public/images/ProfilePlaceholder.svg";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const UserDetails = () => {
    const localuser = {
        language: "En",
    };
    const [currentuser, setCurrentUser] = useState();
    const usersCollRef = collection(db, "users");
    const router = useRouter();
    const { t } = useTranslation("profile");
    const translateMe = (word) => {
        return t(word);
    };
    useEffect(() => {
        const getalluser = async () => {
            try {
                const usersData = await getDocs(usersCollRef);
                const usersDocs = usersData.docs
                    .map((loc) => {
                        return { ...loc.data(), id: loc.id };
                    })
                    .filter((ele) => {
                        return ele.uid === auth.currentUser.uid;
                    });
                setCurrentUser(usersDocs[0]);
            } catch (err) {
                console.error(err);
            }
        };
        getalluser();
    }, []);

    return (
        <>
            <MainContainer>
                <ImageSection>
                    <ProfileImg
                        src={ProfileImage}
                        alt='ProfileImage'
                        width={222}
                        height={222}
                        priority
                    />
                    <Text>
                        {currentuser?.name} {currentuser?.lname}
                    </Text>
                    <Text>{currentuser?.location}</Text>
                </ImageSection>
                <UserInfo>
                    <Section>
                        <Text>
                            {translateMe("name")} : {currentuser?.name}{" "}
                            {currentuser?.lname}
                        </Text>
                        <Text>{currentuser?.location}</Text>
                    </Section>
                    <Section>
                        <Text>
                            {translateMe("phone")} : {currentuser?.phone}
                        </Text>
                        <Text>
                            {translateMe("email")} :{" "}
                            {currentuser?.email.substring(0, 16)}
                            ..
                        </Text>
                    </Section>
                    <Section>
                        <Text>
                            {translateMe("language")} : {localuser.language}
                        </Text>
                    </Section>
                    <Button router={router.locale}>
                        <Link href='/Updateuser'>
                            <PenImage src={Pen} alt='Edit' />
                        </Link>
                    </Button>
                </UserInfo>
            </MainContainer>
        </>
    );
};

export default UserDetails;
