import styled from "styled-components";

export const BannerContainer = styled.div`
    height: 75vh;
    width: 100%;
    background: url( ${(props) => props.image} );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 1rem;

    padding-left: 5rem; 

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(16,16,16,1) 0%,
            rgba(16,16,16,0) 15%,
            rgba(16,16,16,0) 75%,
            rgba(16,16,16,1) 100%
        );
    }


`