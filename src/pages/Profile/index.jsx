import React from "react";

import MyItems from "@/components/Profile/MyItems";
import UserDetails from "@/components/Profile/UserDetails";

import { Container, ProfileSection } from "@/styles/profile.styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Profile() {
    return (
        <ProfileSection>
            <Container>
                <UserDetails />
                <MyItems />
            </Container>
        </ProfileSection>
    );
}

export default Profile;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "profile",
                "common",
                "footer",
            ])),
            // Will be passed to the page component as props
        },
    };
}
