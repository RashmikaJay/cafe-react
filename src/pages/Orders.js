import { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { api } from "../config";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Badge,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setorders] = useState([]);

  const fetchorders = async () => {
    const result = await axios.get(`${api}/item/orders`);
    setorders(result.data);
  };

  useEffect(() => {
    fetchorders();
  }, []);

  const handleComplete = async (orderId) => {
    await axios.post(`${api}/item/order-complete/${orderId}`, {});
    fetchorders();
  };

  return (
    <div className='order-container'>
      <h2 className='subtitle'>Orders</h2>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Order code</Th>
              <Th>orders</Th>
              <Th isNumeric>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.code}</Td>
                <Td>
                  {order.items.map((item) => (
                    <div key={item.name}>
                      {item.name} ({item.qty})
                    </div>
                  ))}
                </Td>
                <Td isNumeric>{order.total}</Td>

                <Td>
                  {order.complete ? (
                    <Badge colorScheme='green'>Completed</Badge>
                  ) : (
                    <Button
                      colorScheme='green'
                      onClick={() => {
                        handleComplete(order.id);
                      }}
                    >
                      Complete
                    </Button>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
