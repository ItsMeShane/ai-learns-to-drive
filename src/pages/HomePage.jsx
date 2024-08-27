import React from "react";
import { Button } from "../GlobalComponents";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const HomePage = () => {
    return (
        <Wrapper>
            <Button>
                <Link to={'/create'}>
                    Get Started
                </Link>
            </Button>
        </Wrapper>
    );
};

export default HomePage;