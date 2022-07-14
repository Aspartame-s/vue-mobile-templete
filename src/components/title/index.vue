<template>
    <div class="title">
        <div class="back"> < </div>
        {{title}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: 'titleBar',
components: {},
// props: {
    
// },
data() {
return {

};
},
computed: {
    ...mapState(['title'])
},
watch: {},
methods: {

},
created() {
    console.log(this.$route)
},
mounted() {

},
}
</script>
<style lang='scss' scoped>
.title {
    width: 100%;
    height: 1rem;
    @include center;
    background-color: pink;
    .back {
        position: absolute;
        left: 0.3rem;
    }
}
</style>