import React from "react";
import { Container, Wrapper } from "../GlobalComponents";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Button = styled.div`
    width: fit-content;
    padding:10px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    a {
        padding:10px 15px;
        text-decoration: none;
        color:white; 
        background-color:grey;
        border-radius:10px;
    }
`


const HomePage = () => {
    return (
        <Wrapper>
            <Container>
                <Button>
                    <Link to={'/create'}>
                        Get Started
                    </Link>
                </Button>
            </Container>
        </Wrapper>
    );
};

export default HomePage;