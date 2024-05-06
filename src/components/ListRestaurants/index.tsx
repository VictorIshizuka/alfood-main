import { useEffect, useState } from "react";
import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListRestaurants.module.scss";
import Restaurant from "./Restaurant";
import axios from "axios";
import { IPagination } from "../../interfaces/IPagination";

const ListRestaurants = () => {
  const [isList, setIsList] = useState<IRestaurant[]>([]);
  const [isPage, setIsPage] = useState("");

  useEffect(() => {
    axios
      .get<IPagination<IRestaurant>>(
        "http://localhost:8000/api/v1/restaurantes/"
      )
      .then(res => {
        setIsList(res.data.results);
        setIsPage(res.data.next);
      })
      .catch(error => console.log({ error: "deu erro na listagem" + error }));
  }, []);

  const verMais = () => {
    axios
      .get<IPagination<IRestaurant>>(isPage)
      .then(res => {
        setIsList([...isList, ...res.data.results]);
        setIsPage(res.data.next);
      })
      .catch(error => console.log({ error: "deu erro na paginação" + error }));
  };

  return (
    <section className={style.ListRestaurants}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {isList?.map(item => (
        <Restaurant restaurant={item} key={item.id} />
      ))}
      {isPage && <button onClick={verMais}>ver mais</button>}
    </section>
  );
};

export default ListRestaurants;
