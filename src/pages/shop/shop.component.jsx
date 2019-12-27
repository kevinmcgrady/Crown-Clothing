import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
 
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} { ...props } /> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionFetching} { ...props } />} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
