import { PageLink } from '../PageLink';
import { routes } from '../../constants/routes';
import './styles.css';

export const BlockPanel: React.FC = () => {
  const pages = routes.filter(route => route.title !== 'default');
  return (
    <section className='blockPanel'>
      <nav className='blockPanel__navigation'>
        <ul className='blockPanel__list'>
        {pages.map(({ key, title, path }) => <PageLink key={key} pageName={title} link={path} />)}
        </ul>
      </nav>
    </section>
  );
};
