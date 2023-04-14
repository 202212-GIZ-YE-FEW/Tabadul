import Product from "@/components/ProductPgage/ProductPage";

import { db, fetchItems } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const SingleProduct = ({ Item }) => {
    return (
        <div>
            <Product
                title={Item.title}
                description={Item.description}
                images={Item.image}
                location={Item.location}
            />
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
