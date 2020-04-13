import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import CollectionItem2 from '../collection-item/collection-item2.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"
      style={{
        textAlign: 'start',
        paddingLeft: '15px',
        fontWeight: '500',
        fontSize: '1.5em'
      }}
    >{title}</h1>
    {/* <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div> */}
    {
      window.location.pathname === '/shop' ? 
        (<div className="preview">
          <div className="container">
            <div className="row">
              {
                items
                  .filter((item, idx) => idx < 8)
                  .map(item => (
                    <CollectionItem2 key={item.id} item={item} />
                  ))
              }
            </div>
          </div>
        </div>) : 
        (<div className="preview">
          <div className="container">
            <div className="row">
              {
                items
                  .filter((item, idx) => idx < 4)
                  .map(item => (
                    <CollectionItem2 key={item.id} item={item} />
                  ))
              }
            </div>
          </div>
        </div>
        )
    }
  </div>
);

export default CollectionPreview;
{/* <div className="preview">
      <div className="container">
        <div className="row">
          {
            items
              .filter((item, idx) => idx < 8)
              .map(item => (
                <CollectionItem2 key={item.id} item={item} />
              ))
          }
        </div>
      </div>
      {/* <CollectionItem2/> 
      </div >*/}
    
{/* <CollectionItem key={item.id} item={item} /> */ }