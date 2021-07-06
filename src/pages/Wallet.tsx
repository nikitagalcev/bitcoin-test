import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { userDepositUsdBalance, userWithdrawUsdBalance, userGetError } from '../reducers/user/user.actions';
import { getCurrentDate } from '../helpers/getCurrentDate';
import '../styles/pagesStyles.css';

export const Wallet: React.FC = () => {
  const dispatch = useDispatch();
  const { bitcoinBalance, usdBalance } = useSelector((state: RootState) => state.user);
  
  const handleDepositClick = () => {
    dispatch(userDepositUsdBalance({
      date: getCurrentDate(),
      event: '100$ Deposit',
    }));
  };

  const handleWithdrawClick = () => {
    if (usdBalance - 100 >= 0) {
      dispatch(userWithdrawUsdBalance({
        date: getCurrentDate(),
        event: '100$ Withdrawal',
      }));
    } else {
      dispatch(userGetError('Not enough USD to withdraw.')); 
    }
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Your Bitcoin wallet</h2>
      <p className='content__text'>You now own {bitcoinBalance} Bitcoins</p>
      <button onClick={handleDepositClick} className='action-button action-button_deposit'>Deposit 100$</button>
      <button onClick={handleWithdrawClick} className='action-button'>Withdraw 100$</button>      
    </main>
  );
};
