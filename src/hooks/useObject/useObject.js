import React, { useState } from 'react';

const useObject = (initialObject) => {
  const [state, setState] = useState(initialObject);

  const getProperty = (property) => {
    return state[property];
  };

  const setProperty = (property, value) => {
    const newProperty = { ...state };
    newProperty[property] = value;
    setState(newProperty);
  };

  const deleteProperty = (property) => {
    const newProperty = { ...state };
    delete newProperty[property];
    setState(newProperty);
  };

  const getKeys = () => {
    const keys = Object.keys(state);
    return keys;
  };

  const getValues = () => {
    const values = Object.values(state);
    return values;
  };

  const getEntries = () => {
    const entries = Object.entries(state);
    return entries;
  };

  const getLength = () => {
    const length = getKeys().length;
    return length;
  };

  const isEmpty = () => {
    const length = getLength();
    return length === 0;
  };

  const contains = (property) => {
    return Object.hasOwn(state, property);
  };

  const print = () => {
    console.table(state);
  };

  const compare = (target) => {
    return JSON.stringify(target) === JSON.stringify(state);
  };

  const isNull = () => {
    return state === null;
  };

  const isUndefined = () => {
    return state === undefined;
  };

  const isObject = () => {
    return state != null && state.constructor.name === 'Object';
  };

  return {
    state,
    getProperty,
    setProperty,
    deleteProperty,
    getLength,
    getKeys,
    getValues,
    getEntries,
    isEmpty,
    print,
    contains,
    compare,
    isNull,
    isUndefined,
    isObject,
  };
};

export default useObject;
