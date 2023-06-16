import React from 'react'
import { StyledContainer } from '../../../GlobalStyles/globalStyles'
import { Form } from './Form'
import { RightSide } from './RightSide'

export const FormContainer = ( {getState, className, isSubmitted} ) => {
  return (
    <StyledContainer className={className} isSubmitted={isSubmitted}>
        <Form getState={getState}/>
        <RightSide />
    </StyledContainer>
  )
}
