<template>
    <aside class="drawer drawer--temporary">
        <div class="drawer__drawer">
            <header class="drawer__header">
                <span class="drawer__header-text">Drawer header</span>
            </header>
            <nav class="drawer__content">
                <slot></slot>
            </nav>
        </div>
    </aside>
</template>

<script>
    import '../../scss/components/drawer.scss';
    import Fast from 'project-fast';

    export default {
        name: 'fast-drawer',

        mounted() {
            Fast.Drawer();
        }
    }
</script>