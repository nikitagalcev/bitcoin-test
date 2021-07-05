import uuid from 'react-uuid'
import { PageLink } from '../PageLink';
import { pages } from '../../constants/pages'
import './styles.css';

export const BlockPanel: React.FC = () => {
  return (
    <section className='blockPanel'>
      <nav className='blockPanel__navigation'>
        <ul className='blockPanel__list'>
        {pages.map(item => <PageLink key={uuid()} pageName={item.name} link={item.link} />)}
        </ul>
      </nav>
    </section>
  );
};
