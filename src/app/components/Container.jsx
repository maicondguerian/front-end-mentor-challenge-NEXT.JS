import React from 'react'
import { StyledContainer } from '../../../GlobalStyles/globalStyles'
import { Form } from './Form'
import { RightSide } from './RightSide'

export const Container = ( {getState} ) => {
  return (
    <StyledContainer>
        <Form getState={getState}/>
        <RightSide />
    </StyledContainer>
  )
}
