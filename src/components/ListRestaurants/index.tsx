import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListRestaurants.module.scss";
import Restaurant from "./Restaurant";

const ListRestaurants = () => {
  const restaurants: IRestaurant[] = [
    {
      id: 1,
      name: "Lyllys Cafe",
      dish: [
        {
          id: 1,
          description: "Lasanha à Bolonhesa",
          image: "https://bing.com/th?id=OSK.11a79c9706bf601115e077855ada094a",
          name: "Lasanha",
          restaurant: 1,
          tag: "Italiana",
        },
        {
          id: 2,
          description: "Strogonoff de Frango",
          image:
            "https://th.bing.com/th/id/R.2b63d0f57c986851122780a4d39eaec0?rik=yeNmqSwkhfBoAw&pid=ImgRaw&r=0",
          name: "Strogonoff",
          restaurant: 1,
          tag: "Russa",
        },
        {
          id: 3,
          description: "Empadão de Frango",
          image:
            "https://th.bing.com/th/id/OIP.Ewpbh9M3OQPfpSvXruWEowHaE8?rs=1&pid=ImgDetMain",
          name: "Empadão de Frango",
          restaurant: 1,
          tag: "Portuguesa",
        },
      ],
    },
    {
      id: 2,
      name: "Sugiro Sushi",
      dish: [
        {
          id: 1,
          description: "Combinado de 8 peças",
          image:
            "https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg",
          name: "Sushi",
          restaurant: 1,
          tag: "Japonesa",
        },
        {
          id: 2,
          description: "Sashimi de Salmão",
          image:
            "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg",
          name: "Sashimi",
          restaurant: 1,
          tag: "Japonesa",
        },
      ],
    },
    {
      id: 3,
      name: "Cantina da Escola",
      dish: [
        {
          id: 1,
          description: "Salgado de queijo c/ presunto",
          image:
            "https://th.bing.com/th/id/R.829506dc5866cf0676eca923ba7c0d60?rik=GlNKcJuKkxfehg&pid=ImgRaw&r=0",
          name: "Quejunto",
          restaurant: 1,
          tag: "Lanche",
        },
        {
          id: 2,
          description: "Coxinha de Frango",
          image:
            "https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg",
          name: "Coxinha",
          restaurant: 1,
          tag: "Lanche",
        },
        {
          id: 3,
          description: "Risole de Carne c/ Palmito",
          image:
            "https://th.bing.com/th/id/OIP.-xAb8kXfLYM3vrEyfCvQTgHaE7?rs=1&pid=ImgDetMain",
          name: "Risole",
          restaurant: 1,
          tag: "Lanche",
        },
      ],
    },
  ];

  return (
    <section className={style.ListRestaurants}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurants?.map(item => (
        <Restaurant restaurant={item} key={item.id} />
      ))}
    </section>
  );
};

export default ListRestaurants;
