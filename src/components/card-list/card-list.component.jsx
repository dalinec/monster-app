import CardContainer from "../card/card-container.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, id) => {
      return <CardContainer key={id} monster={monster} />;
    })}
  </div>
);

export default CardList;
