import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IRestaurant from "../../../interfaces/IRestaurant";

export const FormRestaurant = () => {
  const [isNameRestaurant, setIsNameRestaurant] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      axios
        .get<IRestaurant>(
          `http://localhost:8000/api/v2/restaurantes/${params.id}/`
        )
        .then(res => setIsNameRestaurant(res.data.nome));
    }
  }, [params]);

  function registerRestaurant(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (params.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, {
        nome: isNameRestaurant,
      });
      navigate(-1);
    } else {
      axios.post("http://localhost:8000/api/v2/restaurantes/", {
        nome: isNameRestaurant,
      });
      navigate(-1);
    }
  }

  return (
    <form onSubmit={registerRestaurant}>
      <TextField
        label="Nome do restaurante"
        type="text"
        variant="standard"
        onChange={e => setIsNameRestaurant(e.target.value)}
        value={isNameRestaurant}
      />
      <Button variant="outlined" type="submit">
        {params.id ? "Editar" : "Cadastrar"}
      </Button>
    </form>
  );
};
