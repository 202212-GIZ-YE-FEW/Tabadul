import React from "react";
import {
    Buttonspan,
    Checkinput,
    Checklabel,
    Containerinput,
    Inputscontainer,
    Itemscontainer,
    Itemsdev,
    Linkparagraph,
    Paraghraph,
    ParaghraphConatainer,
    SigninContainer,
    Signinbutton,
    Signinform,
    Signinheader,
    Signininput,
    Signintitle,
    Imgsdev,
    FaceBookImg,
    InstagramImg,
    LinedinImg,
    Signinwith,
    Signinimage,
    Test,
    ChangePass,
    ContainerImg,
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
