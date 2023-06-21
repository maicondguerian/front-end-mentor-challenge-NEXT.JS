import * as React from 'react'
import * as S from '../../../GlobalStyles/globalStyles'
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { MyContext } from '../../../contexts/MyContext';

export const FormDetails = ({ text }) => {
  return (
    <div>
      <span id='icon-list-svg' />
      <span> {text} </span>
    </div>
  );
};

const useStyles = makeStyles({
  inputField: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2.6rem',
    gap: '1rem',
    position: 'relative',
  },
  button: {
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
    },
  },
});


const Inputbox = ( {get} ) => {
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const { email, setEmail } = React.useContext(MyContext);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const classes = useStyles();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const submitForm = () => {
    setIsSubmitted(true);
    if(email !== '' && !isEmpty  && isValidEmail ){
      get(prev => !prev);
    };
  };
  React.useEffect(() => {
    setIsValidEmail(emailRegex.test(email));
    setIsEmpty(email.trim() === '');
  }, [handleEmail]);

  return (
    <Box className={classes.inputField}>
      <TextField
        fullWidth
        label="Email address"
        placeholder="email@company.com"
        error={(isEmpty || !isValidEmail) && isSubmitted}
        onChange={handleEmail}
        color={ !isEmpty && isValidEmail && 'success' || !isEmpty && !isValidEmail && 'error' }
      />
      {isEmpty && isSubmitted && (
        <FormHelperText sx={{ position: 'absolute', top: '-30px', right: '0', color: '#d32f2f' }}
        >
          email cannot be empty
        </FormHelperText>
      )}
      {!isEmpty && !isValidEmail  && (
        <FormHelperText sx={{ position: 'absolute', top: '-30px', right: '0', color: '#d32f2f' }}
        >
          valid email required
        </FormHelperText>
      )}
      {!isEmpty && isValidEmail && (
        <FormHelperText
          sx={{ position: 'absolute', top: '-30px', right: '0', color: 'sucess', color: '#2e7d32' }}
        >
          valid email
        </FormHelperText>
      )}
      <Button
        className={classes.button}
        fullWidth
        sx={{ mt: '.6rem' }}
        onClick={submitForm}
      >
        Subscribe to monthly newsletter
      </Button>
    </Box>
  );
};

export const Form = ( {getState} ) => {
  return (
    <S.StyledForm>
      <h1>Stay updated!</h1>
      <p>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <FormDetails text={'Product discovery and building what matters'} />
      <FormDetails text={'Measuring to ensure updates are a success'} />
      <FormDetails text={'And much more!'} />
      <Inputbox 
        get={getState}
      />
    </S.StyledForm>
  )
}
