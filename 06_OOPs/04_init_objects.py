class chaiOrder:
    
    def __init__(self, type_, size):
        self.type = type_
        self.size = size

    def summary(self):
        return f"You have ordered a {self.size}ml {self.type} chai."
    

order1 = chaiOrder("Masala", 200)
print(order1.summary())