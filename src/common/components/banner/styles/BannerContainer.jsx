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
        height: 75vh;
        background: linear-gradient(0deg, var(--color-background) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, var(--color-background) 100%);
    }
`