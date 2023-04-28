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
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/router";

function Signup() {
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
                await createUserWithEmailAndPassword(auth, email, password);

                rout.push("/");
                setLoading(true);
            }
        } catch (err) {
            console.error(err);
            // alert("error")
            setLoading(false);
        }
    };

    return (
        <SignContainer>
            <SignHeader>Sign Up</SignHeader>
            <SignForm>
                <FormSign onSubmit={signUp}>
                    <Signdev>
                        <SignTitle>Name</SignTitle>
                        <SignInput
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder='Enter your name'
                        />
                        {nameError && <Erorrsmsgs>{nameError}</Erorrsmsgs>}
                    </Signdev>

                    <Signdev>
                        <SignTitle>Email</SignTitle>
                        <SignInput
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailErrors && <Erorrsmsgs>{emailErrors}</Erorrsmsgs>}
                    </Signdev>
                    <Signdev>
                        <SignTitle>Password</SignTitle>
                        <SignInput
                            id='password'
                            name='passwprd'
                            type='password'
                            placeholder='Enter your password'
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
                        <SignTitle>Confirm Password</SignTitle>
                        <SignInput
                            id='confirmpassword'
                            name='confirmpassword'
                            value={confirmpass}
                            onChange={(e) => setConfirmpass(e.target.value)}
                            type='password'
                            placeholder='Confirm your password'
                        />
                        {confirmpassError && (
                            <Erorrsmsgs>{confirmpassError}</Erorrsmsgs>
                        )}
                    </Signdev>
                    <Signdev>
                        <SignTitle>Phone</SignTitle>
                        <SignInput
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type='number'
                            placeholder='Enter your Phone'
                        />
                        {phoneError && <Erorrsmsgs>{phoneError}</Erorrsmsgs>}
                    </Signdev>
                    <Signdev>
                        <SignTitle>Location</SignTitle>
                        <LocationSelect
                            id='location'
                            name='location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <Selectoption disabled selected>
                                Select Location
                            </Selectoption>
                            <Selectoption>Mukalla</Selectoption>
                            <Selectoption>Istanbul</Selectoption>
                            <Selectoption>Sanaa</Selectoption>
                            <Selectoption>egypt</Selectoption>
                        </LocationSelect>
                        {locationError && (
                            <Erorrsmsgs>{locationError}</Erorrsmsgs>
                        )}
                    </Signdev>
                    <InfoDev>
                        <SignButton type='submit'>
                            <Signspan>Sign UP</Signspan>
                            {loading && (
                                <Loaddingmeg>
                                    <i></i>
                                    <LoadinParaghraph>
                                        Loading...
                                    </LoadinParaghraph>
                                </Loaddingmeg>
                            )}
                        </SignButton>
                        <Signwith>Sign Up with</Signwith>
                        <Imgdev>
                            <FaceBook
                                src='./images/Facebook.svg'
                                alt='Facebook'
                                width={42.3}
                                height={42.3}
                            />
                            <Instagram
                                src='./images/Instagram.svg'
                                alt='Instagram'
                                width={42.3}
                                height={42.3}
                            />
                            <Linedin
                                src='./images/Linkedin.svg'
                                alt='Linkedin'
                                width={42.3}
                                height={42.3}
                            />
                        </Imgdev>
                    </InfoDev>
                </FormSign>
            </SignForm>
        </SignContainer>
    );
}

export default Signup;
