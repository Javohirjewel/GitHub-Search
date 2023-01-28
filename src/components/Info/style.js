import styled from 'styled-components'
const Info = styled.div`
    margin-top: 24px;
    padding: 48px;
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    width:730px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
`
const Img = styled.div`
    width: 180px;
`
const Content = styled.div`
    width: 480px;
`
const Title = styled.div`
    font-family: 'Space Mono',san-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #2B3442;    
`
const  Account= styled.div`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0079FF;
`
const  Profile= styled.div`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #4B6A9B;
    mix-blend-mode: normal;
    opacity: 0.75;    
    margin-top: 20px;
`
const Title1 = styled.div`
        display: flex;  
        align-items: center;
        gap: 138px;
        `        
const Title2 = styled.p`
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #697C9A;    
`
const Follow = styled.div`
        background: #F6F8FF;
        margin-top: 32px;
        border-radius: 10px;
        display:  flex;
        box-sizing: border-box;
        padding: 15px;
        justify-content: space-between
        
        `
const FT = styled.p`
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
         color: #4B6A9B;
        `
const FP = styled.p`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;

`
const Card = styled.div`
        
        `
export const Location = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
        `
export const Tit = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 40%;
    cursor: pointer
`
export const P = styled.p`
    font-family: 'Space Mono', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #4B6A9B;

`

export {Info, Img, Content, Title, Account, Profile, Title1, Title2, Follow, FT, FP, Card}