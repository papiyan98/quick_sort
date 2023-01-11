function quickSort(array) {
  const partition = function(array, m, n) {
    let i = m;
    
    // Choosing the rightmost element in subarray as the pivot: array[n]
    for (let j = m; j < n; j++) {
      // Rearranging all elements that are less or equal to the pivot
      // at the left side of subarray
      if (array[j] <= array[n]) {
        [array[j], array[i]] = [array[i], array[j]];
        i++;
      }
    }
    
    // Swaping pivot element to a right side of rearranged elements
    [array[n], array[i]] = [array[i], array[n]];

    // Elements that are greater than the pivot are to its right
  
    return i; // return index of pivot element
  };
  
  
  const sorting = function(array, m, n) {
    if (m < n) {
      let index = partition(array, m, n); // index of pivot element

      // Recursively sorting the subarrays
      if (m < index - 1) {
        // all elements to the left of the pivot
        sorting(array, m, index - 1);
      }
        
      if (n > index) {
        // all elements to the right of the pivot
        sorting(array, index + 1, n);
      }
    }
  };

  return sorting(array, 0, array.length - 1);
}