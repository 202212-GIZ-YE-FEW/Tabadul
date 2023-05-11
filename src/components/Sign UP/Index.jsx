import { useTranslation, withTranslation } from "next-i18next";
import React, { useState } from "react";

import {
    Erorrsmsgs,
    FaceBook,
    FormSign,
    Imgdev,
    InfoDev,
    Instagram,
    Linedin,
    Loaddingmeg,
    LoadinParaghraph,
    LocationSelect,
    Selectoption,
    SignButton,
    SignContainer,
    Signdev,
    SignForm,
    SignHeader,
    SignInput,
    Signspan,
    SignTitle,
    Signwith,
} from "./Signup.styled";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, db } from "@/utils/firebase";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";

function Signup() {
    const { t } = useTranslation("signup");
    function translateMe(word) {
        return t(word);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState();
    const [emailErrors, setEmailErrors] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [confirmpassError, setConfirmError] = useState("");
    const [passlenError, setPasslenError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [loading, setLoading] = useState(false);

    const rout = useRouter();
    const signUp = async (e) => {
        e.preventDefault();
        try {
            if (!email) {
                setEmailErrors("email is required");
            } else {
                setEmailErrors("");
            }
            if (!password) {
                setPasswordError("password is required");
            } else {
                setPasswordError("");
            }
            if (password !== confirmpass) {
                setConfirmError("password is not matche");
            } else {
                setConfirmError("");
            }
            if (password.length < 5) {
                setPasslenError("password should be more than one character");
            } else {
                setPasslenError("");
            }
            if (!name) {
                setNameError("name is required");
            } else {
                setNameError("");
            }
            if (!phone) {
                setPhoneError("phone is required");
            } else {
                setPhoneError("");
            }
            if (!location) {
                setLocationError("location is required");
            } else {
                setLocationError("");
            }
            if (email && password && name && phone && location && confirmpass) {
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                ).then(async (registeredUser) => {
                    await addDoc(collection(db, "users"), {
                        uid: registeredUser.user.uid,
                        name: name,
                        phone: phone,
                        location: location,
                        email: email,
                    });

                    rout.push("/");
                    setLoading(true);
                });
            }
        } catch (err) {
            console.error(err);
            // alert("error")
            setLoading(false);
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider).then(async (resulte) => {
                const user = resulte.user;
                console.log(user);
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name: user?.displayName,
                    phone: user?.phoneNumber,
                    email: user?.email,
                });
                rout.push("/");
            });
        } catch {
            console.log("error");
        }
    };

    return (
        <SignContainer>
            <SignHeader>{t("SignUp")}</SignHeader>
            <SignForm>
                <FormSign onSubmit={signUp}>
                    <Signdev>
                        <SignTitle>{t("SignUpName")}</SignTitle>
                        <SignInput
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder={t("EnterYourname")}
                        />
                        {nameError && <Erorrsmsgs>{nameError}</Erorrsmsgs>}
                    </Signdev>

                    <Signdev>
                        <SignTitle>{t("SignupEmail")}</SignTitle>
                        <SignInput
                            id='email'
                            name='email'
                            type='email'
                            placeholder={t("EnterYouremail")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailErrors && <Erorrsmsgs>{emailErrors}</Erorrsmsgs>}
                    </Signdev>
                    <Signdev>
                        <SignTitle>{t("Password")}</SignTitle>
                        <SignInput
                            id='password'
                            name='passwprd'
                            type='password'
                            placeholder={t("Enteryourpassword")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='current-password'
                        />
                        {passlenError && (
                            <Erorrsmsgs>{passlenError}</Erorrsmsgs>
                        )}
                        {passwordError && (
                            <Erorrsmsgs>{passwordError}</Erorrsmsgs>
                        )}
                    </Signdev>
                    <Signdev>
                        <SignTitle>{t("ConfirmPassword")}</SignTitle>
                        <SignInput
                            id='confirmpassword'
                            name='confirmpassword'
                            value={confirmpass}
                            onChange={(e) => setConfirmpass(e.target.value)}
                            type='password'
                            placeholder={t("Confirmyourpassword")}
                        />
                        {confirmpassError && (
                            <Erorrsmsgs>{confirmpassError}</Erorrsmsgs>
                        )}
                    </Signdev>
                    <Signdev>
                        <SignTitle>{t("Phone")}</SignTitle>
                        <SignInput
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type='number'
                            placeholder={t("EnteryourPhone")}
                        />
                        {phoneError && <Erorrsmsgs>{phoneError}</Erorrsmsgs>}
                    </Signdev>
                    <Signdev>
                        <SignTitle>{t("Location")}</SignTitle>
                        <LocationSelect
                            id='location'
                            name='location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <Selectoption disabled selected>
                                {t("SelectLocation")}
                            </Selectoption>
                            <Selectoption>{t("Mukalla")}</Selectoption>
                            <Selectoption>{t("Istanbul")}</Selectoption>
                            <Selectoption>{t("Sana'a")}</Selectoption>
                            <Selectoption>{t("egypt")}</Selectoption>
                        </LocationSelect>
                        {locationError && (
                            <Erorrsmsgs>{locationError}</Erorrsmsgs>
                        )}
                    </Signdev>
                    <InfoDev>
                        <SignButton type='submit'>
                            <Signspan>{t("SignUPbutton")}</Signspan>
                            {loading && (
                                <Loaddingmeg>
                                    <i></i>
                                    <LoadinParaghraph>
                                        Loading...
                                    </LoadinParaghraph>
                                </Loaddingmeg>
                            )}
                        </SignButton>
                        <Signwith>{t("SignUpwith")}</Signwith>
                        <Imgdev>
                            <FaceBook
                                src='/images/google.svg'
                                alt='Facebook'
                                width={70.3}
                                height={70.3}
                                onClick={handleGoogleSignUp}
                            />
                        </Imgdev>
                    </InfoDev>
                </FormSign>
            </SignForm>
        </SignContainer>
    );
}

export default Signup;
