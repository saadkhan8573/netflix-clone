import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../../axios';
import Requests from '../../../Requests'
import Row from '../rows/Row';

const Banner = () => {

    const [movie, setMovie] = useState();

    useEffect(() => {
        const fetchMovie = async () => {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchMovie();
    }, [])

    console.log("<<<<<", movie)

    const truncate = (string, num) => {
        return string.length > num ? string.substr(0, num - 1) + " ....." : string;
    }
    return (
        <>
            <header className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`, backgroundPosition: 'center center', backgroundSize: "cover"}}>
                <div className="banner_contents ">
                    <h1 className="banner_title">{movie?.name}</h1>
                    <div className="banner_buttons ">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h1 className="banner_description">{truncate(`${movie?.overview}`, 150)}</h1>
                </div>
                <div className="banner_fadeBottom" />
            </header>
        </>
    )
}

export default Banner
