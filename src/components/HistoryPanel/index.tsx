import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import './styles.css';
import { HistoryElement } from '../HistoryElement';

export const HistoryPanel: React.FC = () => {
  const userHistory = useSelector((state: RootState) => state.user.actionsHistory)
  
  
  return (
    <section className='historyPanel'>
      <ul className='historyList'>
        {userHistory.map(item => <HistoryElement date={item.date} info={item.action} />)}
      </ul>
    </section>
  );
};
