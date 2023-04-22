import Product from "@/components/ProductPgage/ProductPage";
import { db, fetchItems } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import RelatedItems from "../../components/relatedItems/relatedItems";
import styles from "./SingleProduct.module.css";

const SingleProduct = ({ Item }) => {
    const [relatedItems, setRelatedItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, [Item]);

    const updateRelatedItems = (newItems) => {
        setRelatedItems((prevItems) => {
            const filteredItems = newItems.filter(
                (item) => !prevItems.some((prevItem) => prevItem.id === item.id)
            );
            return [...prevItems, ...filteredItems];
        });
    };

    return (
        <div>
            {loading && (
                <div className={styles["loading-message"]}>
                    <div className={styles.loader}></div>
                </div>
            )}
            <Product
                title={Item.title}
                description={Item.description}
                images={Item.image}
                location={Item.location}
                category={Item.category}
            />
            {relatedItems.length > 0 && (
                <RelatedItems relatedItems={relatedItems} />
            )}
        </div>
    );
};

export async function getStaticPaths() {
    const Items = await fetchItems();

    const paths = Items.map((Items) => {
        return {
            params: {
                pid: String(Items.id),
            },
        };
    });
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const docRef = doc(db, "items", params.pid);
    const data = await getDoc(docRef);
    const ItemData = data.data();
    return {
        props: {
            Item: ItemData,
        },
    };
}

export default SingleProduct;
