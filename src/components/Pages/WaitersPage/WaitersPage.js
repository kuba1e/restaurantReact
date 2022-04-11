import React from "react";
import ItemList from "../../ItemList";
import Filters from "../../Inputs";

const TablePage = (props) => {
  return (
    <section className="tables">
      <div className="tables__inner">
        <Filters />
        <ItemList />
      </div>
    </section>
  );
};
