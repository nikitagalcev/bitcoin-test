import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { userDepositUsdBalance, userWithdrawUsdBalance, userGetError } from '../reducers/user/user.actions';
import { getCurrentDate } from '../helpers/getCurrentDate';
import './styles.css';

export const Wallet: React.FC = () => {
  const dispatch = useDispatch();
  const { userBtcBalance, userUsdBalance } = useSelector((state: RootState) => {
    return {
      userBtcBalance: state.user.bitcoinBalance,
      userUsdBalance: state.user.usdBalance,
    }
  });
  
  const handleDepositClick = ():void => {
    dispatch(userDepositUsdBalance({
      date: getCurrentDate(),
      event: '100$ Deposit',
    }));
  };

  const handleWithdrawClick = ():void => {
    userUsdBalance - 100 >= 0 ? 
    dispatch(userWithdrawUsdBalance({
      date: getCurrentDate(),
      event: '100$ Withdrawal',
    })) :
    dispatch(userGetError('Not enough USD to withdraw.'));
  };

  return (
    <main className='content'>
      <h2 className='content__title'>Your Bitcoin wallet</h2>
      <p className='content__text'>You now own {userBtcBalance} Bitcoins</p>
      <button onClick={handleDepositClick} className='action-button action-button_deposit'>Deposit 100$</button>
      <button onClick={handleWithdrawClick} className='action-button'>Withdraw 100$</button>      
    </main>
  );
};
