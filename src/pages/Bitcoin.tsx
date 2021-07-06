import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { incrementBitcoinPrice, decrementBitcoinPrice } from '../reducers/bitcoin/bitcoin.actions';
import { userIncreaseBitcoinPrice, userDecreaseBitcoinPrice, userGetError } from '../reducers/user/user.actions';
import { getCurrentDate } from '../helpers/getCurrentDate';
import '../styles/pagesStyles.css';

export const Bitcoin: React.FC = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state: RootState) => state.bitcoin.btcPrice);

  const handleIncreaseBtcPrice = () => {
    dispatch(incrementBitcoinPrice());
    dispatch(userIncreaseBitcoinPrice({
      date: getCurrentDate(), 
      event: 'Increased Bitcoin Price by 1,000$', 
    }));
  }

  const handleDecreaseBtcPrice = () => {
    if (bitcoinPrice > 1000) {
      dispatch(decrementBitcoinPrice());
      dispatch(userDecreaseBitcoinPrice({
        date: getCurrentDate(), 
        event: 'Decreased Bitcoin Price by 1,000$', 
      }));
    } else {
      dispatch(userGetError('BTC price is too low for decrease.'));
    }
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {bitcoinPrice}$</h2>
      <div className='buttonsWrapper'>
        <button onClick={handleIncreaseBtcPrice} className='action-button action-button_btc'>Increase Bitcoin Price (+1,000)</button>
        <button onClick={handleDecreaseBtcPrice} className='action-button action-button_btc'>Decrease Bitcoin Price (-1,000)</button>
      </div> 
    </main>
  );
};
