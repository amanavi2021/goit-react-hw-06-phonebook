import { InputFiter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
 
  const handleFilterChange = event => {
   dispatch(updateFilter(event.currentTarget.value))
  };

  return (
    <label>
      Find contacts by name
        <InputFiter type="text" onChange={handleFilterChange} />
    </label>
  );
};

