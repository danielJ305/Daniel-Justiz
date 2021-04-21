import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:rgb(130, 130, 130);
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    z-index:1500;
    top: 0;
    left: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;

    @media only screen and (max-device-width : 415px) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: white;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 415px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: red;
        }
    }

    
`;


