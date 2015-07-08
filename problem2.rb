def fibonacci_even_sum(max)
  first = 0
  second = 1
  sum = 0
  
  for i in 0..1000
  	if i <= 1
  		next_number = i
  	else
  		next_number = first + second
  		first = second
  		second = next_number

  		if next_number >= max
  			return sum
  		elsif next_number % 2 == 0
  			sum += next_number
  		end
  	end
  end
end
 
puts fibonacci_even_sum(4000000)