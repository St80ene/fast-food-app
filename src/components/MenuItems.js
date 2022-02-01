import { Breakfast, Lunch, Dinner, Dessert } from '../assets/img/index';

export const NavItems = [
  { page: 'Home', url: '/#', cName: 'navbar__navlinks__item' },
  { page: 'Menu', url: '/menu', cName: 'navbar__navlinks__item' },
  { page: 'Services', url: '/services', cName: 'navbar__navlinks__item' },
  { page: 'Products', url: '/products', cName: 'navbar__navlinks__item' },
  { page: 'Contact', url: '/contact', cName: 'navbar__navlinks__item' },
];

export const MenuItems = [
  { category: 'Breakfast', image: Breakfast },
  { category: 'Lunch', image: Lunch },
  { category: 'Dinner', image: Dinner },
  { category: 'Dessert', image: Dessert },
];
