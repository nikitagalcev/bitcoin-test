import './styles.css';

interface HistoryElementProps {
  date: string,
  event: string,
}

export const HistoryElement: React.FC<HistoryElementProps> = ({date, event}) => {
  return (
    <li className='historyElement'>
      <p className='historyElement__date'>{date}</p>
      <p className='historyElement__info'>{event}</p>
    </li>
  );
};
