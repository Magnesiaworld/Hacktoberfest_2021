#include<iostream>
using namespace std;
int linearSearch(int arr[], int n, int key){
    // go over each element
    for (int i = 0; i < n; i++){
        if (arr[i] == key){
          // if found, return index
            return i;
        }
    }
  // if not found, return -1
    return -1;
}
int main(){
    int n; 
    // taking input of array elements
    cout << "Enter size of array";
    cin>>n;
    cout << "Enter the array elements";
    int arr[n];
    for (int i = 0; i < n; i++){
        cin>>arr[i];
    }
    int key;
    // taking input for search element
    cout << "Enter the search element";
    cin>>key;
    cout<<linearSearch(arr, n, key)<<endl;
    return 0;
}
