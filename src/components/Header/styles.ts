import styled from "styled-components";



export const Container = styled.div`
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .list{
        display: flex;
        justify-content: space-between;
        align-items: center;
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