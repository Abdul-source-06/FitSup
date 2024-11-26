<template>
    <div class="min-h-screen flex items-center justify-center" :style="{ backgroundColor: '#C02121' }">
        <div class="w-full max-w-md p-6 bg-gray-900 rounded-md shadow-lg">
            <RegisterForm />
        </div>
    </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';

export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>