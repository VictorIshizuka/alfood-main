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

import { useNavigate } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IDish";

export const AdminPratos = () => {
  const navigate = useNavigate();
  const [isPratos, setIsPratos] = useState<IPrato[]>([]);

  useEffect(() => {
    http
      .get<IPrato[]>("pratos/")
      .then(res => {
        setIsPratos(res.data);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  }, []);

  function onDeletePrato(deletePrato: IPrato) {
    http.delete(`pratos/${deletePrato.id}/`).then(() => {
      const listCurrent = isPratos.filter(prato => prato.id !== deletePrato.id);
      setIsPratos([...listCurrent]);
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
          Adicionar um novo prato
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isPratos.map(prato => (
              <TableRow key={prato.id}>
                <TableCell>{prato.nome}</TableCell>
                <TableCell>{prato.descricao}</TableCell>
                <TableCell>{prato.tag}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => navigate(`${prato.id}/`)}
                  >
                    editar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onDeletePrato(prato)}
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
