export interface Dog {
  id: string;
  name: string;
  age: string;
  imageUrl: string;
  dDay: string;
  status: 'WAITING' | 'PROTECTION' | 'COMPLETED';
}

export const dogs: Dog[] = [
  {
    id: '12fadfd1',
    name: '다로나',
    age: '4세',
    imageUrl: 'https://images.dog.ceo/breeds/samoyed/n02111889_4470.jpg',
    dDay: '235',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd2',
    name: '몽실이',
    age: '2세',
    imageUrl: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3073.jpg',
    dDay: '124',
    status: 'WAITING'
  },
  {
    id: '12fadfd3',
    name: '해피',
    age: '3세',
    imageUrl: 'https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg',
    dDay: '113',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd4',
    name: '루시',
    age: '1세',
    imageUrl: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1030.jpg',
    dDay: '98',
    status: 'WAITING'
  },
  {
    id: '12fadfd5',
    name: '초코',
    age: '5세',
    imageUrl: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1830.jpg',
    dDay: '235',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd6',
    name: '보리',
    age: '2세',
    imageUrl: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg',
    dDay: '167',
    status: 'WAITING'
  },
  {
    id: '12fadfd7',
    name: '콩이',
    age: '3세',
    imageUrl: 'https://images.dog.ceo/breeds/shiba/shiba-8.jpg',
    dDay: '145',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd8',
    name: '마루',
    age: '4세',
    imageUrl: 'https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg',
    dDay: '134',
    status: 'WAITING'
  },
  {
    id: '12fadfd9',
    name: '두부',
    age: '1세',
    imageUrl: 'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
    dDay: '89',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd10',
    name: '감자',
    age: '2세',
    imageUrl: 'https://images.dog.ceo/breeds/chow/n02112137_1005.jpg',
    dDay: '78',
    status: 'WAITING'
  },
  {
    id: '12fadfd11',
    name: '호두',
    age: '3세',
    imageUrl: 'https://images.dog.ceo/breeds/samoyed/n02111889_3476.jpg',
    dDay: '56',
    status: 'PROTECTION'
  },
  {
    id: '12fadfd12',
    name: '까망이',
    age: '4세',
    imageUrl: 'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
    dDay: '45',
    status: 'WAITING'
  }
]; 