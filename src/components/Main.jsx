import React from "react";
import styled from "styled-components";
import { MovieList } from "./MovieList";

export const Main = () => {
    return(
        <MainContainer>
            <MovieList />
        </MainContainer>
    )
}



const MainContainer = styled.div`
    background-color:#262629;
    // height:100vh;
`