import './styles.css';

interface HistoryElementProps {
  date: string,
  info: string,
}

export const HistoryElement: React.FC<HistoryElementProps> = ({date, info}) => {
  return (
    <li className='historyElement'>
      <p className='historyElement__date'>{date}</p>
      <p className='historyElement__info'>{info}</p>
    </li>
  );
};
