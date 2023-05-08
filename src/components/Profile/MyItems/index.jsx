import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import { auth, db } from "@/utils/firebase";

import {
    Container,
    Header,
    Icon,
    ItemCard,
    ItemImage,
    Text,
} from "./MyItems.styled";
import deleteIcon from "../../../../public/images/deleteIcon.svg";
import penIcon from "../../../../public/images/itemsPen.svg";

const MyItems = () => {
    const [relateditems, setrelateditems] = useState();
    const itemsCollRef = collection(db, "items");
    useEffect(() => {
        const getallitems = async () => {
            try {
                const itemsData = await getDocs(itemsCollRef);
                const itemsDocs = itemsData.docs
                    .map((loc) => {
                        return { ...loc.data(), id: loc.id };
                    })
                    .filter((ele) => {
                        return ele.userId === auth.currentUser.uid;
                    });
                setrelateditems(itemsDocs[0]);
            } catch (err) {
                console.error(err);
            }
        };
        getallitems();
    }, []);
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "items", id);
        await deleteDoc(productDoc);
        try {
            swal({
                title: "Product Detected!",
                text: "Product has been Detected",
                icon: "success",
                button: "Cancel",
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Header>My Items</Header>
            {relateditems && (
                <Container>
                    <ItemCard>
                        <ItemImage
                            src={relateditems?.image[0].url}
                            alt='RealtedIcon'
                            width={100}
                            height={100}
                        />
                        <Text>{relateditems?.title}</Text>
                        <Link
                            href='/Updateproduct'
                            style={{ marginLeft: "auto" }}
                        >
                            <Icon src={penIcon} alt='pen Icon' />
                        </Link>
                        <Icon
                            src={deleteIcon}
                            alt='Delete Icon'
                            onClick={() => deleteProduct(relateditems.id)}
                        />
                    </ItemCard>
                </Container>
            )}
        </>
    );
};

export default MyItems;
