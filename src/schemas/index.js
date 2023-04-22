import * as yup from "yup";

const passrules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("required"),
    name: yup.string().required("required"),
    phone: yup.number().integer().required("required"),
    password: yup
        .string()
        .min(5)
        .matches(passrules, { message: "please create strong password" })
        .required("required"),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "password not matche")
        .required("required"),
});
