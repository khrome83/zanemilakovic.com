const cleanSnapshots = (obj) => {
  for (const prop in obj) {
    if (prop === 'className') {
      let className = obj[prop].replace(/jsx-[0-9]+[\s]?/g, '');
      obj.className = className || '';
      if (!obj.className) {
        delete obj.className;
      }
    } else if (typeof obj[prop] === 'object') {
      cleanSnapshots(obj[prop]);
    }
  }
}

export { cleanSnapshots };
