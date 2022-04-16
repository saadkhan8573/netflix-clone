import React from 'react'
import Banner from '../banner/Banner'
import Row from '../rows/Row'
import Requests from '../../../Requests'

const HomeScreen = () => {
    return (
        <div>
            <Banner />

            <Row
                title="Netflix Orignals"
                fetchUrl={Requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={Requests.fetchTrending}
            />
            <Row
                title="Top rated"
                fetchUrl={Requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={Requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={Requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={Requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={Requests.fetchRomanceMovies}
            />
            <Row
                title="Documentries"
                fetchUrl={Requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
