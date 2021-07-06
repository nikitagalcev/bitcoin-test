import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { HistoryElement } from '../HistoryElement';
import './styles.css';

export const HistoryPanel: React.FC = () => {
  const userHistory = useSelector((state: RootState) => state.user.actionsHistory);
  return (
    <section className='historyPanel'>
      <ul className='historyList'>
        {userHistory.map(({date, event})=> <HistoryElement key={+date} date={date} event={event} />)}
      </ul>
    </section>
  );
};
