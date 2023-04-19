import React from "react";

import {
    Buttonspan,
    ChangePass,
    Checkinput,
    Checklabel,
    ContainerImg,
    Containerinput,
    FaceBookImg,
    Imgsdev,
    Inputscontainer,
    InstagramImg,
    Itemscontainer,
    Itemsdev,
    LinedinImg,
    Linkparagraph,
    Paraghraph,
    ParaghraphConatainer,
    Signinbutton,
    SigninContainer,
    Signinform,
    Signinheader,
    Signinimage,
    Signininput,
    Signintitle,
    Signinwith,
    Test,
} from "./Signin.styled";

function Signin() {
    return (
        <SigninContainer>
            <Itemscontainer>
                <Inputscontainer>
                    <Signinheader>Log in</Signinheader>
                    <Signinform>
                        <Containerinput>
                            <Test>
                                <Itemsdev>
                                    <Signintitle>Email</Signintitle>
                                    <Signininput
                                        placeholder='Enter your email'
                                        type='text'
                                    />
                                </Itemsdev>
                                <Itemsdev>
                                    <Signintitle>Password</Signintitle>
                                    <Signininput
                                        placeholder='Enter your password'
                                        type='password'
                                    />
                                </Itemsdev>
                                <Checklabel>
                                    <Checkinput type='checkbox' />
                                    keep me logged in
                                </Checklabel>
                                <Signinbutton type='submit'>
                                    <Buttonspan>Log in</Buttonspan>
                                </Signinbutton>
                            </Test>
                        </Containerinput>
                    </Signinform>
                    <Test>
                        <ParaghraphConatainer>
                            <Paraghraph>
                                Do not have an account ?
                                <Linkparagraph href='/Signup'>
                                    Sign up
                                </Linkparagraph>
                            </Paraghraph>
                            <ChangePass>Forget Password</ChangePass>
                        </ParaghraphConatainer>
                        <Signinwith>Log in with</Signinwith>
                        <Imgsdev>
                            <FaceBookImg
                                src='./images/Facebook.svg'
                                alt='Facebook'
                                width={42.3}
                                height={42.3}
                            />
                            <InstagramImg
                                src='./images/Instagram.svg'
                                alt='Instagram'
                                width={42.3}
                                height={42.3}
                            />
                            <LinedinImg
                                src='./images/Linkedin.svg'
                                alt='Linkedin'
                                width={42.3}
                                height={42.3}
                            />
                        </Imgsdev>
                    </Test>
                </Inputscontainer>
                <ContainerImg>
                    <Signinimage
                        src='./images/Signin.svg'
                        alt='sign in'
                        width={750}
                        height={650}
                    />
                </ContainerImg>
            </Itemscontainer>
        </SigninContainer>
    );
}

export default Signin;
