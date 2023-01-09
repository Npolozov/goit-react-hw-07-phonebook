import { Button, ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';

export function ListContact({ name, number, id }) {
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ConteinerButton>
        <Button onClick={null}>Delete</Button>
      </ConteinerButton>
    </>
  );
}

ListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
