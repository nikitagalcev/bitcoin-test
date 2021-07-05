import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store/rootReducer';
import { HistoryElement } from '../HistoryElement';
import './styles.css';

export const HistoryPanel: React.FC = () => {
  const userHistory = useSelector((state: RootState) => state.user.actionsHistory);
  
  return (
    <section className='historyPanel'>
      <ul className='historyList'>
        {userHistory.map(item => <HistoryElement key={uuidv4()} date={item.date} event={item.event} />)}
      </ul>
    </section>
  );
};
