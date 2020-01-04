import React from 'react';
import './related-products.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from 'react-redux';
import { selectRelatedProducts } from "../../redux/shop/shop.selectors";
import { withRouter } from "react-router-dom";

const RelatedProducts = ({ relatedItems }) => {
    return (
        <div className="relatedProducts">
        <hr />
        {relatedItems
          ? relatedItems.map(relatedItem => (
              <CollectionPreview key={relatedItem.id}
                title={`Related ${relatedItem.title} products`}
                items={relatedItem.items}
                collection={relatedItem.id}
              />
            ))
          : null}
      </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    relatedItems: selectRelatedProducts(ownProps.match.params.collectionId)(state)
  });

export default withRouter(connect(mapStateToProps)(RelatedProducts));