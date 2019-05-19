import React from 'react';

const ImageList = (props) => {
    // desctructuring: {description, id, urls } = image
    const images = props.images.map(({ description, id, urls }) => {
        // We only have to assign the key to the root element that we are
        // returning from a list of records
        return <img key={id} src={urls.regular} alt={description} />
    });

    return <div>{images}</div>;
}

export default ImageList;