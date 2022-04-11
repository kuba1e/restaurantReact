const filterItems = (
  itemsArr,
  firstProp,
  secondProp,
  thirdprop,
  firstFilterValue,
  secondFilterValue,
  searchValue
) => {
  return itemsArr
    .filter((item) => {
      switch (firstFilterValue) {
        case "one person":
          return item[firstProp] === "one person";
        case "two person":
          return item[firstProp] === "two person";
        case "three person":
          return item[firstProp] === "three person";
        case "four person":
          return item[firstProp] === "four person";
        case "six person":
          return item[firstProp] === "six person";
        default:
          return item;
      }
    })
    .filter((item) => {
      switch (secondFilterValue) {
        case "center":
          return item[secondProp] === "center";
        case "terrasa":
          return item[secondProp] === "terrasa";
        case "near the window":
          return item[secondProp] === "near the window";
        case "in the corner":
          return item[secondProp] === "in the corner";
        default:
          return item;
      }
    })
    .filter((item) => {
      return item[thirdprop].toLowerCase().includes(searchValue.toLowerCase());
    });
};
