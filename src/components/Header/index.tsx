import React from 'react';
import logo from '../../assets/bitcoin.svg'
import './styles.css'


export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo__image' src={logo} alt='Bitcoin' />
        <h1 className='logo__text'>Bitcoin Frenzy</h1>
      </div>

      <p className='header__btcPrice'>1 bitcoin = 1,000 $</p>

      <div className='infoBlock'>
        <p className='infoBlock_text'>10,400 $</p>
        <p className='infoBlock_text'>7 bitcoins</p>
      </div>
    </header>
  );
};
