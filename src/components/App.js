import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, onSearch] = useVideos('vocals');

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
    
    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }
    

    return(
         <div className="ui container">
                <SearchBar onFormSubmit={onSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={onVideoSelect} videos={videos} /> 
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default App;