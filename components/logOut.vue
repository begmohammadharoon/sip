<template>
    <button class="btn btn-primary" @click="signOut">SignOut</button>
</template>

<script setup lang="ts">
const client =useSupabaseClient();
const user = useSupabaseUser();
const cookie = useCookie('sb-access-token')

async function signOut() {
    if(user) {
        const { error } = await client.auth.signOut();
        console.log('error', error)
        cookie.value=null;
        window.location.reload();
        
    }
    if(!user) navigateTo('login')
}

</script>