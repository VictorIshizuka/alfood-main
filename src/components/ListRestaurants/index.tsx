import { useEffect, useState } from "react";
import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListRestaurants.module.scss";
import Restaurant from "./Restaurant";
import axios from "axios";
import { IPagination } from "../../interfaces/IPagination";

const ListRestaurants = () => {
  const [isList, setIsList] = useState<IRestaurant[]>([]);
  const [isNextPage, setIsNextPage] = useState("");
  const [isPreviousPage, setIsPreviousPage] = useState("");

  const loadingData = (url: string) => {
    axios
      .get<IPagination<IRestaurant>>(url)
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

  return (
    <section className={style.ListRestaurants}>
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
