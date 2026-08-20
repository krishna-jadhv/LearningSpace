class BaseChai:
    def __init__(self, type_):
        self.type = type_

    def prepare(self):
        print(f"Preparing {self.type} chai.")

class MasalaChai(BaseChai):
    def add_spices(self):
        print(f"Adding {self.type} spices to the chai.")


class Chaishop:
    chai_cls = BaseChai

    def __init__(self):
        self.chai = self.chai_cls("regular")

    def serve_chai(self):
        print(f"serving {self.chai.type} chai in the shop.")
        self.chai.prepare()

class fancyChaishop(Chaishop):
    chai_cls = MasalaChai

shop = Chaishop()
fancy = fancyChaishop()
shop.serve_chai()
fancy.serve_chai()
fancy.chai.add_spices()


# ****************************************************************************************************************

