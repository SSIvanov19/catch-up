<template>
    <div class="tag-container" :class="isGrowthUp ? 'accent' : 'secondary'">
        <p>{{percentage}}%</p>
        <GrowthArrowIcon :class="isGrowthUp ? '' : 'negative'"/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import GrowthArrowIcon from '../icons/GrowthArrowIcon.vue';

const props = defineProps<{
    percentage: number,
    isGrowthUp: boolean,
}>();

</script>

<style lang="scss" scoped>
.tag-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: .5rem 1rem;
    gap: 1rem;
    border-radius: 50rem;
    width: fit-content;
    height: fit-content;
    font-family: "Hanken Grotesk";
    font-size: 17.025px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.accent {
    border: 1px solid #26FFD2;
    color: #26FFD2;
}

.secondary {
    border: 1px solid #FF000F;
    color: #FF000F;
}
</style>