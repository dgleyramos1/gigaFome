import styled from "styled-components";
import bg from '../../assert/images/bg.jpg';

export const Container = styled.div`
    width: auto;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 25em 0 25em;
    
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-attachment: fixed;

    .author { 
        color:rgba(0, 0, 0, 1);
        width:150px;
        height:27px;
        font-family:Roboto Condensed;
        text-align: center;
        font-size:23px;
        letter-spacing:0;
    }
    img{
        width:35px;
        height:auto;
        margin: 10px;
    }

`