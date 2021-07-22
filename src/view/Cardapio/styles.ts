import styled from 'styled-components';
import bg from '../../assert/images/bg.jpg';


export const Container = styled.div`
    width: 100vw;
    height: auto;    
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-attachment: fixed;


    .content-cart{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: auto;
        margin: auto;


        .nome { 
            color:rgba(0, 0, 0, 1);
            width:80px;
            height:29px;
            font-family:Roboto Condensed;
            text-align:left;
            font-size:22px;
            letter-spacing:0;
        }


        img{ 
            width: 150px;
            height: auto;
        }
        .priceText{ 
            color:rgba(0, 0, 0, 1);
            width:80px;
            height:29px;
            font-family:Roboto Condensed;
            text-align:left;
            font-size:22px;
            letter-spacing:0;
        }


    }
`