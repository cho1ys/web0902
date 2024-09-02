import React from 'react';
import styled from 'styled-components';
const StyledComponents = () =>{
    const Button = styled.button`
      background : ${props => (props.main ? 'blue' : 'white')};
      color : ${props => (props.main ? 'white' : 'black')};
      font-size : 1em;
      margin : 1em;
      padding : 0.25em 1em;
      border : ${props => (props.main ? '2px solid yellow' : '2px solid white')};
      border-radius: 3px;
    `
    const Back = styled.div`
        background-color: black;
        margin : 0 auto;
        width : 1024px;
      @media screen and (max-width : 768px) {
        width: 100%;
      }
    `
    return(
      <>      
      <Back>
          <Button>버튼1</Button>
          <Button main>버튼2</Button>
      </Back>
      </>

    )
  }

export default StyledComponents;