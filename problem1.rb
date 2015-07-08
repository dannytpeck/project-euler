def isMult3(number)
	number % 3 == 0
end

def isMult5(number)
	number % 5 == 0
end

sum = 0
limit = 1000

for i in 0..limit-1
	sum += i if ( isMult3(i) || isMult5(i) )
end

print sum