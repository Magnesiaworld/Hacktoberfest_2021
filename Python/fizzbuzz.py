# range(start, end) - end is not inclusive hence 51 to get through 0 - 50
for i in range(1, 51):
  # Check if divisible by 3 and 5
  if i % 3 == 0 and i % 5 == 0:
    print ('FizzBuzz')
  # Check if divisible by 3
  elif i % 3 == 0:
    print ('Fizz')
  # Check if divisible by 5
  elif i % 5 == 0:
    print ('Buzz')
  else:
    print (str(i))