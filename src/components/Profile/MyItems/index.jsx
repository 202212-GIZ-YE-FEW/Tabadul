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
    NoData,
    Text,
} from "./MyItems.styled";
import deleteIcon from "../../../../public/images/deleteIcon.svg";
import penIcon from "../../../../public/images/itemsPen.svg";
import noData from "../../../assets/Image/nodata.svg";

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
                setrelateditems(itemsDocs);
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
    console.log(relateditems);
    return (
        <>
            <Header>My Items</Header>
            {relateditems?.length > 0 ? (
                relateditems?.map((ele, index) => {
                    return (
                        <Container key={index}>
                            <ItemCard>
                                <ItemImage
                                    src={ele.image[0].url}
                                    alt='RealtedIcon'
                                    width={100}
                                    height={100}
                                />
                                <Text>{ele.title}</Text>
                                <Link
                                    href='/Updateproduct'
                                    style={{ marginLeft: "auto" }}
                                >
                                    <Icon src={penIcon} alt='pen Icon' />
                                </Link>
                                <Icon
                                    src={deleteIcon}
                                    alt='Delete Icon'
                                    onClick={() => deleteProduct(ele.id)}
                                />
                            </ItemCard>
                        </Container>
                    );
                })
            ) : (
                <NoData src={noData} />
            )}
        </>
    );
};

export default MyItems;
