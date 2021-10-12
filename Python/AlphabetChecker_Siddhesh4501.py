# Taking input from user
alpha =input("Enter an alphabet to check whether it is Vowel or Consonent\n")


#Checking whether it is vowel or consonent and printing the result
if alpha.lower() in ['a','i','e','o','u']:
    print("The given alphabet is Vowel")
else:
    print("The given alphabet is Consonent")
