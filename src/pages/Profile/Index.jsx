import React from "react";

import MyItems from "@/components/Profile/MyItems";
import UserDetails from "@/components/Profile/UserDetails";

import { Container, ProfileSection } from "@/styles/profile.styled";
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
