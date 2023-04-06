import React, { useState } from "react";
import {
    Buttoncontainer,
    CancelButton,
    Cancelspan,
    CatogryInput,
    ConfirmButton,
    Confirmspan,
    DescriptionInput,
    Formcontainer,
    FormItem,
    ItemCatogry,
    ItemDescription,
    ItemHeader,
    ItemInput,
    ItemLocation,
    ItemTitle,
    Itemupload,
    LocationInput,
    Pagecontainer,
    Selectoption,
    TitleInput,
    UploadInput,
    UploadContainer,
    Uploadspan,
    Locationoption,
    ItemImageInput,
    ItemImage,
} from "./AddItem.styled";
import { addItem } from "@/utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/utils/firebase";
import thumbnail from "../../../public/thumbnails/default-image.png";
import Link from "next/link";
import Router from "next/router";

function AddItem({ categoriesList, locationList }) {
    const [imageFile, sethandleImageFile] = useState();
    const [blob, setBlob] = useState();
    const current = new Date();

    function currentDate() {
        const date = current.getDate().toString().padStart(2, "0");
        const month = (current.getMonth() + 1).toString().padStart(2, "0");
        const year = current.getFullYear();
        return `${date}/${month}/${year}`;
    }

    const [item, setItem] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        image: "",
    });
    function addto(e) {
        e.preventDefault();
        const formatedDate = currentDate();
        const addtime = {
            ...item,
            time: current.toLocaleTimeString(),
            date: formatedDate,
        };

        addItem(addtime);
        alert("product has been added!");
        setTimeout(() => {
            Router.push("/listOfItems");
        }, 1000);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setItem({ ...item, [name]: value });
    }

    function handleSelect(e) {
        const name = e.target.name;
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const option = el.getAttribute("id");

        setItem({
            ...item,
            [name]: { name: e.target.value, id: option },
        });
    }

    function handleImageFile(e) {
        sethandleImageFile(e.target.files[0]);
        setBlob(URL.createObjectURL(e.target.files[0]));
        const img = e.target.files[0];
        uploadImage(img);
    }

    function uploadImage(img) {
        const storageRef = ref(storage, `/files/${img.name}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);

                    setItem({ ...item, image: url });
                });
            }
        );
    }

    return (
        <Pagecontainer>
            <ItemHeader>Add Item </ItemHeader>
            <Formcontainer>
                <FormItem method='post' onSubmit={addto}>
                    <ItemInput>
                        <ItemTitle>Title</ItemTitle>
                        <TitleInput
                            placeholder='Placeholder'
                            type='text'
                            name='title'
                            onChange={handleChange}
                        />
                    </ItemInput>
                    <ItemInput>
                        <ItemCatogry>Catogry</ItemCatogry>
                        <CatogryInput
                            placeholder='Select catogry'
                            type='dropdown'
                            name='category'
                            onChange={handleSelect}
                        >
                            <Selectoption disabled selected>
                                Select catogry
                            </Selectoption>
                            {categoriesList?.map((cate) => {
                                return (
                                    <Selectoption key={cate.id} id={cate.id}>
                                        {cate.name}
                                    </Selectoption>
                                );
                            })}
                        </CatogryInput>
                    </ItemInput>
                    <ItemInput>
                        <ItemLocation>Location</ItemLocation>
                        <LocationInput name='location' onChange={handleSelect}>
                            <Locationoption disabled selected>
                                Select Location
                            </Locationoption>
                            {locationList?.map((location) => {
                                return (
                                    <Locationoption
                                        key={location.id}
                                        id={location.id}
                                    >
                                        {location.name}
                                    </Locationoption>
                                );
                            })}
                        </LocationInput>
                    </ItemInput>
                    <ItemInput>
                        <ItemDescription>Description</ItemDescription>
                        <DescriptionInput
                            placeholder='Description Item'
                            rows='10'
                            cols='105'
                            name='description'
                            onChange={handleChange}
                        />
                    </ItemInput>
                    <ItemImageInput>
                        <Itemupload>Upload Photos</Itemupload>
                        <UploadContainer>
                            {!item.image ? (
                                <ItemImage
                                    alt='thumbnail'
                                    src={thumbnail}
                                    width='0'
                                    height='0'
                                />
                            ) : (
                                <ItemImage
                                    alt='seleted picture'
                                    src={blob}
                                    width='0'
                                    height='0'
                                />
                            )}

                            <Uploadspan>
                                {item.image
                                    ? `${imageFile.name}`
                                    : "Upload Photos"}
                            </Uploadspan>

                            <UploadInput
                                type='file'
                                placeholder={
                                    item.image
                                        ? `${imageFile.name}`
                                        : "Upload Photos"
                                }
                                onChange={handleImageFile}
                            />
                        </UploadContainer>
                    </ItemImageInput>
                    <Buttoncontainer>
                        <ConfirmButton
                            disabled={!item.image}
                            file={item.image}
                            type='submit'
                        >
                            <Confirmspan>Confirm</Confirmspan>
                        </ConfirmButton>
                        <Link href='/listOfItems'>
                            <CancelButton type='submit'>
                                <Cancelspan>Cancel</Cancelspan>
                            </CancelButton>
                        </Link>
                    </Buttoncontainer>
                </FormItem>
            </Formcontainer>
        </Pagecontainer>
    );
}

export default AddItem;
