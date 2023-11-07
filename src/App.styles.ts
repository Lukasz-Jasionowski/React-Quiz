import styled, { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    height:100%;
}

body {
    background-image: url(${BackgroundImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;

> p {
    color: #fff;
}

.score {
    color: #fff;
    font-size:2rem;
    margin:0;
}

h1 { 
    font-family: 'Ubuntu', sans-serif;
    background-image: linear-gradient(180deg,#290A6A,#19075B);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip:text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #E23471);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}

@media screen and (max-width:767px){
    h1 {
        font-size: 2.4em;
    }
}

.start, 
.next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #7F157F);
    border: 2px solid #19075B;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height:40px;
    margin:20px 0;
    padding: 0 40px;
}

.start {
    max-width: 200px;
}
`