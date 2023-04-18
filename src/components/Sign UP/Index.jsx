import React, { useState } from "react";

import {
    FaceBook,
    FormSign,
    Imgdev,
    InfoDev,
    Instagram,
    Linedin,
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
    // const rout = useRouter();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            // rout.push("/");
        } catch (err) {
            console.error(err);
            // alert("error")
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
                            type='text'
                            placeholder='Enter your name'
                            required
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Email</SignTitle>
                        <SignInput
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Password</SignTitle>
                        <SignInput
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='current-password'
                            required
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Confirm Password</SignTitle>
                        <SignInput
                            type='password'
                            placeholder='Confirm your password'
                            required
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Phone</SignTitle>
                        <SignInput
                            type='number'
                            placeholder='Enter your Phone'
                            required
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Location</SignTitle>
                        <LocationSelect required>
                            <Selectoption disabled selected>
                                Select Location
                            </Selectoption>
                            <Selectoption>Mukalla</Selectoption>
                            <Selectoption>Istanbul</Selectoption>
                            <Selectoption>Sanaa</Selectoption>
                            <Selectoption>egypt</Selectoption>
                        </LocationSelect>
                    </Signdev>
                    <InfoDev>
                        <SignButton type='submit'>
                            <Signspan>Sign UP</Signspan>
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
