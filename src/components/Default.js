import React, { Component } from 'react';
import NotFound from '../../src/notfound.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <div className='container'>
          <h1>404 - Page Not Found!</h1>

          <Link to='/'>
            <ButtonContainer>Go Back</ButtonContainer>
          </Link>
          <img src={NotFound} alt='not found' />
        </div>
      </Container>
    );
  }
}
const Container = styled.div`
  .container {
    justify-content: center;
    align-items: center;
    padding: 10;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  h1 {
    text-align: center;
    font-size: 5rem;
  }
  img {
  }
  @media screen and (max-width: 867px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
