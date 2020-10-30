import css from './static/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const pages = [
  {
    path: '/',
    title: 'Design Course Style Guide',
    content: pageLoader(() => import('./WELCOME.md')),
  },
  {
    title: 'Design',
    path: '/design',
    pages: [
      {
        path: '/colors',
        title: 'Colors',
        content: pageLoader(() => import('./colors.md')),
      },
      {
        path: '/typography',
        title: 'Typography',
        content: pageLoader(() => import('./typography.md')),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById('catalog')
);
