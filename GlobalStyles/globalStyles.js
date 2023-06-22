
const { createGlobalStyle, styled, css, keyframes } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;

       
    }

    body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${props => props.theme.PrimaryColors.CharcoalGrey};
    }
`;


export const StyledContainer = styled.main`
    background-color: ${props => props.theme.PrimaryColors.White};
    width: 944px;
    height: 645px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;


    @media screen and (max-width: 944px){
        flex-direction: column-reverse;
        width: 100vw;
        height: 100vh;
        padding: 0;
        border-radius: unset;
    }
`

export const StyledForm = styled.form`
    height: 100%;
    width: 50%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h1{
        font-size: 60px;
        font-weight: 700;
    }

    p{
        margin: .9rem 0 ;
    }

    >div{
        font-size: 14px;
        display: flex;
        align-items: center;
        width: 100%;
        word-wrap: break-word;
        position: relative;

        >span:last-child{
            margin-left:34px;
        }
    }

    @media screen and (max-width: 944px){
        width: 100%;
        padding: 1rem 1rem;
         h1{
            font-size: 50px;
         }
    }
`

export const FormDetails = styled.div`
    background-image: url('/icon-list.svg');
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
`

export const StyledRightSide = styled.div`
    background-image: url('/illustration-sign-up-desktop.svg');
    background-size:cover;
    background-repeat: no-repeat;
    width: 45%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 944px){
        background-image: url('/illustration-sign-up-mobile.svg');
        width: 100%;
        border-radius:  0 0 20px 20px;
    }
`