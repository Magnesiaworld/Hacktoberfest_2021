// C++ program to print largest contiguous array sum using Kadane's Algorithm
#include<iostream>
#include<climits>
using namespace std;

int maxSubArraySum(int a[], int size)
{
	int maxsum = INT_MIN, maxcurrent = 0;

	for (int i = 0; i < size; i++)
	{
		maxcurrent = maxcurrent + a[i];
		if (maxsum < maxcurrent)
			maxsum = maxcurrent;

		if (maxcurrent < 0)
			maxcurrent = 0;
	}
	return maxsum;
}

/*Driver program to test maxSubArraySum*/
int main()
{
	int a[] = {-2, -3, 4, -1, -2, 1, 5, -3};
	int n = sizeof(a)/sizeof(a[0]);
	int max_sum = maxSubArraySum(a, n);
	cout << "Maximum contiguous sum is " << max_sum;
	return 0;
}
