# Accessing base class:
# - Code Duplication
# - Explicit call
# Super() - Most used style to access base class methods 

class chai:
    def __init__(self,type_, strength):
        self.type = type_
        self.strength=strength

    
# class GingerChai(chai):
#     def __init__(self, type_, strength, spices_level):
#         self.type = type_
#         self.strength = strength
#         self.spices_level=spices_level

class GingerChai(chai):
    def __init__(self, type_, strength, spices_level):
        super().__init__(type_, strength)
        self.spices_levl = spices_level