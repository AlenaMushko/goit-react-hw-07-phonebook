import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ElWraper, ElButton } from './ContactEl.styled';

export const ContactEl = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;
  return (
    <ElWraper>
      <p>{name}:</p>
      <span>{phone}</span>
      <ElButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ElButton>
    </ElWraper>
  );
};

ContactEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
