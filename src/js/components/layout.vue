<template>
    <div>
        <fast-drawer :header-text="drawerHeaderText">
            <slot name="drawer"></slot>
        </fast-drawer>
        <fast-appbar>
            <slot name="appbar"></slot>
        </fast-appbar>
        <fast-main>
            <slot name="main"></slot>
        </fast-main>
    </div>
</template>

<script>
    import FastDrawer from './drawer';
    import FastAppbar from './appbar';

    export default {
        name: 'fast-layout',
        props: {
            drawerHeaderText: String,
        },
        components: {FastAppbar, FastDrawer},
    }
</script>