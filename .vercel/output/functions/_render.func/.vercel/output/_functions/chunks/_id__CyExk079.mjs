export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_BmwICUiO.mjs').then(n => n._);

export { page };
