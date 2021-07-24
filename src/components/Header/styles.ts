import styled from "styled-components";
import bg from '../../assert/images/bg.jpg';



export const Container = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 25em 0 25em;
    
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-attachment: fixed;

    .list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width:200px;
	    height:28px;

    }
    .menu{
        width: 100%;
        height: auto;
        
        li{
            width: 100%;
            height: 28px;
            font-size: 25px;
            font-weight: bold;
            color: black;
            font-family: Roboto Condensed;
        }
    }

`