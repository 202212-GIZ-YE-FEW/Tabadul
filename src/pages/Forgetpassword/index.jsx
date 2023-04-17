import { useFormik } from "formik";
import React from "react";

import {
    BackToLogin,
    BtnResetPass,
    ForgetContainer,
    Forgetform,
    ForgetHeading,
    ForgetImage,
    ForgetInput,
    ForgetSection,
    ForgetText,
    ImageForget,
    ImgContent,
    LoginReturn,
    TextContent,
} from "@/styles/forgetpassword.styled";

import lockphoto from "../../assets/Image/lock.svg";
import Signin from "../../assets/Image/Signin.svg";
function Forgetpass() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
    });
    return (
        <ForgetContainer>
            <ForgetSection>
                <TextContent>
                    <ImageForget
                        src={lockphoto}
                        alt='forgetPassword'
                        width={200}
                        height={200}
                    />
                    <ForgetHeading>Trouble Logging In ?</ForgetHeading>
                    <ForgetText>
                        Enter your email and we will send you a link to get back
                        into your account
                    </ForgetText>
                    <Forgetform>
                        <ForgetInput
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.onBlur}
                        />
                        <BtnResetPass type='submit'>
                            Reset Password
                        </BtnResetPass>
                    </Forgetform>
                    <BackToLogin>
                        Return to{" "}
                        <LoginReturn href='/Signin'>Login</LoginReturn>
                    </BackToLogin>
                </TextContent>
                <ImgContent>
                    <ForgetImage
                        src={Signin}
                        alt='signin'
                        width={750}
                        height={650}
                    />
                </ImgContent>
            </ForgetSection>
        </ForgetContainer>
    );
}

export default Forgetpass;
