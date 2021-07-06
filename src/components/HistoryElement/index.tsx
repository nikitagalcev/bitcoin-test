import './styles.css';

interface IHistoryElementProps {
  date: Date,
  event: string,
}

export const HistoryElement: React.FC<IHistoryElementProps> = ({date, event}) => {
  return (
    <li className='historyElement'>
      <p className='historyElement__date'>{date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
      <p className='historyElement__info'>{event}</p>
    </li>
  );
};
