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
import { Link } from "react-router-dom";

export const AdminRestaurants = () => {
  const [isRestaurants, setIsRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurant[]>("http://localhost:8000/api/v2/restaurantes/")
      .then(res => {
        setIsRestaurants(res.data);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  }, [isRestaurants]);

  return (
    <>
      <TableContainer>
        [ <Link to={"novo"}>Novo</Link>]
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isRestaurants.map(resturante => (
              <TableRow key={resturante.id}>
                <TableCell>{resturante.nome}</TableCell>
                <TableCell>
                  [<Link to={`${resturante.id}/`}>editar</Link>]
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
