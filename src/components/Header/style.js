import styled from 'styled-components'

const HEader = styled.div`
    width: 730px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #222731;
`
const Right = styled.div`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 2.5px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #697C9A;
    
`
export {HEader, Left, Right}