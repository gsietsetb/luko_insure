import {types} from 'mobx-state-tree';

export const categories = ['Art', 'Electronics', 'Jewelry', 'Musical instruments'];
export const InsuredObject = types
  .model({
    id: types.number,
    name: types.optional(types.string, 'Empty'),
    category: types.string, //types.union(categories.map((item) => types.literal(item))),
    date: types.optional(types.string, '2020-12-23'), //types.optional(types.Date, new Date()),
    price: types.optional(types.number, 0.0),
    description: types.optional(types.string, ''),
    photo: types.optional(types.string, 'https://mobx-state-tree.js.org/img/favicon.ico'),
    /*documents: types.optional(types.array(types.string, []))*/
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
  }));

export const RootStore = types
  .model({
    objects: types.array(InsuredObject),
    currentIndex: types.number,
    showModal: false,
    isLoading: false,
    nextIndex: types.number,
  })
  .views((self) => ({
    get currentObject() {
      return self.isLoading ? null : self.objects[self.currentIndex];
    },
  }))
  .actions((self) => ({
    addInsuredObject(name, photo, price, date, description, category) {
      self.objects[self.nextIndex] = InsuredObject.create({
        name,
        photo,
        price,
        date: date,
        description,
        category,
        id: self.nextIndex,
      });
      self.nextIndex = self.nextIndex + 1;
    },
    /**Modal related actions*/
    toggleModal() {
      self.showModal = !self.showModal;
    },
    openModal() {
      self.showModal = true;
    },
    closeModal() {
      self.showModal = false;
    },
  }));
