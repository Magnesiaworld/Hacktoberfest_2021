#taking input of an Alphabet from the user
ch = input("Enter an Alphabet: ")
#Checking for vowels
if(ch=='A' or ch=='a' or ch=='E' or ch =='e' or ch=='I'or ch=='i' or ch=='O' or ch=='o' or ch=='U' or ch=='u'):
  #printing Alphabet is a Vowel
  print(ch, "is a Vowel")
#else it is a Consonant
else:
  #printing Alphabet is a Consonant
  print(ch, "is a Consonant")
