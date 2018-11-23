import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CatalogList = ({src, level, intro}) => {
  return (
    <div className="catalog-card">
    <div><video width="180" height="120" controls  controlsList="nodownload"  src={src}></video></div>
    <div className="catalog-content">
      <p style={{'padding-top': '2rem', 'padding-bottom': '0rem', 'padding-left': '2rem'}}>
      <strong>{level}</strong>
      </p>
      <p style={{'padding-left': '2rem'}}>{intro}</p>
    </div>
    <div className="catalog-btn"><Link to="/" className="btn btn--brown">Join This Class</Link></div>      
    </div>
  )
}
CatalogList.propTypes = {
  src: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
}
export default CatalogList