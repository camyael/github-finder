import styled from 'styled-components';

export const ProfileResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 21px;
    border-radius: 12px;
    background: linear-gradient(135deg, #2B2A31 0%, #1A1D26 100%);
    width: 806px;
    min-height: 220px;

    &:hover {
        box-shadow: 0px 10px 56px 0px #2B2A31;
    }
`;

export const ProfileResultImg = styled.div`
    img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 6px solid #6E6D72;
    }
`;

export const ProfileResultInfo = styled.div`
    width: 495px;
    display: flex;
    flex-flow: nowrap column;
    row-gap: 16px;

    .profileBio {
        font-size: 1.1rem;
    }
`;

export const ProfileResultInfoUser = styled.div`
    display: flex;
    column-gap: 21px;
    font-size: 1.4rem;

    .profileName {
        font-weight: 700;
    }

    .profileUser {
        font-weight: 300;
    }
`;

export const ProfileResultInfoRepos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        column-gap: 12px;
    }
`;

export const ProfileButton = styled.button`
    color: #FE6235;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    background: none;
    border-radius: 6px;
    border: 1px solid #FE6235;
    padding: 8px 24px;
    cursor: pointer;
    transition: .3s ease all;

    &:hover {
        background: #FE6235;
        color: #FBFCFE;
    }
`;