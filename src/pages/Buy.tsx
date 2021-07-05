import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { userBuyBtc, userGetError } from '../reducers/user/user.actions';
import { getCurrentDate } from '../helpers/getCurrentDate';
import './styles.css';

export const Buy: React.FC = () => {
  const dispatch = useDispatch();
  const { bitcoinPrice, userUsdBalance } = useSelector((state: RootState) => {
    return {
      bitcoinPrice: state.bitcoin.btcPrice,
      userUsdBalance: state.user.usdBalance,
    }
  });

  const handleBuyBtcClick = ():void => {
    userUsdBalance - bitcoinPrice > 0 ? 
    dispatch(userBuyBtc({
      bitcoinPrice,
      historyObj: {
        date: getCurrentDate(),
        event: 'Purchased 1 Bitcoin',
      }
    })) :
    dispatch(userGetError('Not enough USD to buy bitcoin.'));
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {bitcoinPrice}$</h2>
      <p className='content__text'>
        {
          bitcoinPrice >= 10000 ? 
          'Prices are high, are you sure that you want to buy?' 
          : 'Prices are low, buy now!'
        }
      </p>
      <button onClick={handleBuyBtcClick} className='action-button'>Buy 1 Bitcoin</button>
    </main>
  );
};
