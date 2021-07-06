import icon from '../../assets/icon.svg';
import { Link } from 'react-router-dom';
import './styles.css';

interface IPageLinkProps {
  pageName: string,
  link: string
}

export const PageLink: React.FC<IPageLinkProps> = ({ pageName, link }) => {
  return (
    <li className='pageLink'>
      <img className='pageLink__icon' src={icon} alt='pages icon' />
      <Link className='pageLink__link' to={link}>{pageName}</Link>
    </li>
  );
};