// @ts-check --jsx

import PropTypes from 'prop-types';

const Social = ({ url, ...rest }) => (
  <a className="social" {...rest}>
    <style jsx>{`
      @import './styles/variables.css';

      .social {
        display: inline-block;
        background-color: brown;
        background-image: ${`url(${url})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        margin: 0 0.5rem;

        &:hover,
        &:active {
          background-color: red;
        }
      }
    `}</style>
  </a>
);

Social.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const GitHub = ({ href }) => (
  <Social href={href} url="/static/icons/github.svg" title="GitHub" />
);

GitHub.propTypes = {
  href: PropTypes.string.isRequired,
};

const GitLab = ({ href }) => (
  <Social href={href} url="/static/icons/gitlab.svg" title="GitLab" />
);

GitLab.propTypes = {
  href: PropTypes.string.isRequired,
};

const LinkedIn = ({ href }) => (
  <Social href={href} url="/static/icons/linkedin.svg" title="LinkedIn" />
);

LinkedIn.propTypes = {
  href: PropTypes.string.isRequired,
};

const Twitter = ({ href }) => (
  <Social href={href} url="/static/icons/twitter.svg" title="Twitter" />
);

Twitter.propTypes = {
  href: PropTypes.string.isRequired,
};

const CodePen = ({ href }) => (
  <Social href={href} url="/static/icons/codepen.svg" title="CodePen" />
);

CodePen.propTypes = {
  href: PropTypes.string.isRequired,
};

export { Social as default, GitHub, GitLab, LinkedIn, Twitter, CodePen };
