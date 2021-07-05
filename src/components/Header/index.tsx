import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import logo from '../../assets/bitcoin.svg';
import './styles.css';


export const Header: React.FC = () => {
  const { bitcoinPrice, userUsdBalance, userBtcBalance } = useSelector((state: RootState) => {
    return {
      bitcoinPrice: state.bitcoin.btcPrice,
      userUsdBalance: state.user.usdBalance,
      userBtcBalance: state.user.bitcoinBalance,
    }
  });
  
  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo__image' src={logo} alt='Bitcoin' />
        <h1 className='logo__text'>Bitcoin Frenzy</h1>
      </div>
      <p className='header__btcPrice'>1 bitcoin = {bitcoinPrice} $</p>
      <div className='infoBlock'>
        <p className='infoBlock_text'>{userUsdBalance} $</p>
        <p className='infoBlock_text'>{userBtcBalance} bitcoins</p>
      </div>
    </header>
  );
};
