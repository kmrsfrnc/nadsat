<template>
    <div class="flex flex-col items-stretch h-screen">
        <div>
            <div class="max-w-2xl mx-auto">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="flex-1 overflow-auto">
            <div class="max-w-2xl mx-auto">
                <slot></slot>
            </div>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>