import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const RepaymentFilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Overdue', 'Due Soon', 'Scheduled', 'Paid'];

  return (
    <ButtonGroup className="mb-4">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'primary' : 'outline-primary'}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default RepaymentFilterBar;
