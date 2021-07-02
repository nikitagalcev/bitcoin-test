import './styles.css';
import { PageLink } from '../PageLink';
import { pages } from '../../constants/pages'

export const BlockPanel: React.FC = () => {
  return (
    <section className='blockPanel'>
      <nav className='blockPanel__navigation'>
        <ul className='blockPanel__list'>
        {pages.map(item => <PageLink pageName={item.name} link={item.link} />)}
        </ul>
      </nav>
    </section>
  )
}