<template>
    <div class="hello">
        <main>
            <art :controls="true"></art>
        </main>
    </div>
</template>

<script>
    import Art from './tags/Art.vue';

    export default {
        name: 'Page',
        components: { Art },
        data () {
            return {

            }
        }
    }
</script>
