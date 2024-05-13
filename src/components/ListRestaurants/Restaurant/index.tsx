import { useEffect, useState } from "react";
import IDish from "../../../interfaces/IDish";
import IRestaurant from "../../../interfaces/IRestaurant";
import Dish from "../Dish";
import styles from "./Restaurant.module.scss";
import axios from "axios";

interface RestaurantProps {
  restaurant: IRestaurant;
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const [pratos, setPratos] = useState<IDish[]>();
  useEffect(() => {
    axios
      .get<IDish[]>(
        `http://localhost:8000/api/v1/restaurantes/${restaurant.id}/pratos/`
      )
      .then(res => {
        setPratos(res.data);
      })
      .catch(error => console.log({ error: "deu erro na paginação" + error }));
  }, [restaurant.id]);
  // "http://localhost:8000/api/v1/pratos/"

  return (
    <section className={styles.Restaurant}>
      <div className={styles.Title}>
        <h2>{restaurant.nome}</h2>
      </div>
      <div>
        {pratos?.map(item => (
          <Dish dish={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
