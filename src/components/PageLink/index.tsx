import icon from '../../assets/icon.svg';
import './styles.css';
import { Link } from 'react-router-dom'

interface PageLinkProps {
  pageName: string,
  link: string
}

export const PageLink: React.FC<PageLinkProps> = ({ pageName, link }) => {
  return (
    <li className='pageLink'>
      <img className='pageLink__icon' src={icon} alt='pages icon' />
      <Link className='pageLink__link' to={link}>{pageName}</Link>
    </li>
  );
};