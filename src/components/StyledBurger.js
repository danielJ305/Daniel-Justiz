import styled from 'styled-components';

export const StyledBurger = styled.nav`
    position: fixed;
    top: 3rem;
    right: 3rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10000;

    &:focus {
        outline: none;
    }

    div {
        width: 3rem;
        height: 0.50rem;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media only screen and (max-device-width : 1223px) {
        display: flex;
    }
`;