#include <bits/stdc++.h>
using namespace std;

int Isprime(int ele){
    int x = 0;
    for (int i = 1; i <= ele; i++){
        if (ele % i == 0) x++;
    }
    if (x == 2) return 1;
    return 0;
}

int main(){
    int n;cin >> n;
    int first = 1, second = 0, sum;
    for (int i = 1; i <= n; i++){
        sum = first + second;
        first = second;
        second = sum;
        if (Isprime(sum)||(sum%5 == 0)) cout << "0 ";
        else cout << sum << " ";
    }
    return 0;
}
