import Vue from 'vue';
import Fast from 'project-fast';
import base from './components/base';
import button from './components/button';
import checkbox from './components/checkbox';
import list from './components/list';
import listItem from './components/listItem';
import chip from './components/chip';
import layout from './components/layout';
import appbar from './components/appbar';
import drawer from './components/drawer';
import main from './components/main';
//
// // Declare install function executed by Vue.use()
// export function
//
// // Create module definition for Vue.use()
// const plugin = {
//     install,
// };
//
// // Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
//     GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
//     GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//     GlobalVue.use(plugin);
// }

export default {
    install(Vue) {
        // if (install.installed) return;
        // install.installed = true;
        Vue.component('fast-layout', layout);
        Vue.component('fast-button', button);
        Vue.component('fast-checkbox', checkbox);
        Vue.component('fast-list', list);
        Vue.component('fast-list-item', listItem);
        Vue.component('fast-chip', chip);
        Vue.component('fast-appbar', appbar);
        Vue.component('fast-drawer', drawer);
        Vue.component('fast-main', main);
    }
};