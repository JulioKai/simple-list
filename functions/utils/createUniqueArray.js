const createUniqueArray = (...arrays) => {
  const combinedArray = arrays.flat();
  const uniqueSet = new Set(combinedArray.map(obj => obj.normalized_name));
  const uniqueObjects = [...uniqueSet].map(name => {
    return combinedArray.find(obj => obj.normalized_name === name);
  });
  const newArray = uniqueObjects.map(element => element.name)
  return newArray;
};

module.exports = createUniqueArray;