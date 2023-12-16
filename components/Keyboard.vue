<script setup>
    const {
        handleKey,
        handleBackspace,
        enabledKeys,
    } = defineProps(['handleKey', 'handleBackspace', 'enabledKeys'])

    console.log(enabledKeys);

    const layout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "I", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M", "-"],
    ];
</script>

<template>
    <div class="my-2">
        <div v-for="(line, lineIndex) in layout" class="flex justify-center">
            <KeyboardButton v-for="key in line" v-on:click="handleKey(key)">
                {{ key }}
            </KeyboardButton>
            <KeyboardButton v-if="lineIndex === 0" v-on:click="handleBackspace">
                ←
            </KeyboardButton>
        </div>
        <div class="flex justify-center">
            <KeyboardButton v-on:click="handleKey(' ')" class="w-full max-w-xs">
            </KeyboardButton>
        </div>
    </div>
</template>
