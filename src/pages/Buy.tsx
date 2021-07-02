import './styles.css';

export const Buy: React.FC = () => {
  return (
    <main className='content'>
      <h2 className='content__title'>Bitcoin price is 1,000$</h2>

      <p className='content__text'>Prices are low, buy now!</p>

      <button className='action-button'>Buy 1 Bitcoin</button>
    </main>
  );
};
