print(bool(2))
print(2**3)

n = 0
while n < 5:
  print(str(n) + " while loop")
  n += 1

for n in range(5):
  print(str(n) + " for loop")

for n in range(5, 9):
  print(str(n) + " for loop with 2 params")

for n in range(5, 9, 2):
  print(str(n) + " for loop with 3 params")

# usersInput = input("type something")
# print(usersInput)

tar = "tar"

for char in tar:
  print(char, "char")

s = 'azcbobobegghakl'

length = len(s)
bob_count = 0

for n in range(length):
  if (n + 2) >= length:
    break
  if ((s[n]+s[n+1]+s[n+2]) == 'bob'):
    bob_count += 1

print('bob_count ' + str(bob_count))

def is_even (num):
  """
  Returns 
  """
  return num % 2 == 0

print(is_even(2))

def square(x):
    '''
    x: int or float.
    '''
    return x**2
    # Your code here

print(square(3))

def recursive_discount(num, discount, counter=0):
  if num == 0:
    return counter
  if num > 0:
    counter += 1
    num-discount
    return recursive_discount(num - discount, discount, counter)

result = recursive_discount(312, 2)
print(result)

def factorial(num):
  if num == 1:
    return 1
  else:
    return num * factorial(num - 1)

print(factorial(5))

def iterPower(base, exp):
  if exp==0:
    return 1
  else:
    return base*iterPower(base, exp-1)

print(iterPower(4, 3))

animals = { 'a': ['aardvark'], 'b': ['baboon'], 'c': ['coati']}

animals['d'] = ['donkey']
animals['d'].append('dog')
animals['d'].append('dingo')


def how_many(aDict):
  '''
  aDict: A dictionary, where all the values are lists.

  returns: int, how many values are in the dictionary.
  '''
  # Your Code Here
  longest_array_key = None
  for key in aDict.keys():
    if longest_array_key is None:
      longest_array_key = key
    if aDict[longest_array_key] < aDict[key]:
      longest_array_key = key
  return longest_array_key

print(how_many(animals))

secretWord = 'apple' 
lettersGuessed = ['e', 'i', 'k', 'p', 'r', 's']

def isWordGuessed(secretWord, lettersGuessed):
  '''
  secretWord: string, the word the user is guessing
  lettersGuessed: list, what letters have been guessed so far
  returns: boolean, True if all the letters of secretWord are in lettersGuessed;
    False otherwise
  '''
  # FILL IN YOUR CODE HERE...
  result = ''
  for letter in secretWord:
    if letter in lettersGuessed: 
      result = result + letter
    else:
      result = result + '_'
  return result


print(isWordGuessed(secretWord, lettersGuessed))

def integerDivision(x, a):
  """
  x: a non-negative integer argument
  a: a positive integer argument

  returns: integer, the integer division of x divided by a.
  """
  count = 0
  while x >= a:
      count += 1
      x = x - a
  return count

print(integerDivision(5, 3))

tariel = 1

assert tariel > 1, 'tariel must be more than 1'