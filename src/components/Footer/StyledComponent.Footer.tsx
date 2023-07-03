import styled from 'styled-components';

export const FooterSection = styled.footer`
    background: #FE6235;
    text-align: center;
    padding: 15px 0 10px;
    font-size: 1.1rem
`;

export const FooterLinks = styled.div`
    margin-top: 15px;
    a {
        color: #FBFCFE;
        margin: 0 8px;

        svg {
            width: 28px;
            transition: .3s ease all;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;