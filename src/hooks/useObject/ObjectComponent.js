import React, { useEffect } from 'react';

import useObject from './useObject';

const ObjectComponent = () => {
  const {
    state: object,
    getProperty,
    setProperty,
    deleteProperty,
    getLength,
    isEmpty,
    getValues,
    getEntries,
    print,
    contains,
  } = useObject({ name: 'test' });

  useEffect(() => {}, []);
  console.log(isEmpty());

  return <p>Object Component</p>;
};

export default ObjectComponent;
