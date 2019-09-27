<template>
    <header class="app-bar">
        <button class=app-bar__nav-toggle><i class="mdi mdi-menu"></i></button>
        <span class="app-bar__title">
            <slot></slot>
        </span>
    </header>
</template>

<script>
    import '../../scss/components/appbar.scss';
    import Fast from 'project-fast';

    export default {
        name: 'fast-appbar',

        mounted() {
            Fast.Appbar();
        }
    }
</script>