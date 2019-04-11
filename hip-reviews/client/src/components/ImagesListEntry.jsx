import React from 'react';

const ImagesListEntry = (props) => {

    const renderImages = (props) => {
        return props.ImageList.map((image, idx) => {
            return ( 
                <Image key = {idx}> <img src = {image.image_url} alt="Smiley face" height="120" width="120"></img></Image>
            )
        });
    }

    return (
       <div>{renderImages(props)}</div>
    )
};

const Image =  styled.span`
    width: 22%;
    height: auto;
    border-radius: 5px;
    border: 0;
    object-fit: cover;
    margin-right: 2.5%;
    margin-bottom: 25px;
    margin-top: 7px;
    cursor: pointer;
`;
export default ImagesListEntry;
 