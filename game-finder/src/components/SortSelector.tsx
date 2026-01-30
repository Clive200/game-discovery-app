import { Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ] as const;

  return (
    <Menu.Root>
      <Menu.Trigger
        display="inline-flex"
        alignItems="center"
        gap="2"
        paddingX="3"
        paddingY="2"
        borderWidth="1px"
        borderRadius="md"
      >
        Order by: Relevance
        <BsChevronDown />
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item key={order.label} value={order.value}>
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
