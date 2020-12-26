import {when} from 'mobx';
import {RootStore} from './store';

const fakeFetch = () => Promise.resolve(JSON.parse(fs.readFileSync('./public/books.json')));

it('bookstore sorts data', (done) => {
  const store = RootStore.create({
    objects: [
      {
        name: 'book',
        price: 4.35,
        date: '2020-04-23',
        description: 'Lucene in Action, Second Edition',
      },
    ],
    currentIndex: 0,
    nextIndex: 0,
    showModal: false,
    isLoading: false,
  });
  when(
    () => store.isLoading === false,
    () => {
      expect(store.objects.map((book) => book.name)).toEqual([
        {
          name: 'book',
          price: 4.35,
          date: '2020-04-23',
          description: 'Lucene in Action, Second Edition',
        },
      ]);
      done();
    },
  );
});
