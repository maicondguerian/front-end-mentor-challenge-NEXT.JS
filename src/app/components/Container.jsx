import React from 'react'
import { StyledContainer } from '../../../GlobalStyles/globalStyles'
import { Form } from './Form'
import { RightSide } from './RightSide'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core'


export const FormContainer = ( {getState, className, isSubmitted} ) => {
  return (
    <StyledContainer >
        <Form getState={getState}/>
        <RightSide />
    </StyledContainer>
  )
}
