<template>
    <div class="hello">
        <main>
            <art></art>
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

<style type="text/css" src="@/assets/common.css"></style>