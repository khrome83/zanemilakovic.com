// @ts-check --jsx
/* eslint-disable no-param-reassign */

const cleanSnapshots = (node) => {
  for (const prop in node) {
    if (prop === 'className') {
      const className = node[prop].replace(/jsx-[0-9]+[\s]?/g, '');
      node.className = className || '';
      if (!node.className) {
        delete node.className;
      }
    } else if (typeof node[prop] === 'object') {
      cleanSnapshots(node[prop]);
    }
  }
};

const lib = {
  cleanSnapshots,
};

export { lib as default, cleanSnapshots };
