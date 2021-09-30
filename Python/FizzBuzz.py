#iterating over 1 to 50 using range 
for i in range(1,51):
    # checking if i is divisble by both 3 and 5
    if i%3==0 and i%5==0:
        print("FizzBuzz")
    #checking if i is divisible by 3
    elif i%3==0:
        #printing Fizz as i is divisible by 3
        print("Fizz")
    #checking if i is divisible by 5
    elif i%5==0:
        #printing Fizz as i is divisible by 3
        print("Buzz")
    else:
        #printing i as i is not divible by either 3 or 5 
        print(i)
