import React from "react";
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
    SignForm,
    SignHeader,
    SignInput,
    SignTitle,
    Signdev,
    Signspan,
    Signwith,
} from "./Signup.styled";

function Signup() {
    return (
        <SignContainer>
            <SignHeader>Sign Up</SignHeader>
            <SignForm>
                <FormSign method='post'>
                    <Signdev>
                        <SignTitle>Name</SignTitle>
                        <SignInput type='text' placeholder='Enter your name' />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Email</SignTitle>
                        <SignInput
                            type='email'
                            placeholder='Enter your email'
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Password</SignTitle>
                        <SignInput
                            type='password'
                            placeholder='Enter your password'
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Confirm Password</SignTitle>
                        <SignInput
                            type='password'
                            placeholder='Confirm your password'
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Phone</SignTitle>
                        <SignInput
                            type='number'
                            placeholder='Enter your Phone'
                        />
                    </Signdev>
                    <Signdev>
                        <SignTitle>Phone</SignTitle>
                        <LocationSelect>
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
