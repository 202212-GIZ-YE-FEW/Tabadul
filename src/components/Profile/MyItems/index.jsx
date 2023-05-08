import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
    return (
        <>
            <Header>My Items</Header>
            <Container>
                <ItemCard>
                    <ItemImage
                        src={relateditems?.image[0].url}
                        alt='RealtedIcon'
                        width={100}
                        height={100}
                    />
                    <Text>{relateditems?.title}</Text>
                    <Link href='/Updateproduct' style={{ marginLeft: "auto" }}>
                        <Icon src={penIcon} alt='pen Icon' />
                    </Link>
                    <Icon src={deleteIcon} alt='Delete Icon' />
                </ItemCard>
            </Container>
        </>
    );
};

export default MyItems;
