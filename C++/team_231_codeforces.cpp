// https://codeforces.com/problemset/problem/231/A
// Author: Keshav Kumar

#include <iostream>
using namespace std;
int main()
{
    int n;          
    cin >> n;                   //taking input of n (no. of testcase)
    int a, b, c;                //initialized three variables
    int count = 0;              

    for (int i = 0; i < n; i++)

    {
        cin >> a >> b >> c;     //input of a,b,c
        if (a + b + c >= 2)
        {
            count++;            // if a+b+c=2 or a+b+c=3 then count increment
        }
    }
    cout << count << endl;      // printing count variable
    return 0;
}