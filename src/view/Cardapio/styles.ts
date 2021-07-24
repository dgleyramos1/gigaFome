import styled from 'styled-components';
import bg from '../../assert/images/bg.jpg';


export const Container = styled.div`
    width: 100vw;
    height: auto; 
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 25px;

    .nav{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        .cart{
            display: flex;
            justify-content: center;
            align-items: center;         

            img{
                width: 100px;
                height: auto;
            }
        }
    }
    section {
        height: auto;
        width: 100vw;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        gap: 15px;
        margin: auto;

        .product-content{            
            padding: 10px;
            width: 350px;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-evenly;
            align-items: center;
            border: 1px solid black;
            border-radius: 30px;
            font-family: Roboto Condensed;
            background-image: url(${bg});
            background-repeat: no-repeat;
            background-attachment: fixed;

            img{
                width: 250px;
                height: 200px;
                margin: 0;
            }
        }
        .priceText{
            font-size: 24px;
        }
    }
  .contentBut { 
        background-color:rgba(0, 0, 0, 1);
        width:auto;
        height:35px;
        left:10.401824951171875px;
        top:0px;
        border-radius: 17px;
        cursor: pointer;
        box-shadow:0 5px 4px rgba(0, 0, 0, 0.49000000953674316);
        transition: 10ms;
        margin-bottom: 5px;
    }
    .contentBut:hover{
        box-shadow:0 8px 9px rgba(255, 255, 255, 0.5);
    }
    .contentText { 
        background-image:linear-gradient(0deg, rgba(225.00000178813934, 179.000004529953, 75.00000312924385, 1) 0%,rgba(184.00000423192978, 219.0000021457672, 54.00000058114529, 1) 100%) ;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        -moz-background-clip:text;
        -moz-text-fill-color:transparent;
        -ms-background-clip:text;
        -ms-text-fill-color:transparent;
        width:140px;
        height:35px;
        left:0px;
        top:0px;
        font-family: Roboto Condensed;
        text-align:center;
        font-size:24px;
        letter-spacing:0;
    }
    #carrinho{
        width: 100vw;
        height: auto;
        text-align: center;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        form{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px;
            background-image: url(${bg});
            background-repeat: no-repeat;
            background-attachment: fixed;
            border-radius: 25px;

            label{
                padding: 10px;
            }

            input{
            width: 100%;
            height: auto;
            padding: 10px;
            color: black;
            }
        }

        
    }
`