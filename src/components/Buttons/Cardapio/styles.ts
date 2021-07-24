import styled from "styled-components";

export const Container = styled.div`
    .contentBut { 
        background-color:rgba(0, 0, 0, 1);
        width:120px;
        height:35px;
        left:10.401824951171875px;
        top:0px;
        border-radius: 17px;
        cursor: pointer;
        box-shadow:0 5px 4px rgba(0, 0, 0, 0.49000000953674316);
        transition: 10ms;
    }
    .contentBut:hover{
        box-shadow: #c4cf3c;
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
`