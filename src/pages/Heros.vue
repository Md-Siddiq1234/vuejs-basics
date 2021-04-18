<template>
    <div>
        This is heros
    </div>
    <input type="text" v-model="text">
</template>

<script>
    export default {
        data(){
            return{
                text:'Siddiq'
            }
        },
        methods:{
            update(){
                this.text = 'rifat'
            }
        },
        beforeCreate(){
            console.log('before create')
        },
        created(){
            console.log('created')
        },
        beforeMount(){
            console.log('before mounted')
        },
       mounted(){
            console.log('mounted')
        },
        beforeUpdate(){
            console.log('beforeupdated')
        },
        updated(){
            console.log('updated')
        },
       beforeUnmount(){
            console.log('beforeUnmount')
        },
       unmounted(){
            console.log('unmounted')
        },
    }
</script>

<style scoped>

</style>