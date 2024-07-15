import Image from "next/image";
import React, { useState } from "react";

const ShopItem = (props) => {
  const [modalData, setModalData] = useState({
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "/fallbackimage.png",
  });
  const fetchModalData = async (id) => {
    const modalDataUrl = `https://fakestoreapi.com/products/${id}`;
    const data = await fetch(modalDataUrl);
    const parsedData = await data.json();
    setModalData(parsedData);
  };
  const { itemElement } = props;
  return (
    <>
      <div
        className="card mx-3 mb-3 h-fit-content"
        key={itemElement.id}
        style={{ width: "18rem" }}
      >
        <Image
          src={itemElement.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
					alt={itemElement.title}
					priority={true}
        />
        <div className="card-body">
          <div className="card-title fs-5">{itemElement.title}</div>
          <div className="card-title fs-4 fw-bold">${itemElement.price}</div>
          <div className="card-text">
            {itemElement.description.slice(0, 100)}...
          </div>
          <button
            type="button"
            className="btn btn-primary stretched-link"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${itemElement.id}`}
            onClick={() => {
              fetchModalData(itemElement.id);
            }}
          >
            View More Details
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id={`exampleModal-${itemElement.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {modalData.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <Image
                src={modalData.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "250px", width: "auto" }}
								alt={itemElement.title}
              />
            </div>
            <div className="modal-body  fw-bold">Price: ${modalData.price}</div>
            <div className="modal-body">
              Category:{" "}
              {modalData.category.charAt(0).toUpperCase() +
                modalData.category.slice(1)}
            </div>
            <div className="modal-body">
              Description: {modalData.description}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
