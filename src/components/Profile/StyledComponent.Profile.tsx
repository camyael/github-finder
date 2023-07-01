import styled from 'styled-components';

export const ProfileOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileContainer = styled.div`
    width: 70vh;
    height: 90vh;
    border-radius: 12px;
    background: linear-gradient(135deg, #2B2A31 0%, #1A1D26 100%);
    position: relative;
`;

export const ProfileImg = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 21px;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`;

export const ProfileUserDiv = styled.div`
    margin-top: 21px;
    .profileName {
        font-weight: 700;
        font-size: 28px;
    }

    .profileUser {
        font-weight: 300;
        font-size: 24px;
        margin-bottom: 21px;
    }

    .profileBio {
        font-size: 1.1rem;
    }
`;

export const ProfileDiv = styled.div`
    width: 55vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 21px;
`;

export const ProfileToGithub = styled.a`
    color: #FE6235;
    font-size: 1.1rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    width: 100%;
    border: 1px solid #FE6235;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    padding: 7px 0;
    transition: .3s ease all;

    &:hover {
        background: #FE6235;
        color: #FBFCFE;
        transform: scale(1.1);
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
    font-weight: 300;

    span {
        margin-top: -10px;
    }
`;

export const ProfileInfoDiv = styled.div`
    display: flex;
    column-gap: 7px;
`;

export const ProfileMoreInfo = styled.div`
    display: flex;
    flex-flow: nowrap column;
    row-gap: 12px;
    font-weight: 300;

    a {
        text-decoration: none;
        color: #FBFCFE;
    }
`;