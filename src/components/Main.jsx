//import * as Icon from 'react-bootstrap-icons';
import { Component } from "react";
import { Container, Button, DropdownButton, Dropdown } from "react-bootstrap";

import MyGallery from "./MyGallery";
import MyFooter from "./MyFooter";

import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';
import img5 from '../assets/img/5.png';
import img6 from '../assets/img/6.png';
import img7 from '../assets/img/7.png';
import img8 from '../assets/img/8.png';
import img9 from '../assets/img/9.png';
import img10 from '../assets/img/10.png';
import img11 from '../assets/img/11.png';
import img12 from '../assets/img/12.png';
import img13 from '../assets/img/13.png';
import img14 from '../assets/img/14.png';
import img15 from '../assets/img/15.png';
import img16 from '../assets/img/16.png';
import img17 from '../assets/img/17.png';
import img18 from '../assets/img/18.png';

const movies = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18
];

//https://www.omdbapi.com/?apikey=8f194417&t=Harry+Potter

function getRandomMovies() {
    const randomMovies = [];
    const usedIndexes = [];

    while (randomMovies.length < 6) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (!usedIndexes.includes(randomIndex)) {
            usedIndexes.push(randomIndex);
            randomMovies.push(movies[randomIndex]);
        }
    }

    return randomMovies;
}

class Main extends Component {
    render() {
        const trendingNowMovies = getRandomMovies();
        const watchItAgainMovies = getRandomMovies();
        const newReleasesMovies = getRandomMovies();
        return (
            <Container fluid style={{ backgroundColor: "#221f1f" }} className="text-light">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <DropdownButton
                            variant="secondary"
                            size="sm"
                            className="rounded-0 ml-4 mt-1"
                            title="Genres">
                            <Dropdown.Item href="#">Comedy</Dropdown.Item>
                            <Dropdown.Item href="#">Drama</Dropdown.Item>
                            <Dropdown.Item href="#">Thriller</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <Button variant="link">
                            <i className="fa fa-th-large icons"></i>
                        </Button>
                        <Button variant="link">
                            <i className="fa fa-th icons"></i>
                        </Button>
                    </div>
                </div>
                <MyGallery title="Trending Now" movies={trendingNowMovies} />
                <MyGallery title="Watch it Again" movies={watchItAgainMovies} />
                <MyGallery title="New Releases" movies={newReleasesMovies} />
                <MyFooter />
            </Container>
        );
    }
}

export default Main;