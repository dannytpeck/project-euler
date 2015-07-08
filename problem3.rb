def is_prime?(number)
	if number == 2
		return true
	end
	for i in 2..number
		if number % i == 0
			return false
		end
	end
	true
end

def largest_factor(number)
	highest = 1
	for i in 2..number
		if number % i == 0
			highest = i
		end
	end
	highest
end

def all_factors(number)
	factors = []
	for i in 3..number
		if number % i == 0
			factors << i
		end
	end
	factors
end

factors = all_factors(600851475143)
largest_prime_factor = 0

for index in 0..factors.length
	if is_prime?(factors[index])
		largest_prime_factor = factors[index]
	end
end

puts largest_prime_factor