import styled from "styled-components";
import bg from '../../assert/images/bg.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-attachment: fixed;


    .section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 85vh;
        margin: auto;
    }

    .content-one{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
    }

    .sextouText { 
        transform: rotate(-9.103151351662632deg);
        color: rgba(0, 0, 0, 1);
        width: 350px;
        height: auto;
        font-family: Roboto Condensed;
        text-align: left;
        font-size: 92px;
        letter-spacing: 0;
        padding: 5px;
    }
    .chamadaText { 
        color:rgba(0, 0, 0, 1);
        width: 450px;
        height:auto;
        font-family:Roboto Condensed;
        text-align:center;
        font-size:30px;
        letter-spacing:0;
        padding: 5px;
    }
    .confiText { 
        color:rgba(0, 0, 0, 1);
        width:212.99998474121094px;
        height:26.770490646362305px;
        font-family:Roboto Condensed;
        text-align:center;
        font-size:20px;
        letter-spacing:0;
        padding: 20px;
    }
    .content-two{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: auto;
        margin: auto;
    }
    .boxImg {
        width:80%;
        min-width: 320px;
        height:auto;
    }


`