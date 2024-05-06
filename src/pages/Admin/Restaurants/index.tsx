import { useEffect, useState } from "react";
import IRestaurant from "../../../interfaces/IRestaurant";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

export const AdminRestaurants = () => {
  const [isRestaurants, setIsRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurant[]>("http://localhost:8000/api/v2/restaurantes/")
      .then(res => {
        console.log(res.data);
        setIsRestaurants(res.data);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isRestaurants.map(resturante => (
              <TableRow key={resturante.id}>
                <TableCell>{resturante.nome}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
