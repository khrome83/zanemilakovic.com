import React from 'react';

export default () => (
  <div>
    <div className="test">TESTING</div>
    <style jsx>{`
      @import './styles/variables.css';

      .test {
        color: var(--page-font-color);
        background-color: var(--page-background-color);
      }
    `}</style>
  </div>
);
