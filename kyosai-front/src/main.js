// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/style.css");

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2'
  })

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
