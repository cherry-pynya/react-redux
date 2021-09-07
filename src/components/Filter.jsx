import { useSelector, useDispatch } from "react-redux";
import {
  filterChange,
  filterService,
  getServiceList,
} from "../actions/actionCreators";

export default function Filter() {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.filterForm);
  const text = item.text;

  const filter = (str) => {
    if (str === "") {
      dispatch(getServiceList());
    } else {
      dispatch(filterService(str));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(filterChange(name, value));
    filter(value);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Фильтр</label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          className="form-control"
          id="filter"
        />
      </div>
    </form>
  );
}
