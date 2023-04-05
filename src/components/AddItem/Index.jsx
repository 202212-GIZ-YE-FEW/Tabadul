import React from "react";

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
    Locationoption,
    Pagecontainer,
    Selectoption,
    TitleInput,
    UploadContainer,
    UploadInput,
    Uploadspan,
} from "./AddItem.styled";

function AddItem() {
    return (
        <Pagecontainer>
            <ItemHeader>Add Item </ItemHeader>
            <Formcontainer>
                <FormItem method='post'>
                    <ItemInput>
                        <ItemTitle>Title</ItemTitle>
                        <TitleInput placeholder='Placeholder' type='text' />
                    </ItemInput>
                    <ItemInput>
                        <ItemCatogry>Catogry</ItemCatogry>
                        <CatogryInput
                            placeholder='Select catogry'
                            type='dropdown'
                        >
                            <Selectoption disabled selected>
                                Select catogry
                            </Selectoption>
                            <Selectoption>Catogry1</Selectoption>
                            <Selectoption>Catogry2</Selectoption>
                            <Selectoption>Catogry3</Selectoption>
                            <Selectoption>Catogry4</Selectoption>
                        </CatogryInput>
                    </ItemInput>
                    <ItemInput>
                        <ItemLocation>Location</ItemLocation>
                        <LocationInput>
                            <Locationoption disabled selected>
                                Select Location
                            </Locationoption>
                            <Locationoption>Istanbol</Locationoption>
                            <Locationoption>Sanaa</Locationoption>
                            <Locationoption>Mukallah</Locationoption>
                            <Locationoption>Istanbol</Locationoption>
                        </LocationInput>
                    </ItemInput>
                    <ItemInput>
                        <ItemDescription>Description</ItemDescription>
                        <DescriptionInput
                            placeholder='Description Item'
                            rows='10'
                            cols='105'
                        />
                    </ItemInput>
                    <ItemInput>
                        <Itemupload>Upload Photos</Itemupload>
                        <UploadContainer>
                            <Uploadspan>Upload Photos</Uploadspan>
                            <UploadInput type='file' />
                        </UploadContainer>
                    </ItemInput>
                    <Buttoncontainer>
                        <ConfirmButton type='submit'>
                            <Confirmspan>Confirm</Confirmspan>
                        </ConfirmButton>
                        <CancelButton type='submit'>
                            <Cancelspan>Cancel</Cancelspan>
                        </CancelButton>
                    </Buttoncontainer>
                </FormItem>
            </Formcontainer>
        </Pagecontainer>
    );
}

export default AddItem;
