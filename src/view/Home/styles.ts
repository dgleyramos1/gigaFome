import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: auto;


    .section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
        width: 100%;
        height: auto;
        margin: auto;
    }

    .content-one{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        min-width: 250px;
        height: auto;
    }

    .sextouText { 
        transform: rotate(-9.103151351662632deg);
        color: rgba(0, 0, 0, 1);
        width: 350px;
        min-width: 120px;
        height: auto;
        font-family: Roboto Condensed;
        text-align: left;
        font-size: 92px;
        letter-spacing: 0;
        padding: 5px;
    }
    .chamadaText { 
        color:rgba(0, 0, 0, 1);
        width: 350px;

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
        width: 50%;
        min-width: 150px;
        height: auto;
        margin: auto;
    }
    .boxImg {
        width:80%;
        min-width: 320px;
        height:auto;
    }
@media(max-width: 900px){
    .section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 100vw;
        margin: auto;
    }
}

`