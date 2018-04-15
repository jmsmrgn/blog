const reptarExcerpt = require('reptar-excerpt');
const reptarHtmlMinifier = require('reptar-html-minifier');

module.exports = {
  site: {
    title: 'James Morgan',
    author: 'James Morgan',
    email: 'james@jamesmorgan.io',
    description: 'Personal site of James Morgan (jmsmrgn).',
    url: 'https://jamesmorgan.io/',
    // gravatar_url: 'http://www.gravatar.com/avatar/f863e9eb811851834773398e72614dc1?d=404',
    disqus_url: 'jamesmorgan.io',
  },
  path: {
    source: './',
    destination: './_build',
    templates: './_templates',
  },
  file: {
    defaults: [
      {
        scope: { path: './' },
        values: { template: 'page', permalink: '/:title/' },
      },
      {
        scope: { path: './_posts' },
        values: { template: 'post', permalink: '/blog/:slug/' },
      },
    ],
    filters: { metadata: { draft: true }, futureDate: { key: 'date' } },
  },
  collections: {
    post: {
      path: './_posts',
      template: 'index',
      pageSize: 6,
      sort: { key: 'date', order: 'descending' },
      permalink: { index: '/', page: '/blog/page/:page/' },
    },
    tag: {
      metadata: 'tags',
      template: 'tag',
      pageSize: 6,
      sort: { key: 'date', order: 'descending' },
      permalink: {
        index: '/blog/tag/:metadata/',
        page: '/blog/tag/:metadata/:page/',
      },
    },
  },
  cleanDestination: false,
  incremental: false,
  slug: { lower: true },
  markdown: {
    extensions: ['markdown', 'mkdown', 'mkdn', 'mkd', 'md'],
    options: { preset: 'commonmark', highlight: 'prism' },
  },
  server: { port: 7777, host: '127.0.0.1', baseurl: '' },
  newFilePermalink: '/_posts/:date|YYYY/:date|YYYY-:date|MM-:date|D-:title.md',
  middlewares: [
    require('./_middleware/template-filters'),
    require('./_middleware/read-time'),
    reptarExcerpt(),
  ],
  lifecycle: {
    didBuild: reptarHtmlMinifier,
  }
};
