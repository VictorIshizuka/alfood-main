import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import http from "../../../http";
import { ITag } from "../../../interfaces/IDish";
import IRestaurant from "../../../interfaces/IRestaurant";

export const FormPratos = () => {
  const [isNamePratos, setIsNamePratos] = useState("");
  const [isDescricaoPratos, setIsDescricaoPratos] = useState("");
  const [isTagPratos, setIsTagPratos] = useState<ITag[]>([]);
  const [isTag, setIsTag] = useState("");
  const [isRestaurantesPratos, setIsRestaurantesPratos] = useState<
    IRestaurant[]
  >([]);
  const [isRestaurante, setIsRestaurante] = useState("");
  //const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>("tags/")
      .then(res => setIsTagPratos(res.data.tags));
  }, []);
  useEffect(() => {
    http
      .get<IRestaurant[]>("restaurantes/")
      .then(res => setIsRestaurantesPratos(res.data));
  }, []);

  function registerPrato(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    http.post("pratos/", {
      nome: isNamePratos,
      descricao: isDescricaoPratos,
      tag: isTag,
      restaurante: isRestaurante,
    });
    navigate(-1);

    // if (params.id) {
    //   http.put(`pratos/${params.id}/`, {
    //     nome: isNamePratos,
    //   });
    //   navigate(-1);
    // } else {
    //   http.post("pratos/", {
    //     nome: isNamePratos,
    //   });
    //   navigate(-1);
    // }
  }

  return (
    <>
      <Box component="form" width="100%" onSubmit={registerPrato}>
        <Typography component="h1" variant="h6">
          Formulário de Pratos
        </Typography>
        <TextField
          label="Nome do Prato"
          type="text"
          variant="standard"
          onChange={e => setIsNamePratos(e.target.value)}
          value={isNamePratos}
          fullWidth
          required
          margin="dense"
        />
        <TextField
          label="Descrição"
          type="text"
          variant="standard"
          onChange={e => setIsDescricaoPratos(e.target.value)}
          value={isDescricaoPratos}
          fullWidth
          required
          margin="dense"
        />
        <FormControl margin="dense" fullWidth>
          <InputLabel>Tag</InputLabel>
          <Select
            labelId="select-tag"
            value={isTag}
            onChange={e => setIsTag(e.target.value)}
          >
            {isTagPratos.map(tag => (
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="dense" fullWidth>
          <InputLabel>Restaurante</InputLabel>
          <Select
            labelId="select-tag"
            value={isRestaurante}
            onChange={e => setIsRestaurante(e.target.value)}
          >
            {isRestaurantesPratos.map(resturante => (
              <MenuItem key={resturante.id} value={resturante.id}>
                {resturante.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          sx={{ marginTop: 1 }}
          fullWidth
          variant="outlined"
          type="submit"
        >
          Cadastrar
          {/* {params.id ? "Editar" : "Cadastrar"} */}
        </Button>
      </Box>
    </>
  );
};
