class chaicup:
    size = 250
    def describe(self):
        return f"A {self.size}ml chai cup"
    
cup = chaicup()
print(cup.describe())  # Output: A 250ml chai cup

cup2 = chaicup()
cup2.size = 500
print(chaicup.describe(cup2))  # Output: A 500ml chai cup