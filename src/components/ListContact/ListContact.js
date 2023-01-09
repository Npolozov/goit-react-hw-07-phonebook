import { Button, ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDeletoContactMutation } from 'redux/contactSlice';

export function ListContact({ name, number, id }) {
  const [handleDelete, { isLoading: isDeleting }] = useDeletoContactMutation();
  console.log(handleDelete);

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ConteinerButton>
        <Button onClick={() => handleDelete(id)}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </ConteinerButton>
    </>
  );
}

ListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
