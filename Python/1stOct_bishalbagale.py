def isPrime(num):  #returns True if the given number is Prime
    if num == 2 or num == 3: return True
    if num % 2 == 0 or num < 2: return False
    for i in range(3, int(num**0.5) + 1, 2):
        if num % i == 0:
            return False
    return True


def specialFibonacci(num):
    a = 1
    b = 1
    series = [a, b]
    for i in range(
            num -
            2):  # num -2 because we already have 1st two elements a and b
        c = a + b
        if isPrime(c) or c % 5 == 0:
            series.append(0)
        else:
            series.append(c)
        a = b
        b = c
    print(*series)


specialFibonacci(int(input("print Fibonacci series upto : ")))
