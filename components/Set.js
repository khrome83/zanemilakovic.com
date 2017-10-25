// @ts-check --jsx

import PropTypes from 'prop-types';

// Convert to Grid, add Set that uses Flexbox Spacing
const Set = ({ children, gutter, desktop, tablet, mobile }) => (
  <div className={`set ${gutter && 'gutter'}`}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      .set {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: var(--outer-padding-mobile);
        margin: 0;

        @media (--tablet-viewport) {
          padding-top: var(--outer-padding-tablet);
        }

        @media (--desktop-viewport) {
          padding-top: var(--outer-padding-desktop);
        }
      }

      .set.gutter {
        margin: 0 calc(var(--outer-padding-mobile) / -2);

        @media (--tablet-viewport) {
          margin: 0 calc(var(--outer-padding-tablet) / -2);
        }

        @media (--desktop-viewport) {
          margin: 0 calc(var(--outer-padding-desktop) / -2);
        }
      }

      .set :global(.tile) {
        margin-bottom: var(--outer-padding-mobile);
        flex-basis: ${100 / mobile}%;

        @media (--tablet-viewport) {
          margin-bottom: var(--outer-padding-tablet);
          flex-basis: ${100 / tablet}%;
        }

        @media (--desktop-viewport) {
          margin-bottom: var(--outer-padding-desktop);
          flex-basis: ${100 / desktop}%;
        }
      }

      .gutter :global(.tile) {
        margin-left: calc(var(--outer-padding-mobile) / 2);
        margin-right: calc(var(--outer-padding-mobile) / 2);
        flex-basis: ${100 / (mobile + 1)}%;

        @media (--tablet-viewport) {
          margin-left: calc(var(--outer-padding-tablet) / 2);
          margin-right: calc(var(--outer-padding-tablet) / 2);
          flex-basis: ${100 / (tablet + 1)}%;
        }

        @media (--desktop-viewport) {
          margin-left: calc(var(--outer-padding-desktop) / 2);
          margin-right: calc(var(--outer-padding-desktop) / 2);
          flex-basis: ${100 / (desktop + 1)}%;
        }
      }
    `}</style>
  </div>
);

Set.defaultProps = {
  gutter: false,
  desktop: 1,
  tablet: 1,
  mobile: 1,
};

Set.propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.bool,
  desktop: PropTypes.number,
  tablet: PropTypes.number,
  mobile: PropTypes.number,
};

export { Set as default };
