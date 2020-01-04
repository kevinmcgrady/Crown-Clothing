import React from "react";
import "./single-product-overview.styles.scss";
import SingleProductOptions from "../single-product-options/single-product-options.component";
import RelatedProducts from "../related-products/related-products.component";

const SingleProductOverview = ({ product }) => {
  return (
    <div className="singleProductContainer">
      <h1>{product.name}</h1>

      <div className="singleProductOverviewContainer">
        <div className="topContainer">
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <div className="bottomContainer">
          <h2>Important information</h2>
          <h3>£{product.price} { product.oldPrice ? (<span>/ <span className="old-price">£{product.oldPrice}</span></span>) : null }
          </h3>
          <p>{product.description}</p>
          <SingleProductOptions product={product} options={product.options} />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default SingleProductOverview;
