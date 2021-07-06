import { useDispatch, useSelector } from 'react-redux';
import { userSellBtc, userGetError } from '../reducers/user/user.actions';
import { RootState } from '../store/rootReducer';
import { getCurrentDate } from '../helpers/getCurrentDate';
import '../styles/pagesStyles.css';


export const Sell: React.FC = () => {
  const dispatch = useDispatch();
  const { btcPrice } = useSelector((state: RootState) => state.bitcoin);
  const { bitcoinBalance } = useSelector((state: RootState) => state.user);

  const handleSellBtcClick = () => {
    if (bitcoinBalance > 0) {
      dispatch(userSellBtc({
        btcPrice,
        historyObj: {
          date: getCurrentDate(),
          event: 'Sold 1 Bitcoin',
        }
      }));
    } else {
      dispatch(userGetError('No BTC to sale.'));
    }
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {btcPrice}$</h2>
      <p className='content__text'>
        {
          btcPrice >= 10000 ? 
          'Prices are high, sell now!' 
          : 'Prices are low, are you sure you want to sell?'
        }
      </p>
      <button onClick={handleSellBtcClick} className='action-button'>Sell 1 Bitcoin</button>
    </main>
  );
};
