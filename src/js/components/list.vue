<template>
    <ul class="list">
        <slot></slot>
    </ul>
</template>

<script>
    import '../../scss/components/list.scss';

    export default {
        name: 'fast-list',
        props: {

        }
    }
</script>