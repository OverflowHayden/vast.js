<template>
    <button :href="href" class="button" :class="(type ? 'button--' + type : '')">
        <i v-if="icon" :class="'mdi-' + icon" class="mdi"></i>
        <slot></slot>
    </button>
</template>

<script>
    import '../../scss/components/button.scss';
    import '../../scss/components/mdi.scss';

    export default {
        name: 'fast-button',
        props: ['href', 'type', 'icon'],
    }
</script>