#include<iostream>
using namespace std;

int main()
{
    int DATA[1000], n, item, loc, i;
    cout<<"This program searches an element in an array using linear search method:\n";
    cout<<"Enter the number of elements you want to enter in the array: \n";
    cin>>n;
    cout<<"You need to insert the elements one by one\n";
    for(i=0;i<n;i++)
    {
        cout<<"Enter element: ";
        cin>>DATA[i];
    }
    cout<<"Our inserted array is:";
    for(i=0;i<n;i++)
    {
        cout<<DATA[i]<<"  ";
    }
    cout<<endl;
    cout<<"Enter the element you want to search in the array: \n";
    cin>>item;
    loc=0;
    for(i=0;i<n;i++)
    {
        if (DATA[i]==item)
        {
            cout<<"Element found at index "<<i<<endl;
        }
        else
        {
            loc=loc+1;
        }

        if(loc==n)
        {
            cout<<"Element not found:";
        }
        
    }
}
