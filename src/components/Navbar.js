import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 '>
        <Link to='/'>
          <img
            src={Logo}
            alt='logo'
            className='navbar-brand'
            style={{ aspectRatio: 1, width: 70 }}
          />
        </Link>
        <ul className='navbar-nav ' style={{ alignItems: 'center' }}>
          <li className='nav-item ' style={{ marginLeft: 50 }}>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart ' style={{ marginLeft: 'auto' }}>
          <ButtonContainer>
            <span style={{ marginRight: 5 }}>
              <i className='fas fa-cart-plus'></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
