import { Monster } from '../../App';

import CardContainer from '../card/card-container.component';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster, id) => {
      return <CardContainer key={id} monster={monster} />;
    })}
  </div>
);

export default CardList;
