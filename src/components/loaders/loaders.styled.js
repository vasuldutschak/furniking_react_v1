import styled ,{keyframes}from 'styled-components'

const rikSpikeRoll=keyframes`
    0% { background-size: 10px 3px;}
    16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
    33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
    50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
    66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
    83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
    100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
`
export const PageContentMainContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    .loader{
        position: relative;
        width: 85px;
        height: 50px;
        background-repeat: no-repeat;
        background-image: linear-gradient(#555555 50px, transparent 0),
        linear-gradient(#555555 50px, transparent 0),
        linear-gradient(#555555 50px, transparent 0),
        linear-gradient(#555555 50px, transparent 0),
        linear-gradient(#555555 50px, transparent 0),
        linear-gradient(#555555 50px, transparent 0);
        background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
        animation: ${rikSpikeRoll} 0.65s linear infinite alternate;
    }
`