// Program to Linear Search in C++
//Author Prateek Saini

#include <iostream>
using namespace std;

int search(int arr[], int n, int x)
{
	for (int i = 0; i < n; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// main function code
int main(void)
{
	int arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};
	int x = 110;
	int n = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, n, x);
	(result == -1)
		? cout << "Element x is not present "
		: cout << "Element x is present at index " << result;
	return 0;
}
