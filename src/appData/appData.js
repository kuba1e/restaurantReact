const appData = {
  tableOptions: [
    [
      { id: 1, value: "center", label: "center" },
      { id: 2, value: "terrasa", label: "terrasa" },
      { id: 3, value: "near the window", label: "near the window" },
      { id: 4, value: "in the corner", label: "in the corner" },
    ],
    [
      { id: 1, value: "one person", label: "one person" },
      { id: 2, value: "two person", label: "two person" },
      { id: 3, value: "three person", label: "three person" },
      { id: 4, value: "four person", label: "four person" },
      { id: 5, value: "six person", label: "six person" },
    ],
  ],
  dishesOptions: [
    [
      { id: 1, value: "ukraine", label: "Ukraine" },
      { id: 2, value: "italy", label: "Italy" },
      { id: 3, value: "georgia", label: "Georgia" },
      { id: 4, value: "mexican ", label: "Mexican" },
      { id: 5, value: "eastern", label: "Eastern" },
    ],
    [
      { id: 1, value: "main dishes", label: "main dishes" },
      { id: 2, value: "salads", label: "salads" },
      { id: 3, value: "desserts", label: "desserts" },
      { id: 4, value: "drinks", label: "drinks " },
    ],
  ],
  imgFileFormatArray: ["image/png", "image/jpg", "image/jpeg"],
  tableLabels: {
    select: [
      { label: "Location", name: "location" },
      { label: "Quantity of sits", name: "sitsQuantitys" },
    ],
    textInput: { label: "Search", name: "searchItem" },
  },
  dishesLabels: {
    select: [
      { label: "Country", name: "country" },
      { label: "Type", name: "type" },
    ],
    textInput: { label: "Search", name: "searchItem" },
  },
};

export default appData;
