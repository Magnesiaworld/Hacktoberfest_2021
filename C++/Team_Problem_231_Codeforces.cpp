#include <bits/stdc++.h>

using namespace std;

#define FOR(i,k,n) for ( int i=k; i<n; i++ )

mt19937 rng(chrono::steady_clock::now().time_since_epoch().count());


int main(){

    int n;
    cin>>n;
    
    int a[n][3];
    int ans=0;

    FOR(i,0,n)
    {
        int c=0;
        FOR(j,0,3)
        {
            cin>>a[i][j];
            c+=(a[i][j]==1);   // stores number of 1's
        }
        ans+=(c>=2);           // finally checks for number of 1's >= 2
    }
    cout<<ans;
}