import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IRestaurant from "../../../interfaces/IRestaurant";
import http from "../../../http";

export const FormRestaurant = () => {
  const [isNameRestaurant, setIsNameRestaurant] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      http
        .get<IRestaurant>(`restaurantes/${params.id}/`)
        .then(res => setIsNameRestaurant(res.data.nome));
    }
  }, [params]);

  function registerRestaurant(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (params.id) {
      http.put(`restaurantes/${params.id}/`, {
        nome: isNameRestaurant,
      });
      navigate(-1);
    } else {
      http.post("restaurantes/", {
        nome: isNameRestaurant,
      });
      navigate(-1);
    }
  }

  return (
    <>
      <Box component="form" width="100%" onSubmit={registerRestaurant}>
        <Typography component="h1" variant="h6">
          Formulário de Restaurantes
        </Typography>
        <TextField
          label="Nome do restaurante"
          type="text"
          variant="standard"
          onChange={e => setIsNameRestaurant(e.target.value)}
          value={isNameRestaurant}
          fullWidth
          required
        />
        <Button
          sx={{ marginTop: 1 }}
          fullWidth
          variant="outlined"
          type="submit"
        >
          {params.id ? "Editar" : "Cadastrar"}
        </Button>
      </Box>
    </>
  );
};
