import PropTypes from 'prop-types';
import { ElWraper, ElButton } from './ContactEl.styled';

export const ContactEl = ({ name, phone, onDelete }) => {
  return (
    <ElWraper>
      <p>{name}:</p>
      <span>{phone}</span>
      <ElButton type="buttn" onClick={onDelete}>
        Delete
      </ElButton>
    </ElWraper>
  );
};

ContactEl.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
