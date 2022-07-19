import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchWord) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearch(defaultSearchWord);
    }, [defaultSearchWord]);
    
    const onSearch = async (searchWord) => {
        const response = await youtube.get(('/search'), {
            params: {
                q: searchWord
            }
        });

        setVideos(response.data.items);
    };

    return [videos, onSearch];
};

export default useVideos;