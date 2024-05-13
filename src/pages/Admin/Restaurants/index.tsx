import { useEffect, useState } from "react";
import IRestaurant from "../../../interfaces/IRestaurant";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminRestaurants = () => {
  const navigate = useNavigate();
  const [isRestaurants, setIsRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurant[]>("http://localhost:8000/api/v2/restaurantes/")
      .then(res => {
        setIsRestaurants(res.data);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  }, []);

  function onDeleteRestaurant(deleteRestaurant: IRestaurant) {
    axios
      .delete(
        `http://localhost:8000/api/v2/restaurantes/${deleteRestaurant.id}/`
      )
      .then(() => {
        const listCurrent = isRestaurants.filter(
          restaurant => restaurant.id !== deleteRestaurant.id
        );
        setIsRestaurants([...listCurrent]);
      });
  }

  return (
    <>
      <TableContainer>
        <Button
          variant="outlined"
          color="success"
          onClick={() => navigate("novo")}
        >
          Adicionar um novo restaurante
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isRestaurants.map(restaurante => (
              <TableRow key={restaurante.id}>
                <TableCell>{restaurante.nome}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => navigate(`${restaurante.id}/`)}
                  >
                    editar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onDeleteRestaurant(restaurante)}
                  >
                    excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
