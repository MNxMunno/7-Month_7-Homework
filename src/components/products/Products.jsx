import React from "react";
import { useGetProductsQuery } from "../../context/api/ProductsApi";

const Products = () => {
  const { data } = useGetProductsQuery();
  let card = data?.products?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.images[0]} alt="" />
      <h1>{el.title}</h1>
      <b>${el.price}</b>
    </div>
  ));

  return (
    <section className="products " style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Products;
