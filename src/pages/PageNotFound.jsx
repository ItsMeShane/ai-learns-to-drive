import React from "react";
import styled from "styled-components"

export const Wrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const PageNotFound = () => {
    return (
        <Wrapper>
            page not found
        </Wrapper>
    );
};

export default PageNotFound;