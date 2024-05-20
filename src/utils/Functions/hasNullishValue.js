const hasNullishValue = (array) => {
  return array.some((item) => {
    if (item === null || item === undefined) return true;

    if (typeof item === "object" && item !== null) {
      return Object.values(item).some(
        (value) => value === null || value === undefined
      );
    }

    return false;
  });
};

export default hasNullishValue;
