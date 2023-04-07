import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAW6BNFu8Iljg1jg4PxJs8h3unzOQaP1tM",
    authDomain: "tabadul-e8f9b.firebaseapp.com",
    projectId: "tabadul-e8f9b",
    storageBucket: "tabadul-e8f9b.appspot.com",
    messagingSenderId: "852813212829",
    appId: "1:852813212829:web:63b198eff7ff6c5ee2b874",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
import { addDoc, collection, getDocs } from "firebase/firestore";
export const storage = getStorage(app);
const categoriesCollRef = collection(db, "categories");
const loactionsCollRef = collection(db, "locations");
const itemsCollRef = collection(db, "items");

export const fetchCategories = async () => {
    const catsData = await getDocs(categoriesCollRef);
    const catsDocs = catsData.docs.map((categ) => {
        return { ...categ.data(), id: categ.id };
    });
    return catsDocs;
};

export const fetchLocations = async () => {
    const locationsData = await getDocs(loactionsCollRef);
    const locDocs = locationsData.docs.map((loc) => {
        return { ...loc.data(), id: loc.id };
    });
    return locDocs;
};

export const fetchItems = async () => {
    const itemsData = await getDocs(itemsCollRef);
    const itemsDocs = itemsData.docs.map((item) => {
        return { ...item.data(), id: item.id };
    });
    return itemsDocs;
};

/*and then create a function inside your component
    to set up the useState e.g.

        async function fetchcats(){
        const cat =  await fetchCategories();
        setCategories(cat)
        }

call fetchcats inside useEffect*/

//api
export const addItem = async (obj) => {
    const addItem = await addDoc(itemsCollRef, obj);
};
