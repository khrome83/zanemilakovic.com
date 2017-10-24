// @ts-check --jsx

import PropTypes from 'prop-types';

// H1 Element
const H1 = ({ className, children, id }) => (
  <h1 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 1.296rem;
        --mid: 2.2265rem;
        --max: 3.157rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h1>
);

H1.defaultProps = {
  id: null,
  className: null,
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// H2 Element
const H2 = ({ className, children, id }) => (
  <h2 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 1.215rem;
        --mid: 1.9525rem;
        --max: 2.369rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h2>
);

H2.defaultProps = {
  id: null,
  className: null,
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// H3 Element
const H3 = ({ className, children, id }) => (
  <h3 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 1.138rem;
        --mid: 1.475rem;
        --max: 1.777rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h3>
);

H3.defaultProps = {
  id: null,
  className: null,
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// H4 Element
const H4 = ({ className, children, id }) => (
  <h4 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 1.067rem;
        --mid: 1.2rem;
        --max: 1.333rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h4>
);

H4.defaultProps = {
  id: null,
  className: null,
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// H5 Element
const H5 = ({ className, children, id }) => (
  <h5 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 1rem;
        --mid: 1rem;
        --max: 1rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h5>
);

H5.defaultProps = {
  id: null,
  className: null,
};

H5.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// H6 Element
const H6 = ({ className, children, id }) => (
  <h6 className={`heading ${className}`} id={id}>
    { children }
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --min: 0.937rem;
        --mid: 0.8435rem;
        --max: 0.75rem;
      }

      .heading {
        font-size: var(--min);
        line-height: calc(var(--min) + var(--heading-height-add));
        margin-top: calc((var(--heading-height-min) - var(--min)) + var(--heading-height-min));
        margin-bottom: var(--heading-height-min);
        position: relative;
        padding: 0;

        @media (--tablet-viewport) {
          font-size: var(--mid);
          line-height: calc(var(--mid) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-mid) - var(--mid)) + var(--heading-height-mid));
          margin-bottom:  var(--heading-height-mid);
        }

        @media (--desktop-viewport) {
          font-size: var(--max);
          line-height: calc(var(--max) + var(--heading-height-add));
          margin-top: calc((var(--heading-height-max) - var(--max)) + var(--heading-height-max));
          margin-bottom:  var(--heading-height-max);
        }
      }
    `}</style>
  </h6>
);

H6.defaultProps = {
  id: null,
  className: null,
};

H6.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

// Heading
const Heading = (props) => {
  const { children, level, ...rest } = props;

  if (level === 1) {
    return <H1 {...rest}>{ children }</H1>;
  } else if (level === 3) {
    return <H3 {...rest}>{ children }</H3>;
  } else if (level === 4) {
    return <H4 {...rest}>{ children }</H4>;
  } else if (level === 5) {
    return <H5 {...rest}>{ children }</H5>;
  } else if (level === 6) {
    return <H6 {...rest}>{ children }</H6>;
  }

  // Defaults to H2
  return <H2 {...rest}>{ children }</H2>;
};

Heading.defaultProps = {
  level: 2,
  id: null,
  className: null,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
};

export { Heading as default, H1, H2, H3, H4, H5, H6 };
