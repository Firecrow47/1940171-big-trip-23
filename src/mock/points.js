import { nanoid } from 'nanoid';

export const points = [
  {
    id: nanoid(),
    basePrice: 1100,
    dateFrom: '2025-07-09T12:55:56.845Z',
    dateTo: '2025-07-11T13:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['1', '2', '3', '4'],
    type: 'taxi',
  },
  {
    id: nanoid(),
    basePrice: 500,
    dateFrom: '2019-07-10T10:55:56.845Z',
    dateTo: '2019-07-11T11:11:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    isFavorite: true,
    offers: ['1', '2', '3'],
    type: 'train',
  },
  {
    id: nanoid(),
    basePrice: 2000,
    dateFrom: '2019-07-10T16:55:56.845Z',
    dateTo: '2019-07-11T13:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    isFavorite: true,
    offers: [],
    type: 'flight',
  },
];
