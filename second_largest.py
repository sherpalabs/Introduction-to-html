
# Given a list of positive numbers find the second largest number 
#list
a = [30, 13, 12, 20, 30, 15]

largest = secondlargest  = -1

for i in a:
    if i > largest:
        secondlargest = largest
        largest = i
    elif (i>secondlargest and i < largest):
        secondlargest = i

print(secondlargest)