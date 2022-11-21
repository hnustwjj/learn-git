/**
 输入：[1, 2, 3, [4, 5, 6, [7, 8, []], 9], {key1:10,key2:11}]
 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9
 */

function isObj(raw) {
  return raw !== null && typeof raw === "object";
}

function flat(arr, cache = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      cache.push(...flat(arr[i]));
    } else if (isObj(arr[i])) {
      const keys = Object.keys(arr[i]);
      keys.forEach(key => cache.push(arr[i][key]));
    } else {
      cache.push(arr[i]);
    }
  }
  return cache;
}

console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, []], 9], {key1:10,key2:11}]));
