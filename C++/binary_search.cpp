// C++ program to implement recursive Binary Search
// Author : Keshav Kumar

#include <iostream>
using namespace std;

int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) / 2;

        if (arr[mid] == x) // If the element is present at the middle
            return mid;

        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);

        // Else the element can only be present in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }

    // We reach here when element is not present in array
    return -1;
}

int main()
{
    int arr[] = {2, 3, 4, 10, 40};                       //array
    int x = 10;                                          // element to search
    int n = sizeof(arr) / sizeof(arr[0]);                // size of array
    int result = binarySearch(arr, 0, n - 1, x);        //function call
    if (result == -1)
    {
        cout << "Element is not present in array" << endl;
    }
    else
    {
        cout << "Element is present at index " << result << endl;
    }
    return 0;
}
