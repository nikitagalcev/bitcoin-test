import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import logo from '../../assets/bitcoin.svg';
import './styles.css';


export const Header: React.FC = () => {
  const { btcPrice } = useSelector((state: RootState) => state.bitcoin);
  const { usdBalance, bitcoinBalance } = useSelector((state: RootState) => state.user)
  
  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo__image' src={logo} alt='Bitcoin' />
        <h1 className='logo__text'>Bitcoin Frenzy</h1>
      </div>
      <p className='header__btcPrice'>1 bitcoin = {btcPrice} $</p>
      <div className='infoBlock'>
        <p className='infoBlock_text'>{usdBalance} $</p>
        <p className='infoBlock_text'>{bitcoinBalance} bitcoins</p>
      </div>
    </header>
  );
};
