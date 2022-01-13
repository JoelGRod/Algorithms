/**
 * Website pagination
 */

/*
 * Complete the 'fetchItemsToDisplay' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY items
 *  2. INTEGER sortParameter
 *  3. INTEGER sortOrder
 *  4. INTEGER itemsPerPage
 *  5. INTEGER pageNumber
 */

function fetchItemsToDisplay(
  items,
  sortParameter,
  sortOrder,
  itemsPerPage,
  pageNumber
) {
  // Write your code here
  const ascending = (a, b) => {
    if (typeof a[sortParameter] === "string") {
      if (b[sortParameter] > a[sortParameter]) return -1;
      return 1;
    }
    return a[sortParameter] - b[sortParameter];
  };
  const descending = (a, b) => {
    if (typeof a[sortParameter] === "string") {
      if (a[sortParameter] > b[sortParameter]) return -1;
      return 1;
    }
    return b[sortParameter] - a[sortParameter];
  };

  const sortedItems =
    sortOrder === 0 ? items.sort(ascending) : items.sort(descending);

  const paginatedItems = sortedItems.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );
  return paginatedItems.map((item) => item[0]);
}
