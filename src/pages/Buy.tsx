import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { userBuyBtc, userGetError } from '../reducers/user/user.actions';
import { getCurrentDate } from '../helpers/getCurrentDate';
import './styles.css';

export const Buy: React.FC = () => {
  const dispatch = useDispatch();
  const { btcPrice } = useSelector((state: RootState) => state.bitcoin);
  const { usdBalance } = useSelector((state: RootState) => state.user);

  const handleBuyBtcClick = () => {
    usdBalance - btcPrice > 0 ? 
    dispatch(userBuyBtc({
      btcPrice,
      historyObj: {
        date: getCurrentDate(),
        event: 'Purchased 1 Bitcoin',
      }
    })) :
    dispatch(userGetError('Not enough USD to buy bitcoin.'));
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {btcPrice}$</h2>
      <p className='content__text'>
        {
          btcPrice >= 10000 ? 
          'Prices are high, are you sure that you want to buy?' 
          : 'Prices are low, buy now!'
        }
      </p>
      <button onClick={handleBuyBtcClick} className='action-button'>Buy 1 Bitcoin</button>
    </main>
  );
};
