import React, { memo } from "react";

const Search = ({ data }) => {
  //   console.log(data);
  const card = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="navbar__search-model-img">
        <img src={el.images[0]} alt="" />
      </div>
      <div className="navbar__search-model-text">
        <p>{el.title}</p>
      </div>
    </div>
  ));
  return <div className="navbar__search-model">{card}</div>;
};

export default memo(Search);
