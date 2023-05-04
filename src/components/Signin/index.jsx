import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { auth } from "@/utils/firebase";

import {
    Buttonspan,
    ChangePass,
    Checkinput,
    Checklabel,
    ContainerImg,
    Containerinput,
    Erorrsmsg,
    FaceBookImg,
    Imgsdev,
    Inputscontainer,
    InstagramImg,
    Itemscontainer,
    Itemsdev,
    LinedinImg,
    Linkparagraph,
    Loadding,
    Loadinglabel,
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [loading, setLoading] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const r = useRouter();
    const signIn = async (e) => {
        e.preventDefault();
        if (!keepLoggedIn) {
            setPersistence(auth, browserSessionPersistence);
        }
        try {
            if (!email) {
                setEmailError("Please enter your email");
            } else {
                setEmailError("");
            }
            if (!password) {
                setPassError("Please enter your password");
            } else {
                setPassError("");
            }
            // await auth.setPersistence(keepMeLoggedIn ? firebase.auth.Auth.Persistence.SESSION : firebase.auth.Auth.Persistence.LOCAL);
            await signInWithEmailAndPassword(auth, email, password);
            r.push("/");
            setLoading(true);
        } catch (error) {
            console.error(error);
            if (email && password) {
                alert("email or password is not vaild");
            }
            setLoading(false);
        }
    };

    return (
        <SigninContainer>
            <Itemscontainer>
                <Inputscontainer>
                    <Signinheader>Log in</Signinheader>
                    <Signinform onSubmit={signIn}>
                        <Containerinput>
                            <Test>
                                <Itemsdev>
                                    <Signintitle>Email</Signintitle>
                                    <Signininput
                                        id='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        type='text'
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        // onBlur={handleSubmit}
                                    />
                                    {emailError && (
                                        <Erorrsmsg>{emailError}</Erorrsmsg>
                                    )}
                                </Itemsdev>
                                <Itemsdev>
                                    <Signintitle>Password</Signintitle>
                                    <Signininput
                                        placeholder='Enter your password'
                                        type='password'
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        // onBlur={handleSubmit}
                                    />
                                    {passError && (
                                        <Erorrsmsg>{passError}</Erorrsmsg>
                                    )}
                                </Itemsdev>
                                <Checklabel>
                                    <Checkinput
                                        type='checkbox'
                                        checked={keepLoggedIn}
                                        onChange={(event) =>
                                            setKeepLoggedIn(
                                                event.target.checked
                                            )
                                        }
                                    />
                                    keep me logged in
                                </Checklabel>
                                <Signinbutton
                                    type='submit'
                                    // onClick={handleSubmit}
                                >
                                    <Buttonspan>Log in</Buttonspan>
                                </Signinbutton>
                                {loading && (
                                    <Loadding>
                                        <i></i>
                                        <Loadinglabel>Loading...</Loadinglabel>
                                    </Loadding>
                                )}
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
                            <ChangePass href='/Forgetpassword'>
                                Forget Password
                            </ChangePass>
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
