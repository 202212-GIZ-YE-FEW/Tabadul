import * as React from "react";

import ErrorPhoto from "../assets/Image/Illu404.svg";
import ErrorLine from "../assets/Image/Lines.svg";
import {
    BackHome,
    ErorrBox,
    ErorrContainer,
    ErrorHeading,
    ErrorImg,
    Errorparghrah,
    ErrorSection,
    ImgContent,
    Line,
    TextContent,
} from "../styles/error.styled";
export default function NotFoundPage() {
    return (
        <ErrorSection>
            <ErorrContainer>
                <ErorrBox>
                    <TextContent>
                        <ErrorHeading>Oooops !</ErrorHeading>
                        <Errorparghrah>
                            We can’t seem to find a page you are looking for{" "}
                            <Line src={ErrorLine} property='true' />
                        </Errorparghrah>
                        <BackHome href='/'>Back to home</BackHome>
                    </TextContent>
                    <ImgContent>
                        <ErrorImg src={ErrorPhoto} property='true' />
                    </ImgContent>
                </ErorrBox>
            </ErorrContainer>
        </ErrorSection>
    );
}
