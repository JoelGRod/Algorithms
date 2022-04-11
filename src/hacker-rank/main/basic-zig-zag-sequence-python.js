/**
 * Zig Zag Sequence
 * In this challenge, the task is to debug the existing code
 * to successfully execute all provided test files.
 *
 * Given an array of n distinct integers, transform the array
 * into a zig zag sequence by permuting the array elements.
 * A sequence will be called a zig zag sequence if the first k
 * elements in the sequence are in increasing order and the last k
 * elements are in decreasing order, where k=(n+1)/2. You need to find
 * the lexicographically smallest zig zag sequence of the given array.
 *
 * Example.
 * a = [2,3,5,1,4]
 *
 * Now if we permute the array as [1,4,5,3,2], the result is
 * a zig zag sequence.
 * Debug the given function findZigZagSequence to return the
 * appropriate zig zag sequence for the given input array.
 */

// PYTHON 3
//  void findZigZagSequence(vector < int > a, int n){
//   sort(a.begin(), a.end());
//   int mid = (n + 1)/2;
//   swap(a[mid], a[n-1]);

//   int st = mid + 1;
//   int ed = n - 1;
//   while(st <= ed){
//       swap(a[st], a[ed]);
//       st = st + 1;
//       ed = ed + 1;
//   }
//   for(int i = 0; i < n; i++){
//       if(i > 0) cout << " ";
//       cout << a[i];
//   }
//   cout << endl;
// }
