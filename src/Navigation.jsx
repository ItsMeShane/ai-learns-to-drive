import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationContainer = styled.div`
   position: fixed;
   display: flex;
   width: 100%;
   justify-content: space-evenly;
`;

const NavLink = styled(Link)`
   margin: 10px;
   border: none;
   font-size: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   text-decoration: none;
`;

const Navigation = () => {

   return (
      <NavigationContainer>
         <NavLink to='/create'>
            Create Road
         </NavLink>
         <NavLink to='/tune'>
            Tune
         </NavLink>
         <NavLink to='/start'>
            Run
         </NavLink>
      </NavigationContainer>
   );
};

export default Navigation;
