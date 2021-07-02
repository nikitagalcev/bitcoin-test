import './styles.css';

export const Sell: React.FC = () => {
  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is 5,000$</h2>

      <p className='content__text'>Prices are high, sell now!</p>

      <button className='action-button'>Sell 1 Bitcoin</button>
    </main>
  );
};
