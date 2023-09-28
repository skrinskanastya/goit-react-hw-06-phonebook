import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" name={filter} value={filter} onChange={onChange} />
    </label>
  );
};
