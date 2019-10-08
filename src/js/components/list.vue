<template>
    <ul class="list" :class="typeClass">
        <slot></slot>
    </ul>
</template>

<script>
    import '../../scss/components/list.scss';

    export default {
        name: 'fast-list',
        props: ['type'],

        computed: {
            typeClass() {
                if (typeof this.type === 'string') {
                    return 'list--' + this.type;
                }

                if (typeof this.type === 'object') {
                    return Object.entries(this.type)
                        .filter(type => type[1])
                        .map(type => 'list--' + type[0])
                        .join(' ');
                }

                return this.type;
            },
        }
    }
</script>