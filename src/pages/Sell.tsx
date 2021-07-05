import { useDispatch, useSelector } from 'react-redux';
import { userSellBtc, userGetError } from '../reducers/user/user.actions';
import { RootState } from '../store/rootReducer';
import { getCurrentDate } from '../helpers/getCurrentDate';
import './styles.css';


export const Sell: React.FC = () => {
  const dispatch = useDispatch();
  const { bitcoinPrice, userBitcoinBalance } = useSelector((state: RootState) => {
    return {
      bitcoinPrice: state.bitcoin.btcPrice,
      userBitcoinBalance: state.user.bitcoinBalance,
    }
  });

  const handleSellBtcClick = ():void => {
    userBitcoinBalance > 0 ? 
    dispatch(userSellBtc({
      bitcoinPrice,
      historyObj: {
        date: getCurrentDate(),
        event: 'Sold 1 Bitcoin',
      }
    })) : 
    dispatch(userGetError('No BTC to sale.'))
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {bitcoinPrice}$</h2>
      <p className='content__text'>
        {
          bitcoinPrice >= 10000 ? 
          'Prices are high, sell now!' 
          : 'Prices are low, are you sure you want to sell?'
        }
      </p>
      <button onClick={handleSellBtcClick} className='action-button'>Sell 1 Bitcoin</button>
    </main>
  );
};
