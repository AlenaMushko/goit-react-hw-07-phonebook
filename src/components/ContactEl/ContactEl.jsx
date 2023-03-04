import PropTypes from 'prop-types';
import { ElWraper, ElButton } from './ContactEl.styled';

export const ContactEl = ({ name, number, onDelete }) => {
  return (
    <ElWraper>
      <p>{name}:</p>
      <span>{number}</span>
      <ElButton type="buttn" onClick={onDelete}>
        Delete
      </ElButton>
    </ElWraper>
  );
};

ContactEl.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
