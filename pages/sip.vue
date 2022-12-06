<template>
    <div class="flex flex-col mt-2 items-center w-full h-full">
        <h1 class="font-heading text-3xl font-bold">SIP Calculator</h1>
       <div v-if="user">
        <SIP />
        <LogOut />
        <!-- <button class="btn btn-primary" @click="refresh">refresh</button> -->
       </div>
       <div v-else><button class="btn btn-primary" @click="logIn">Log in</button></div>
    </div>
</template>

<script setup lang="ts">

// const client =useSupabaseClient();
const user = useSupabaseUser();
// // const cookie = useCookie('sb-access-token')
// // console.log('cookie', cookie.value)
// console.log(user.value);
function logIn(){
    navigateTo('/login')
}

// async function signOut() {
//     if(user) {
//         const { error } = await client.auth.signOut();
//         console.log('error', error)
//         cookie.value=null;
//         window.location.reload();
        
//     }
//     if(!user) navigateTo('login')
// }

// async function refresh() {
//     const { data, error } = await client.auth.getSession();
//     console.log('data', data);
//     console.log('error', error)
    
// }
</script>