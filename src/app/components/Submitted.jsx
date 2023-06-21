import React from 'react'
import { StyledContainer } from '../../../GlobalStyles/globalStyles'
import { styled } from 'styled-components'
import { Button } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { MyContext } from '../../../contexts/MyContext'

const StyledWrapeer = styled(StyledContainer)`
  align-items: baseline;
  flex-direction: column;
  justify-content: start;
  width: 460px;
  height: 480px;
  padding: 4.5rem;
  gap: 2rem;
  color: ${props => props.theme.PrimaryColors.DarkSlateGrey};
  
  span{
    background-image: url('/icon-success.svg');
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 60px;
    width: 60px;
  }

  h1{
    font-size:50px;
    line-height: 1;
  }

  div{
    font-weight: 500;
    line-height: 1.5;
  }

  button{
    span{
      background-image: none;
    }
  }
`

const useMyStyles = makeStyles({
  button:{
    backgroundColor: 'hsl(234, 29%, 20%)',
    color: '#fff',
    textTransform: 'unset',
    borderRadius: '7px',
    height: '49px',
    fontWeight: '600',
    fontSize: '13.5px',
    '&:hover': {
      backgroundImage: 'linear-gradient( to right, #f07a19 0%, #f354be 51%, #f07a19 100% )',
      boxShadow: '0 6px 20px hsl(4, 100%, 67%)',
      transition: 'all 0.4s ease-in-out'
    }
  }
});

export const Submitted = ( {getGambiarra} ) => {
  const classes = useMyStyles();
  const { email, setEmail } = React.useContext(MyContext);
  return (
    <StyledWrapeer>
      <span />
      <h1>Thanks for subscribing!</h1>
      <div>
        A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription
      </div>
      <Button 
        fullWidth
        className={classes.button}
        onClick={()=>{
        getGambiarra(prev => !prev);
        setEmail('');
        }}
      >
        Dimiss Message
      </Button>
    </StyledWrapeer>
  );
};

