'''
Binary Search
Input:
6
5 6 7 8 9 10
3

Output:Key is not present
'''


#code
n=int(input())
A=list(map(int,input().split()))
key=int(input())
low = 0
high = len(A)-1
while low<=high:
    mid = (low + high)//2
    if A[mid] == key:
        print("1")
        break
    else:
        if key < A[mid]:
            high = mid-1
        else:
            low = mid+1
if A[mid]!=key :
    print("Key is not present")