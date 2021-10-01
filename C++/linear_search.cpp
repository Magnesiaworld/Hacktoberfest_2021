// Program to Linear Search in C++
//Author Prateek Saini

#include <iostream>
using namespace std;

int search(int arr[], int size, int x)
{
	for (int i = 0; i < size; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// main function code
int main(void)
{
	int size;
	cout<<"Enter size of array";
	cin>>size;
	cout<<"Enter array elements";
	for(int i=0;i<size;i++)
		cin>>arr[i];
	int x = 110;
	

	// Function call
	int result = search(arr, size, x);
	(result == -1)
		? cout << "Element x is not present "
		: cout << "Element x is present at index " << result;
	return 0;
}
