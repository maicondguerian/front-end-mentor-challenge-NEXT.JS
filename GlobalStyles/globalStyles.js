
const { createGlobalStyle, styled, css, keyframes } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 14px;

       
    }

    body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${props => props.theme.PrimaryColors.CharcoalGrey};
    }
`
const SlideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-85%);
  }
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
`;


export const StyledContainer = styled.main`
    background-color: ${props => props.theme.PrimaryColors.White};
    width: 820px;
    height: 550px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    ${props =>{
        props.className === 'slideIn' &&
        css`
           animation: ${SlideInAnimation} 0.3s;
        `}
    }
    `

export const StyledForm = styled.form`
    height: 100%;
    width: 50%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: .9rem;
    /* box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    border-radius: 10px; */
    
    h1{
        font-size: 50px;
        font-weight: 700;
    }

    p{
        margin: .9rem 0 ;
    }

    >div{
        font-size: 14px;
        display: flex;
        gap: 1rem;
        align-items: center;
        width: 330px;
        word-wrap: break-word;
        position: relative;
        
        >span:last-child{
            margin-left:34px;
        }
    }

     #icon-list-svg{
        background-image: url('/icon-list.svg');
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        width: 19px;
        height: 19px;
        position: absolute;
        left: 0;
    }
    
    `

export const StyledRightSide = styled.div`
    background-image: url('/illustration-sign-up-desktop.svg');
    background-size:cover;
    background-repeat: no-repeat;
    width: 45%;
    height: 100%;
    border-radius: 10px;
`