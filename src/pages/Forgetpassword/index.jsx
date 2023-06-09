import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import swal from "sweetalert";
import { basicSchema } from "@/schemas";
import {
    BackToLogin,
    BtnResetPass,
    ForgetContainer,
    ForgetErorrs,
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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const onSubmit = async (values) => {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, values.email)
        .then(() => {
            swal({
                title: "Email Sent!",
                text: "Recover Email has Been Sent to your Email",
                icon: "success",
                button: "Cancel",
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            swal({
                title: "Email not found go & sigin up !",
                text: errorMessage,
                icon: "error",
                button: "Cancel",
            });
        });
};

function Forgetpass() {
    const { t } = useTranslation("forgetPassword");
    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: basicSchema,
        onSubmit,
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
                    <ForgetHeading>{t("TroubleLoggingIn")}</ForgetHeading>
                    <ForgetText>{t("EnterEmail")}</ForgetText>
                    <Forgetform onSubmit={handleSubmit}>
                        <ForgetInput
                            id='email'
                            name='email'
                            type='email'
                            placeholder={t("EmailPlaceHolder")}
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && (
                            <ForgetErorrs>{errors.email}</ForgetErorrs>
                        )}
                        <BtnResetPass type='submit' disabled={isSubmitting}>
                            {t("ResetPassword")}
                        </BtnResetPass>
                    </Forgetform>
                    <BackToLogin>
                        {t("ReturnTo")}
                        <LoginReturn href='/Signin'>{` ${t(
                            "Login"
                        )}`}</LoginReturn>
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

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "forgetPassword",
                "common",
                "footer",
            ])),
            // Will be passed to the page component as props
        },
    };
}
