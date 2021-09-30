//Implementing FizzBuzz in C++ to print Fizz Buzz in range of 1 to 50.
//Author: Keshav Kumar

#include <iostream>
using namespace std;
int main()
{
    for (int i = 0; i <=50; i++)
    {
        if (i%3==0 && i%5==0)
        {
            cout<<"FizzBuzz"<<endl;
        }
        else if (i%5==0)
        {
            cout<<"Buzz"<<endl;
        }
        else if(i%3==0){
            cout<<"Fizz"<<endl;
        }
        else{
            cout<<i<<endl;
        }
    }
    return 0;
}