import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = () => {
 
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">first</Button>
      
      <Button data-cy="pagination-previous-button">Prev</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
