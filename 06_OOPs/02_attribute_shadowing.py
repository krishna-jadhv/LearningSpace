class Chai:
    temperature = "Hot"
    strength = "Strong"

cutting = Chai()
print(cutting.temperature)  # Output: Hot

cutting.temperature = "Cold"
print("Temperature before change : ",cutting.temperature)  # Output: Cold
print("Temperature from class : ",Chai.temperature)  # Output: Hot


