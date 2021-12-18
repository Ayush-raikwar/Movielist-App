import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { API_KEY } from "./keys";
import Button from 'react-bootstrap/Button'


export const MovieList = () => {

    const [movies, setMovies] = useState([])

    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        for(var i=0; i<35; i++){

            var initialMovieId = 500;
            fetch(`https://api.themoviedb.org/3/movie/${initialMovieId+i}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if((data.success === false) || (data.success === true) ){
                    // console.log(data, '  movie not found');
                } 
                else{
                    setMovies(prev => ([...prev, data]))
                }
            }) 
        }
    },[])

    const fetchMovies = () => {
        for(var i=0; i<35; i++){

            var initialMovieId = 500;
            fetch(`https://api.themoviedb.org/3/movie/${initialMovieId+i}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if((data.success === false) || (data.success === true) ){
                    // console.log(data, '  movie not found');
                } 
                else{
                    setMovies(prev => ([...prev, data]))
                }
            }) 
        }
        console.log(movies);

    }

    return(

            <MoviesContainer>
                <StyledButton 
                    variant="primary" 
                    size="lg" 
                    active
                    onClick={() => fetchMovies()}
                >
                    Show Movies
                </StyledButton>
                <StyledRow>
                    Drama
                {
                    movies.map((movie, index) => {
                        
                        if(movie.genres[0].name === 'Drama'){
                            return(
                                <StyledCol>
                                    <MoviePoster index={Math.floor(Math.random()*100000)} src={`${imageBaseUrl}${movie.poster_path}`} />
                                </StyledCol>
                            )
                        }
                        
                    })
                }
                </StyledRow>
                <StyledRow>
                        Crime
                    {
                       movies.map((movie, index) => {
                        
                        if(movie.genres[0].name === 'Crime'){
                            return(
                                <StyledCol>
                                    <MoviePoster index={Math.floor(Math.random()*100000)} src={`${imageBaseUrl}${movie.poster_path}`} />
                                </StyledCol>
                            )
                        }
                        
                    }) 
                    }
                </StyledRow>
                <StyledRow>
                        Action
                    {
                       movies.map((movie, index) => {
                        
                        if(movie.genres[0].name === 'Action'){
                            return(
                                <StyledCol>
                                    <MoviePoster index={Math.floor(Math.random()*100000)} src={`${imageBaseUrl}${movie.poster_path}`} />
                                </StyledCol>
                            )
                        }
                        
                    }) 
                    }
                </StyledRow>
              
            </MoviesContainer>
    )
}

const MoviesContainer = styled(Container)`

    padding-top:5rem;
    padding-bottom:5rem;
    width:100%;
    display:flex;
    flex-direction:column;
    min-height:100vh;

`
const StyledRow = styled(Row)`
    padding:.8rem;
    color:#fff;
    text-decoration:underline;
    // background-color:#aaa;
    justify-content:center;
    display:flex;
  
    
`
const StyledButton = styled(Button)`
    text-align:center;
    justify-content:center;
    margin-bottom:1rem;
    align-self:center;
`
const MoviePoster = styled.img`
    width:100px;
    transition:transform .4s;
    &:hover{
        transform: scale(1.08);
    }
`
const StyledCol = styled(Col)`
    margin:.4rem auto;
`