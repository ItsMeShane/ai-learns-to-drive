import React from "react";
import { MyButton } from "../GlobalComponents";
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
            <MyButton>
                <Link to={'/create'}>
                    Get Started
                </Link>
            </MyButton>
        </Wrapper>
    );
};

export default HomePage;