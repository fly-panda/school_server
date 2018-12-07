<template>
<div @click="toHome">login</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        toHome(){
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style lang='less' scoped >
</style>
