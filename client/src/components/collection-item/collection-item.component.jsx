import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-component";
import { withRouter } from "react-router-dom";

const CollectionItem = ({ item, history, collection }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">£{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => history.push(`/shop/${collection}/${item.id}`)}
      >
        View
      </CustomButton>
    </div>
  );
};

export default withRouter(CollectionItem);
