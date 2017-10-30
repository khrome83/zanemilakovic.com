// @ts-check --jsx

import Section from '../components/Section';
import P from '../components/P';
import { GitHub, GitLab, LinkedIn, CodePen, Twitter } from '../components/Social';

const Footer = () => (
  <Section>
    <div className="footer">
      <div className="social">
        <P>
          <GitHub href="https://github.com/khrome83" />
          <GitLab href="https://gitlab.com/khrome83" />
          <CodePen href="https://codepen.io/khrome83/" />
          <LinkedIn href="https://www.linkedin.com/in/zanecmilakovic/" />
          <Twitter href="https://twitter.com/Khrome83" />
        </P>
      </div>
      <div className="copyright">
        <P>
          A Crafted Experience<br />
          by Zane Milakovic © 2017
        </P>
      </div>
      <style jsx>{`
        @import './styles/variables.css';

        .footer {
          text-align: center;
        }

        @media (--tablet-viewport) {
          .footer {
            display: flex;
            text-align: initial;
            align-items: center;
          }

          .copyright,
          .social {
            flex: 1;
          }

          .social {
            order: 1;
            text-align: end;
          }
        }
      `}</style>
    </div>
  </Section>
);

export { Footer as default };
