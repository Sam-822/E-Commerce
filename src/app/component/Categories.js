"use client";
import React, { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setcategoryData] = useState([]);
  const [currElement, setCurrElement] = useState("electronics");
  const types = [
    "Product type 1",
    "Product type 2",
    "Product type 3",
    "Product type 4",
  ];
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["black", "brown", "tan", "gray"];
  const handleCategoryClick = async (element = "electronics") => {
    const categoryDataUrl = `https://fakestoreapi.com/products/category/${element}`;
    const data = await fetch(categoryDataUrl);
    const parsedData = await data.json();
    setcategoryData(parsedData);
    setCurrElement(element);
  };
  const getCategories = async () => {
    const categoriesUrl = "https://fakestoreapi.com/products/categories";
    const data = await fetch(categoriesUrl);
    const parsedData = await data.json();
    setCategories(parsedData);
  };
  useEffect(() => {
    getCategories();
    handleCategoryClick();
  }, []);

  return (
    <div className="container mt-5 d-flex">
      <div className="d-flex flex-column">
        <ul className="list-group me-5 ">
          <li className="list-group-item border-black bg-dark-subtle fw-bold ">
            Product Category
          </li>
          {categories.map((element) => {
            return (
              <li
                key={element}
                className={`list-group-item border-black nav-width ${
                  currElement === element ? "active-nav" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  handleCategoryClick(element);
                }}
                id={element}
              >
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </li>
            );
          })}
        </ul>
        <ul className="list-group me-5 mt-5 ">
          <li className="list-group-item border-black bg-dark-subtle fw-bold ">
            Product Type
          </li>
          {types.map((element) => {
            return (
              <li key={element} className="list-group-item border-black nav-width d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" />
                <input
                  type="text"
                  className="form-control border-0 ms-1 bg-body "
                  disabled
                  value={element}
                  aria-label="Text input with checkbox"
                />
              </li>
            );
          })}
        </ul>
        <ul className="list-group me-5 mt-5 ">
          <li className="list-group-item border-black bg-dark-subtle fw-bold ">
            Sizes
          </li>
          <li className="list-group-item border-black nav-width d-flex align-items-center">
            <ul className="list-group list-group-horizontal nav-width">
              {sizes.map((element) => {
                return (
                  <li
									key={element}
                    className="list-group-item"
                    style={{ cursor: "pointer" }}
                    id={element}
                    onClick={() => {
                      document
                        .getElementById(element)
                        .classList.toggle("bg-body-secondary");
                    }}
                  >
                    {element}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <ul className="list-group me-5 mt-5 ">
          <li className="list-group-item border-black bg-dark-subtle fw-bold ">
            Colors
          </li>
          <li className="list-group-item border-black nav-width d-flex align-items-center">
            <ul className="list-group list-group-horizontal nav-width">
              {colors.map((element) => {
                return (
                  <li
									key={element}
                    className="list-group-item h-auto py-2"
                    style={{
                      cursor: "pointer",
                      paddingLeft: 13,
                      paddingRight: 13,
                    }}
                    id={element}
                    onClick={() => {
                      document
                        .getElementById(element)
                        .classList.toggle("bg-body-secondary");
                      document
                        .getElementById(element)
                        .classList.toggle("text-white");
                    }}
                  >
                    <div
                      style={{
                        height: 15,
                        width: 15,
                        backgroundColor: element,
                      }}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="ms-3 mb-3">
          {currElement.charAt(0).toUpperCase() + currElement.slice(1)}
        </h1>
        <div
          className="d-grid justify-content-between w-100"
          style={{ gridTemplateColumns: "auto auto auto" }}
        >
          {categoryData &&
            categoryData.map((itemElement) => {
              return (
                <ShopItem key={itemElement.id} itemElement={itemElement} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
