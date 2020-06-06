import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // desctructuring: {description, id, urls } = image
    const images = props.images.map((image) => {
        // We only have to assign the key to the root element that we are
        // returning from a list of records
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;