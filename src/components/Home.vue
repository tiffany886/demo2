<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonHome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    },
};
</script>

<style lang="scss" scoped>

</style>