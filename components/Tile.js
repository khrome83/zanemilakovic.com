// @ts-check --jsx

import PropTypes from 'prop-types';

const Tile = ({ children }) => (
  <div className="tile">
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .tile {
        display: block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #000;
        background-color: tan;
      }
    `}</style>
  </div>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tile as default };
