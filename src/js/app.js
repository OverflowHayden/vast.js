import Vue from 'vue';
import Fast from 'project-fast';
import button from './components/button';
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
        Vue.component('fast-button', button);
        Vue.component('fast-button', button);
        Vue.component('fast-button', button);
    }
};