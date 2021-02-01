import _get from 'lodash/get';

export const normalize = (array, keyName = 'id', transform) => {
  const entities = {};
  const list = [];

  array.forEach((item) => {
    const key = _get(item, keyName);

    if (['string', 'number'].includes(typeof key)) {
      list.push(key);
      entities[key] = transform ? transform(item) : item;
    }
  });

  return { entities, list };
};

export const denormalize = (data, list) => {
  return list.map((key) => data[key]);
};
