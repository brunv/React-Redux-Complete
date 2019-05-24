import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    // props was destructured

    return (
        <div className="video-item item">
            <img
                src={video.snippet.thumbnails.medium.url}
                alt=""
                className="ui image"
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;