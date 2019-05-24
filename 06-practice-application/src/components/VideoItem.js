import React from 'react';

const VideoItem = ({ video }) => {
    // props was destructured

    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt="" />
            {video.snippet.title}
        </div>
    );
};

export default VideoItem;