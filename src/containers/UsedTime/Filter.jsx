import React from 'react';
import { Button} from 'react-bootstrap';


const Filter = ({  setShow, setTypeModal }) => {
  const handleShowModal = () => {
    setShow(true);
    setTypeModal('Add');
  };

  return (
    <div className="filter">
      <Button
        variant="success"
        data-testid="add-button"
        aria-label="button-name"
        className="ms-3"
        onClick={handleShowModal}
      >
        Add
      </Button>
    </div>
  );
};

export default Filter;
