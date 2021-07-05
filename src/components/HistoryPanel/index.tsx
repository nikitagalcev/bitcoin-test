import { useSelector } from 'react-redux';
import uuid from 'react-uuid'
import { RootState } from '../../store/rootReducer';
import { HistoryElement } from '../HistoryElement';
import './styles.css';

export const HistoryPanel: React.FC = () => {
  const userHistory = useSelector((state: RootState) => state.user.actionsHistory);
  
  return (
    <section className='historyPanel'>
      <ul className='historyList'>
        {userHistory.map(item => <HistoryElement key={uuid()} date={item.date} event={item.event} />)}
      </ul>
    </section>
  );
};
