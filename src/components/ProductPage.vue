<template>
  <v-container>
    <v-row class="d-flex align-center mt-5">
      <v-col cols="12" sm="6" class="mt-3">
        <v-card max-width="444" class="mx-auto" rounded="xl">
          <v-carousel show-arrows="hover" hide-delimiters height="450">
            <v-carousel-item :src="product1" cover></v-carousel-item>
            <v-carousel-item :src="product2" cover></v-carousel-item>
            <v-carousel-item :src="product3" cover></v-carousel-item>
            <v-carousel-item :src="product4" cover></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="0" width="395px">
          <v-card-subtitle>
            <span class="text-orange-darken-3 font-weight-bold">{{
              cartStore.product.brand
            }}</span>
          </v-card-subtitle>
          <v-card-title>{{ cartStore.product.name }}</v-card-title>
          <v-card-text>
            {{ cartStore.product.description }}
          </v-card-text>

          <v-card-item>
            <v-card-title>
              <span class="mr-4 text-h5 font-weight-bold"
                >${{ cartStore.product.price.toFixed(2) }}</span
              >
              <span class="discount">50%</span>
            </v-card-title>
            <v-card-subtitle class="text-decoration-line-through"
              >$250.00</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <div class="custom-bg">
              <v-btn @click="cartStore.removeToCart"
                ><span class="custom-button">-</span></v-btn
              >
              <span class="ma-2 pl-2 pt-2 font-weight-bold">{{
                cartStore.cartCount
              }}</span>
              <v-btn @click="cartStore.addToCart"
                ><span class="custom-button">+</span></v-btn
              >
            </div>
            <v-btn
              variant="elevated"
              @click="cartStore.sendToCart"
              prepend-icon="mdi-cart"
              class="text-none px-8 ml-4"
              color="orange-darken-2"
              >Add to Cart</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import product1 from "@/assets/images/image-product-1.jpg";
import product2 from "@/assets/images/image-product-2.jpg";
import product3 from "@/assets/images/image-product-3.jpg";
import product4 from "@/assets/images/image-product-4.jpg";

import { useCartStore } from "../store/CartStore";
const cartStore = useCartStore();
</script>

<style scoped>
.discount {
  padding: 5px;
  background-color: rgba(255, 166, 0, 0.226);
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  color: #f57c00;
}
.custom-button {
  font-size: 18px;
  font-weight: bold;
  color: #f57c00;
}

.custom-bg {
  background-color: #e4e4e465;
  border-radius: 5px;
}
</style>
