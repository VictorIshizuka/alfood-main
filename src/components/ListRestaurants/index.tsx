import { useEffect, useState } from "react";
import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListRestaurants.module.scss";
import Restaurant from "./Restaurant";
import axios, { AxiosRequestConfig } from "axios";
import { IPagination } from "../../interfaces/IPagination";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface IParamsSearch {
  ordering?: string;
  search?: string;
}

const ListRestaurants = () => {
  const [isList, setIsList] = useState<IRestaurant[]>([]);
  const [isSearch, setIsSearch] = useState("");
  const [isOrder, setIsOrder] = useState("");
  const [isNextPage, setIsNextPage] = useState("");
  const [isPreviousPage, setIsPreviousPage] = useState("");

  const loadingData = (url: string, opcoes: AxiosRequestConfig = {}) => {
    axios
      .get<IPagination<IRestaurant>>(url, opcoes)
      .then(res => {
        setIsList(res.data.results);
        setIsNextPage(res.data.next);
        setIsPreviousPage(res.data.previous);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  };

  useEffect(() => {
    loadingData("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const opcoes = {
      params: {} as IParamsSearch,
    };
    if (isSearch) {
      opcoes.params.search = isSearch;
    }
    if (isOrder) {
      opcoes.params.ordering = isOrder;
    }
    loadingData("http://localhost:8000/api/v1/restaurantes/", opcoes);
  };

  return (
    <section className={style.ListRestaurants}>
      <form onSubmit={onSearch}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          value={isSearch}
          onChange={e => setIsSearch(e.target.value)}
        />

        <InputLabel id="demo-simple-select-label">Ordenação</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={isOrder}
          label="Age"
          onChange={e => setIsOrder(e.target.value)}
        >
          <MenuItem value="id">Padrão</MenuItem>
          <MenuItem value="nome">Nome</MenuItem>
        </Select>

        <Button variant="contained" type="submit">
          buscar
        </Button>
      </form>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {isList?.map(item => (
        <Restaurant restaurant={item} key={item.id} />
      ))}
      {
        <button
          onClick={() => loadingData(isPreviousPage)}
          disabled={!isPreviousPage}
        >
          Página Anterior
        </button>
      }
      {
        <button onClick={() => loadingData(isNextPage)} disabled={!isNextPage}>
          Próxima página
        </button>
      }
    </section>
  );
};

export default ListRestaurants;
