<template>
    <form @submit.prevent="logIn">
        <label>
            Username
            <input type="text" v-model="email"/>
        </label>
        <label>
            Password
            <input type="password" v-model="password"/>
        </label>
        <button class="btn btn-primary">login</button>
    </form>
    <button @click="reset">Reset password</button>
</template>

<script setup>
const email = ref('');
const password = ref('');
const isSignUp = ref(false);
const client =useSupabaseClient()

const signUp = async () => {
    const {user, error} = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', user.value);
    console.log('error', error);
}

const logIn = async () => {
    const {user, error} = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    console.log('user', user);
    console.log('error', error);
    navigateTo('/sip')
}

const user = useSupabaseUser();
onMounted(()=> {
    const t0 = performance.now();
    console.log(user.value);
    watchEffect(()=> {
        if(user.value) {
            const t1 = performance.now();
            console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
            // navigateTo('/sip')
        }
    })
})

const reset = async () => {
    const { data, error } = await client.auth.resetPasswordForEmail(email.value, {
        redirectTo: '/login',
    })
    console.log('error', error);
    console.log('data', data);
}

</script>