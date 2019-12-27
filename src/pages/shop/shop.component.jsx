import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={loading} { ...props } /> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} { ...props } />} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollection: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
