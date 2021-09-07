import { useDispatch, useSelector } from "react-redux";
import { removeService, formChange } from "../actions/actionCreators";

export default function ListItem({ item }) {
  const { name, price, id } = item;
  const formItem = useSelector((state) => state.serviceForm);

  const formId = formItem.id;

  const dispatch = useDispatch();

  const handleRemove = () => {
    if (formId === id) return false;
    dispatch(removeService(id));
  };

  const handleEdit = () => {
    if (formId === id) return false;
    dispatch(formChange("name", name));
    dispatch(formChange("price", price));
    dispatch(formChange("id", id));
  };

  return (
    <li className="list-group-item">
      <div>
        <span>{name} </span>
        <span>{price} </span>
        <button type="button" className="btn btn-dark" onClick={handleRemove}>
          X
        </button>
        <button type="button" className="btn btn-danger" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </li>
  );
}
