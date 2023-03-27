import Image from "next/image";
import React from "react";
import {
    CausesContainer,
    CausesWord,
    Paragraph,
    SingleCause,
    ThreeCausesDiv,
    Title,
} from "./causes.styled";

const Causes = () => {
    return (
        <CausesContainer>
            <CausesWord> Causes</CausesWord>
            <ThreeCausesDiv>
                <SingleCause>
                    <Image
                        src={"/Causes/causes1.png"}
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>Title</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Paragraph>
                </SingleCause>
                <SingleCause>
                    <Image
                        src={"/Causes/causes2.png"}
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>Title</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Paragraph>
                </SingleCause>
                <SingleCause>
                    <Image
                        src={"/Causes/causes3.png"}
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>Title</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Paragraph>
                </SingleCause>
            </ThreeCausesDiv>
        </CausesContainer>
    );
};

export default Causes;
