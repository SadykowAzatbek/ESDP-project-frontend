import { UserNav } from '../types/types';

export const apiURL = 'http://localhost:8000';

export const serverRoute = {
  users: '/users',
  sessions: '/users/sessions',
  pups: '/pups',
};

export const appRoutes = {
  notFound: '*',
  home: '/',
  register: '/register',
  login: '/login',
  profile: '/profile',
  tracking: '/profile/tracking',
  orders: '/profile/orders',
  address: '/profile/address',
  history: '/profile/history',
  profileAdmin: '/admin-profile',
  statistics: '/admin-profile/statistics',
  pups: '/admin-profile/pups',
  staff: '/admin-profile/staff',
};

export const userLinks: UserNav[] = [
  {
    id: 1,
    name: 'Трекинг по номеру',
    navLink: appRoutes.tracking,
  },
  {
    id: 2,
    name: 'Мои заказы',
    navLink: appRoutes.orders,
  },
  {
    id: 3,
    name: 'Адреса складов',
    navLink: appRoutes.address,
  },
  {
    id: 4,
    name: 'История заказов',
    navLink: appRoutes.history,
  },
];

export const adminLinks: UserNav[] = [
  {
    id: 1,
    name: 'Статистика',
    navLink: appRoutes.statistics,
  },
  {
    id: 2,
    name: 'Склады',
    navLink: appRoutes.pups,
  },
  {
    id: 3,
    name: 'Сотрудники',
    navLink: appRoutes.staff,
  },
];

export const regions = [
  {
    id: 1,
    name: 'Чуй',
  },
  {
    id: 2,
    name: 'Иссык-Куль',
  },
  {
    id: 3,
    name: 'Ош',
  },
  {
    id: 4,
    name: 'Талас',
  },
  {
    id: 5,
    name: 'Баткен',
  },
  {
    id: 6,
    name: 'Нарын',
  },
  {
    id: 7,
    name: 'Джалал-Абад',
  },
];
