import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item2.styles.scss';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import slugify from 'slugify';

const CollectionItem2 = ({ item, addItem, route }) => {
  const { name, price, imageUrl } = item;

  const addItemFunc = (x) => addItem(x);

  const toastItem = () => toast('Your item added successful :3');

  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="product-grid">
        <div className="product-image">
          <Link
            to={`${route}/${slugify(name)}`}
          >
            <img
              className="pic-1"
              src={imageUrl}
              alt="img"
            />
            <img
              className="pic-2"
              src={imageUrl}
              alt="img"
            />
          </Link>
          <span className="product-new-label">Sale</span>
          <span className="product-discount-label">20%</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <Link
              to={`${route}/${slugify(name)}`}
            >{name}</Link>
          </h3>
          <div className="price">
            ${price}
            <span>${price + price * 1 / 5}</span>
          </div>
          <Link className="add-to-cart"
            to='#'
            onClick={
              () => {
                addItemFunc(item);
                toastItem();
              }
            }
          >
            + Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

CollectionItem2.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
  route: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem2);