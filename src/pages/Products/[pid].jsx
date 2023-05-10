import Product from "@/components/ProductPgage/ProductPage";
import { auth, db, fetchItems } from "@/utils/firebase";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import RelatedItems from "../../components/relatedItems/relatedItems";
import styles from "./SingleProduct.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SingleProduct = ({ Item }) => {
    const [relatedItems, setRelatedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userinfo, setUserinfo] = useState();

    useEffect(() => {
        const fetchRelatedItems = async () => {
            const allItems = await fetchItems();
            const filteredItems = allItems.filter(
                (item) =>
                    item.category.name === Item.category.name &&
                    item.id !== Item.id
            );
            updateRelatedItems(filteredItems);
            setLoading(false);
        };
        fetchRelatedItems();
        getUserInfo(Item.userId);
        console.log("user", userinfo);
        console.log("item", Item);
    }, [Item]);

    const updateRelatedItems = (newItems) => {
        setRelatedItems((prevItems) => {
            const filteredItems = newItems.filter(
                (item) => !prevItems.some((prevItem) => prevItem.id === item.id)
            );
            return [...prevItems, ...filteredItems];
        });
    };

    const usersCollectionRef = collection(db, "users");

    const getUserInfo = async (id) => {
        const q = query(usersCollectionRef, where("uid", "==", id));
        try {
            const data = await getDocs(q);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setUserinfo(filteredData[0]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {/* {loading && (
                <div className={styles["loading-message"]}>
                    <div className={styles.loader}></div>
                </div>
            )} */}
            <Product
                title={Item.title}
                description={Item.description}
                images={Item.image}
                location={Item.location}
                category={Item.category}
                name={userinfo?.name}
                phone={userinfo?.phone}
                email={userinfo?.email}
            />

            {relatedItems.length > 0 && (
                <RelatedItems relatedItems={relatedItems} />
            )}
        </div>
    );
};

export async function getStaticPaths({ locales }) {
    const Items = await fetchItems();

    const paths = Items.map((item) =>
        locales.map((locale) => ({
            params: { pid: item.id },
            locale, // Pass locale here
        }))
    ).flat(); // Flatten array to avoid nested arrays

    return {
        paths,
        fallback: "blocking", // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params, locale }) {
    const docRef = doc(db, "items", params.pid);
    const data = await getDoc(docRef);
    const ItemData = data.data();
    return {
        props: {
            Item: ItemData,
            ...(await serverSideTranslations(locale, [
                "SingleProduct",
                "common",
                "footer",
            ])),
        },
    };
}

export default SingleProduct;
