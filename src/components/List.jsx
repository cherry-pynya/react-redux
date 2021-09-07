import { connect } from "react-redux";
import ListItem from "./ListItem";

function List(props) {
  const {state, filtered, filter } = props.items;

  return (
    <div>
      <ul className="list-group">
        {filter ? filtered.map((el) => {
            return <ListItem item={el} key={el.id} />
        })
    : state.map((el) => {
        return <ListItem item={el} key={el.id} />
    })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { serviveList } = state;
  return { items: serviveList };
};

export default connect(mapStateToProps)(List);
