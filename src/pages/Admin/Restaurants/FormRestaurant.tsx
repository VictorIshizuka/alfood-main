import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const FormRestaurant = () => {
  const [isNameRestaurant, setIsNameRestaurant] = useState("");

  function registerDish(e: React.FormEvent<HTMLFormElement>): void {
    //criar o hook para criar o prato
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v2/restaurantes/", {
        nome: isNameRestaurant,
      })
      .then(() => {});
  }
  return (
    <form onSubmit={registerDish}>
      <TextField
        label="Nome do restaurante"
        type="text"
        variant="standard"
        onChange={e => setIsNameRestaurant(e.target.value)}
        value={isNameRestaurant}
      />
      <Button variant="outlined" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};
