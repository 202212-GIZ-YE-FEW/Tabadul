import { useTranslation, withTranslation } from "next-i18next";
import {
    browserSessionPersistence,
    GoogleAuthProvider,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
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
    const { t } = useTranslation("signin");
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

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            r.push("/");
        } catch {
            console.log("error");
        }
    };

    return (
        <SigninContainer>
            <Itemscontainer>
                <Inputscontainer>
                    <Signinheader>{t("Login")}</Signinheader>
                    <Signinform onSubmit={signIn}>
                        <Containerinput>
                            <Test>
                                <Itemsdev>
                                    <Signintitle>{t("Email")}</Signintitle>
                                    <Signininput
                                        id='email'
                                        name='email'
                                        placeholder={t("Enteryouremail")}
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
                                    <Signintitle>{t("Password")}</Signintitle>
                                    <Signininput
                                        placeholder={t("Enteryourpassword")}
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
                                    {t("keepmeloggedin")}
                                </Checklabel>
                                <Signinbutton
                                    type='submit'
                                    // onClick={handleSubmit}
                                >
                                    <Buttonspan>{t("Loginbutton")}</Buttonspan>
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
                                {t("Dothaveaccount")}
                                <Linkparagraph href='/Signup'>
                                    {t("Signup")}
                                </Linkparagraph>
                            </Paraghraph>
                            <ChangePass href='/Forgetpassword'>
                                {t("ForgetPassword")}
                            </ChangePass>
                        </ParaghraphConatainer>
                        <Signinwith>{t("Loginwith")}</Signinwith>
                        <Imgsdev>
                            <FaceBookImg
                                src='/images/google.svg'
                                alt='Facebook'
                                width={70.3}
                                height={70.3}
                                onClick={handleGoogleSignUp}
                            />
                        </Imgsdev>
                    </Test>
                </Inputscontainer>
                <ContainerImg>
                    <Signinimage
                        src='/images/Signin.svg'
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
