import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        // Create a React Ref:
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // We need to wait the picture to load in the page so we can get
        // its height with a Listener:
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        // destructuring:
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />

            </div>
        );
    }
}

export default ImageCard;