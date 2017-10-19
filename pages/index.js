import React from 'react';

export default () => (
  <div className="testing">
    <div className="test1">Testing 1</div>
    <div className="test2">Testing 2</div>
    <div className="test3">Testing 3</div>
    <div className="test4">Testing 4</div>
    <div className="testing">
      <span>
        <span className="testing2" />
      </span>
    </div>
    <style jsx>{`
      @import './styles/variables.css';

      :root {
        --var-inline: #555;
        --font-adjustment: {
          font-weight: bold;
          text-decoration: underline;
        }

        --grid-setup: {
          display: flex;
          flex: 1;
        }
      }

      .testing {
        display: flex;
      }

      .test1 {
        color: var(--var-inline);
        @apply --font-adjustment;
        font-weight: 300;
        @apply --grid-setup;
      }

      .test2 {
        @apply --font-adjustment;
        @apply --grid-setup;
      }

      .test3 {
        @apply --font-adjustment;
        @apply --grid-setup;
      }

      .test4 {
        @apply --font-adjustment;
        @apply --grid-setup;
      }

      @media (--small-viewport) {
        .test1,
        .test2 {
          flex: 3;
        }
      }

    `}</style>
  </div>
);
