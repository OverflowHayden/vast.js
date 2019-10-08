<template>
    <li class="list__item">
        <a :href="url" class="list__item-text">
            <slot></slot>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'fast-list-item',
        props: {
            url: String,
        }
    }
</script>