import styled from 'styled-components';

export const SearcherDiv = styled.div`
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
    width: 65%;
    margin: 0 auto;
`;

export const SearcherTitle = styled.h1`
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    font-size: 3.75rem;
    margin: 180px 0 40px;
`;

export const SearcherInput = styled.div`
    background: #FBFCFE;
    box-shadow: 0px 0px 56px 0px #6E6D72;
    display: flex;
    justify-content: space-between;
    width: 877px;
    border-radius: 12px;

    .searcherInput, .searcherButton {
        font-family: 'Work Sans', sans-serif;
        font-size: 1.3rem;
    }

    .searcherInput {
        padding-left: 20px;
        width: 100%;
        border: none;
        background: none;
        outline:none;
    }

    .searcherButton {
        border: none;
        background: #FE6235;
        font-weight: 500;
        color: #FBFCFE;
        padding: 10px 30px;
        margin: 7px;
        border-radius: 6px;
        cursor: pointer;
        transition: .3s ease all;

        &:hover {
            background: #bc4e2e;
        }
    }
`;

export const SearcherResults = styled.span`
    width: 100%;
    text-align: right;
    font-weight: 500;
    margin: 36px 100px 36px 0;
`;