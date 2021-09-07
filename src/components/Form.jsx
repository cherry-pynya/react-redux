import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { formChange, addService, editService } from "../actions/actionCreators";

function Form(props) {
  const item = useSelector((state) => state.serviceForm);
  const dispatch = useDispatch();

  const { id } = item;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(formChange(name, value));
  };

  const clearForm = () => {
    dispatch(formChange("name", ""));
    dispatch(formChange("price", ""));
    dispatch(formChange("id", null));
  };

  const handleCancel = () => {
    clearForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(editService(id, item.name, item.price));
    }
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="service">Услуга</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="form-control"
          id="service"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Цена</label>
        <input
          name="price"
          value={item.price}
          onChange={handleChange}
          type="number"
          className="form-control"
          id="price"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Сохранить
      </button>
      {id ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCancel}
        >
          Отмена
        </button>
      ) : (
        false
      )}
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { serviceAdd } = state;
  return { item: serviceAdd };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (name, value) => dispatch(formChange(name, value)),
    onSave: (name, value) => dispatch(addService(name, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
