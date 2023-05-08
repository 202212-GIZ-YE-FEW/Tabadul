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
function Updateproduct() {
    const [userId, setUserId] = useState("");
    const [desc, setdesc] = useState("");
    const [title, settitle] = useState("");
    const [descError, setdescError] = useState("");
    const [titleError, setltitleError] = useState("");
    const usersCollRef = collection(db, "items");
    useEffect(() => {
        const getalluser = async () => {
            try {
                const usersData = await getDocs(usersCollRef);
                const usersDocs = usersData.docs
                    .map((loc) => {
                        return { ...loc.data(), id: loc.id };
                    })
                    .filter((ele) => {
                        return ele.userId === auth.currentUser.uid;
                    });
                setUserId(usersDocs[0].id);
            } catch (err) {
                alert(err);
            }
        };
        getalluser();
    }, []);
    const updateUserName = async () => {
        const userDoc = doc(db, "items", userId);
        await updateDoc(userDoc, {
            description: desc,
            title: title,
        });
    };
    async function Submmitting(e) {
        e.preventDefault();
        try {
            if (!desc) {
                setdescError("description is required");
            } else {
                setdescError("");
            }
            if (!title) {
                setltitleError("Last name is required");
            } else {
                setltitleError("");
            }

            if (desc && title) {
                updateUserName();
                swal({
                    title: "Product Updated!",
                    text: "Product has been Updated",
                    icon: "success",
                    button: "Cancel",
                });
            }
        } catch (error) {
            const errorMessage = error.message;
            swal({
                title: "Product Not Updated !",
                text: errorMessage,
                icon: "error",
                button: "Cancel",
            });
        }
    }
    return (
        <UpdateContainer>
            <InnerUpdateContainer>
                <UpdateHeading>Update Product</UpdateHeading>
                <Updateform onSubmit={Submmitting}>
                    <UpdateInput
                        type='text'
                        placeholder='Description of Product'
                        value={desc}
                        onChange={(e) => setdesc(e.target.value)}
                    />
                    {descError && <ForgetErorrs>{descError}</ForgetErorrs>}
                    <UpdateInput
                        type='text'
                        placeholder='title'
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                    {titleError && <ForgetErorrs>{titleError}</ForgetErorrs>}
                    <UpdateBtnContainer>
                        <UpdateBtn type='submit'>Update</UpdateBtn>
                    </UpdateBtnContainer>
                </Updateform>
            </InnerUpdateContainer>
        </UpdateContainer>
    );
}

export default Updateproduct;
