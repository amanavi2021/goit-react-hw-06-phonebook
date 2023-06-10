import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(name));
    return (
        <li>
            <span>{name}</span>: <span>{number}</span>   
             <DeleteBtn 
             type='button' 
             className='ContactList_btn'
             onClick={handleDelete}
             >Delete</DeleteBtn>   
        </li>
    )
};

ContactListItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}



