<template>
    <div class="chip" :class="typeClass">
        <span v-if="icon" class="chip__icon"><i class="mdi" :class="'mdi-' + icon"></i></span>
        <span class="chip__text">
            <slot></slot>
        </span>
        <a v-if="filter" :href="filter" class="chip__filter"></a>
    </div>
</template>

<script>
    import '../../scss/components/chip.scss';

    export default {
        name: 'fast-chip',
        props: ['icon', 'filter', 'type'],

        computed: {
            typeClass() {
                if (typeof this.type === 'string') {
                    return 'chip--' + this.type;
                }

                if (typeof this.type === 'object') {
                    return Object.entries(this.type)
                        .filter(type => type[1])
                        .map(type => 'chip--' + type[0])
                        .join(' ');
                }

                return this.type;
            },
        }
    }
</script>