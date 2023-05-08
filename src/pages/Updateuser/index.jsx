import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import {
    ForgetErorrs,
    InnerUpdateContainer,
    UpdateBtn,
    UpdateBtnContainer,
    UpdateContainer,
    Updateform,
    UpdateHeading,
    UpdateInput,
} from "@/styles/Updateuser.styled";
import { auth, db } from "@/utils/firebase";
function Updateuser() {
    const [UserId, setUserId] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    const [loaction, setloaction] = useState("");
    const [fnameError, setfnameError] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [phoneError, setlphoneError] = useState("");
    const [lcationError, setllcatioError] = useState("");
    const usersCollRef = collection(db, "users");
    useEffect(() => {
        const getalluser = async () => {
            try {
                const usersData = await getDocs(usersCollRef);
                const usersDocs = usersData.docs
                    .map((loc) => {
                        return { ...loc.data(), id: loc.id };
                    })
                    .filter((ele) => {
                        return ele.uid === auth.currentUser.uid;
                    });
                setUserId(usersDocs[0].id);
            } catch (err) {
                console.error(err);
            }
        };
        getalluser();
    }, []);
    const updateUserName = async () => {
        const userDoc = doc(db, "users", UserId);
        await updateDoc(userDoc, {
            name: fname,
            lname: lname,
            phone: phone,
            location: loaction,
        });
    };
    async function Submmitting(e) {
        e.preventDefault();
        try {
            if (!fname) {
                setfnameError("Name is required");
            } else {
                setfnameError("");
            }
            if (!lname) {
                setlnameError("Last name is required");
            } else {
                setlnameError("");
            }
            if (!phone) {
                setlphoneError("Phone is required");
            } else {
                setlphoneError("");
            }
            if (!loaction) {
                setllcatioError("Location is required");
            } else {
                setllcatioError("");
            }
            if (fname && lname && phone && loaction) {
                updateUserName();
                swal({
                    title: "User Updated!",
                    text: "User has been Updated",
                    icon: "success",
                    button: "Cancel",
                });
            }
        } catch (error) {
            const errorMessage = error.message;
            swal({
                title: "Email not found go & sigin up !",
                text: errorMessage,
                icon: "error",
                button: "Cancel",
            });
        }
    }
    return (
        <UpdateContainer>
            <InnerUpdateContainer>
                <UpdateHeading>Update User</UpdateHeading>
                <Updateform onSubmit={Submmitting}>
                    <UpdateInput
                        type='text'
                        placeholder='First Name'
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                    />
                    {fnameError && <ForgetErorrs>{fnameError}</ForgetErorrs>}
                    <UpdateInput
                        type='text'
                        placeholder='Last Name'
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
                    />
                    {lnameError && <ForgetErorrs>{lnameError}</ForgetErorrs>}
                    <UpdateInput
                        type='number'
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />
                    {phoneError && <ForgetErorrs>{phoneError}</ForgetErorrs>}
                    <UpdateInput
                        type='text'
                        placeholder='Location'
                        value={loaction}
                        onChange={(e) => setloaction(e.target.value)}
                    />
                    {lcationError && (
                        <ForgetErorrs>{lcationError}</ForgetErorrs>
                    )}
                    <UpdateBtnContainer>
                        <UpdateBtn type='submit'>Update</UpdateBtn>
                    </UpdateBtnContainer>
                </Updateform>
            </InnerUpdateContainer>
        </UpdateContainer>
    );
}

export default Updateuser;
