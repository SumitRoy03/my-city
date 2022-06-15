import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const CityDetails = ({cityState}) => {
  return (
    <div className="_details">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Indian City Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Latitude</Th>
              <Th>Longitude</Th>
              <Th>Population</Th>
              <Th>State</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{cityState.city}</Td>
              <Td>{cityState.lat}</Td>
              <Td>{cityState.lng}</Td>
              <Td>{cityState.population}</Td>
              <Td>{cityState.admin_name}</Td>
              <Td>{cityState.country}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CityDetails;
