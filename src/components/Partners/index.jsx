import React from "react";

import { Container, Header, PartnerImage } from "./Partners.styled";
import partnersImage from "../../../public/images/partnersImage.svg";

const Partners = () => {
    return (
        <>
            <Header>Our Partners</Header>
            <Container>
                <PartnerImage src={partnersImage} alt='Partner' />
                <PartnerImage src={partnersImage} alt='Partner' />
                <PartnerImage src={partnersImage} alt='Partner' />
                <PartnerImage src={partnersImage} alt='Partner' />
            </Container>
        </>
    );
};

export default Partners;
