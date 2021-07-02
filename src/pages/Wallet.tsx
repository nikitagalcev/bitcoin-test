import './styles.css';

export const Wallet: React.FC = () => {
  return (
    <main className='content'>
      <h2 className='content__title'>Your Bitcoin wallet</h2>

      <p className='content__text'>You now own 7 Bitcoins</p>

      <button className='action-button action-button_deposit'>Deposit 100$</button>

      <button className='action-button'>Withdraw 100$</button>
    </main>
  );
};
