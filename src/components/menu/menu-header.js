import { Table } from "flowbite-react";

const headers = [
  "Name",
  "Cost",
  "Category",
  "Price",
  "Stock",
  "Options",
  "Actions",
];

const Headers = headers.map((header) => (
  <Table.HeadCell>{header}</Table.HeadCell>
));

function MenuHeader() {
  return (
    <Table.Head>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Cost</Table.HeadCell>
      <Table.HeadCell>Category</Table.HeadCell>
      <Table.HeadCell>Price</Table.HeadCell>
      <Table.HeadCell>Stock</Table.HeadCell>
      <Table.HeadCell>Options</Table.HeadCell>
      <Table.HeadCell>Actions</Table.HeadCell>
    </Table.Head>
  );
}

export default MenuHeader;
