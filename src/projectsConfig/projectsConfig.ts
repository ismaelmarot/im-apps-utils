import { type ProjectInterface } from '../interface/ProjectInterface';

export const allowedProjects: ProjectInterface[] = [
  {
    id: 'product-entry-app',
    title: 'Product Entry App',
    description: 'Web application built for managing product entries efficiently.',
    qrImage: `${import.meta.env.BASE_URL}assets/product-entry-app-qr.svg`,
    tech: [
      'https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB',
      'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white',
    ],
  },
  {
    id: 'products-exit-app',
    title: 'Products Exit App',
    description: 'Web application built for managing product exits efficiently.',
    qrImage: `${import.meta.env.BASE_URL}assets/products-exit-app-qr.svg`,
    tech: [
      'https://img.shields.io/badge/vite-%234BC0F0.svg?style=flat&logo=vite&logoColor=white',
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white',
    ],
  },
];
