<template>
    <div class="checkbox">
        <input :id="id" :name="name" type="checkbox" :disabled="disabled" />
        <label :for="id" class="checkbox__input"></label>
        <label :for="id" class="checkbox__label">{{ label }}</label>
    </div>
</template>

<script>
    import '../../scss/components/checkbox.scss';

    export default {
        name: 'fast-checkbox',
        props: {
            label: String,
            name: String,
            id: String,
            disabled: false,
        },
    }
</script>