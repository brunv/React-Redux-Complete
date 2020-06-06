import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        // Create a React Ref:
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // We need to wait the picture to load in the page so we can get
        // its height with a Listener:
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        // this.setState({ spans: spans }); same as:
        this.setState({ spans });
    }

    render() {
        // destructuring:
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
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