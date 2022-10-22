import React from "react";
import { useFetcher } from "react-router-dom";

const Binary = () => {
  //   let arr = [
  //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  //     40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  //     59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  //     78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  //     97, 98, 99,
  //   ];
  //   //   console.time();
  //   //   let filter = arr.filter((val) => val === 80);
  //   //   let filter = arr
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 80) {
  //       console.log(arr[i]);
  //       console.timeEnd();
  //     }
  //   }
  //   console.time();
  //   const binaryFilter = (arr, target) => {
  //     let low = 0;
  //     let high = arr.length;
  //     let mid;
  //     while (low <= high) {
  //       mid = Math.floor((low + high) / 2);
  //       if (arr[mid] === target) {
  //         return arr[mid];
  //       } else if (arr[mid] < target) {
  //         low = mid + 1;
  //       } else {
  //         low = mid - 1;
  //       }
  //     }
  //     return -1;
  //   };
  //   console.log(binaryFilter(arr, 80));
  //   console.timeEnd();

  const showFun = (number) => {
    for (let i = 0; i < number; i++) {
      if (loop(i)) continue;
      console.log(i);
    }
  };
  const loop = (i) => {
    for (let n = 0; n < i; n++) {
      if (i % n == 0) return false;
    }
    return true;
  };

  console.log(showFun(20));

  return <div>Binary</div>;
};

export default Binary;
