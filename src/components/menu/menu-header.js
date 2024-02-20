import { Table } from "flowbite-react";

function MenuHeader() {
  return (
    <Table.Head>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Cost</Table.HeadCell>
      <Table.HeadCell>Category</Table.HeadCell>
      <Table.HeadCell>Price</Table.HeadCell>
      <Table.HeadCell>Stock</Table.HeadCell>
      <Table.HeadCell>Options</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>
  );
}

export default MenuHeader;
