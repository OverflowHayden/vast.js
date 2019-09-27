<template>
    <button :href="href" class="button" :class="typeClass">
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

        computed: {
            typeClass() {
                if (typeof this.type === 'string') {
                    return 'button--' + this.type;
                }

                if (typeof this.type === 'object') {
                    return Object.entries(this.type)
                        .filter(type => type[1])
                        .map(type => 'button--' + type[0])
                        .join(' ');
                }

                return this.type;
            },
        }
    }
</script>