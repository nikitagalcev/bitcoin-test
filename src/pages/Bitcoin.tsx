import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { incrementBitcoinPrice, decrementBitcoinPrice } from '../reducers/bitcoin/bitcoin.actions';
import { userIncreaseBitcoinPrice, userDecreaseBitcoinPrice } from '../reducers/user/user.actions'
import './styles.css';

export const Bitcoin: React.FC = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector((state: RootState) => state.bitcoin.btcPrice)

  const handleIncreaseBtcPrice = () => {
    dispatch(incrementBitcoinPrice());
    dispatch(userIncreaseBitcoinPrice());
  }

  const handleDecreaseBtcPrice = () => {
    dispatch(decrementBitcoinPrice());
    dispatch(userDecreaseBitcoinPrice());
  }

  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is {bitcoinPrice}$</h2>

      <div className='buttonsWrapper'>
        <button onClick={handleIncreaseBtcPrice} className='action-button action-button_btc'>Increase Bitcoin Price (+1,000)</button>
        <button onClick={handleDecreaseBtcPrice} className='action-button action-button_btc'>Decrease Bitcoin Price (+1,000)</button>
      </div> 
    
    </main>
  );
};
