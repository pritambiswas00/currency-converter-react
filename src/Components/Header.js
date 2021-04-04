import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const  Header = () => {
    return (
      <Container>
        <Link to="/">
          <HeaderTitle>
            <h1>Currency Converter</h1>
          </HeaderTitle>
        </Link>
      </Container>
    );
  }

export default Header;

const Container = Styled.div`
   background: #eee;
   border-radius: 1px solid black;
   box-shadow: 10px 20px 10px rgba(0,0,0,0.4);
   width: 100%;
   text-align: center;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   a{
     text-decoration: none;
   }
`;

const HeaderTitle = Styled.div`
   
   text-align: center;
   color: #3c8a24;
   text-decoration: none;
   font-weight: 700;
   font-size: 30px;
   h1{
     border-bottom: 2px solid black;
   }
`;
