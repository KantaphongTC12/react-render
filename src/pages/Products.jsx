import React from "react";
import Button from '../components/Button'
import CardList from "../components/CardList";

const Products = () => {
  return (
    <>
      <main className="container mx-auto my-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">
            Products
        </h2>
        <p className="text-gray-700 mb-4">
          Explore our collection of cards showcasing various items.
        </p>
        <hr className="text-purple-200" />
        <CardList />
        <div className="flex justify-end mt-4">
          <Button nameButton="Load More" />
        </div>
      </main>
    </>
  );
};

export default Products;
