import {types} from 'mobx-state-tree';

const categories = ['Art', 'electronics', 'jewelry', 'musical instruments'];
const InsuredObject = types
  .model({
    id: types.identifier,
    name: types.string,
    /*category: types.union(categories.map((item) => types.literal(item))),*/
    date: types.Date,
    price: types.number,
    description: types.optional(types.string, ''),
    photo: types.string,
    documents: types.array(types.string),
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
  }));

export const RootStore = types
  .model({
    objects: types.array(InsuredObject),
    currentId: types.string,
    currentItem: types.maybe(InsuredObject, {}),
    showModal: false,
    isLoading: false,
  })
  .views((self) => ({
    get currentObject() {
      return self.isLoading || !self.selectedBookId ? null : self.objects.get(self.selectedBookId);
    },
  }))
  .actions((self) => ({
    addInsuredObject(id, name) {
      self.objects.set(id, InsuredObject.create({name}));
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
