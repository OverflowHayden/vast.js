<template>
    <div class="pagination">
        <a href="#" class="pagination-list__nav pagination-list__nav--disabled">Previous</a>
        <ul class="pagination-list">
            <li class="pagination-list__item pagination-list__item--active"><a href="#">1</a></li>
            <li class="pagination-list__item"><a href="#">2</a></li>
            <li class="pagination-list__item"><a href="#">3</a></li>
            <li class="pagination-list__item"><a href="#">4</a></li>
            <li class="pagination-list__item"><a href="#">5</a></li>
        </ul>
        <a href="#" class="pagination-list__nav">Next</a>
    </div>
</template>

<script>
    export default {
        name: 'fast-pagination',
        props: {
            prev: {
                disabled: Boolean,
                url: String,
                text: String,
            },
            next: {
                disabled: Boolean,
                url: String,
                text: String,
            },
        },
    }
</script>