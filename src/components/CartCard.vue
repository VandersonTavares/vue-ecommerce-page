<template>
    <v-card v-if="cartStore.addedToCart" flat>
        <v-card-text class="d-flex align-center">
            <v-img :src="img1" width="43" class="rounded" />
            <div class="ml-2 d-flex flex-wrap">
                <span class="custom-font">Fall Limited Edition Sneakers</span>
                <span class="">${{ productValue }} x {{ cartStore.addedToCart }} <span class="font-weight-bold">${{
                    totalValues.toFixed(2) }}</span> </span>
            </div>
            <v-btn flat icon="mdi-delete" size="small" @click="cartStore.removeAllItensFromCart"></v-btn>
        </v-card-text>
        <v-card-actions>
            <v-btn block variant="elevated" class="text-none px-8 mb-2" color="orange-darken-2">Checkout</v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else height="100">
        <v-card-text class="d-flex align-center justify-center mt-4">
            <v-card-subtitle>Your Cart Empty</v-card-subtitle>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import img1 from '../assets/images/image-product-1-thumbnail.jpg'

import { useCartStore } from '@/store/CartStore';
const cartStore = useCartStore();

const productValue = 125.00
const totalValues = cartStore.addedToCart * productValue




</script>

<style>
.custom-font {
    font-size: 12px;
}
</style>   