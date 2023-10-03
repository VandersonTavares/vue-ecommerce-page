<template>
  <nav>
    <v-app-bar app elevation="2">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <h1>Sneakers</h1>
          </v-col>
          <v-col cols="auto">
            <v-toolbar color="transparent">
              <v-toolbar-items>
                <v-btn class="text-none custom-padding">Collections</v-btn>
                <v-btn class="text-none custom-padding">Men</v-btn>
                <v-btn class="text-none custom-padding active">Women</v-btn>
                <v-btn class="text-none custom-padding">About</v-btn>
                <v-btn class="text-none custom-padding">Contact</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2">
            <v-badge
              v-if="cartStore.addedToCart >= 1"
              :content="cartStore.addedToCart"
              color="warning"
            >
              <v-icon>mdi-cart</v-icon>
            </v-badge>
            <v-icon v-else>mdi-cart</v-icon>
            <v-menu open-on-hover activator="parent">
              <v-card title="Cart" width="300">
                <v-divider></v-divider>
                <CartCard />
              </v-card>
            </v-menu>
          </v-btn>
          <v-btn icon>
            <v-avatar :image="imgUrl"></v-avatar>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script setup lang="ts">
import imgUrl from "@/assets/images/image-avatar.png";

import { useCartStore } from "@/store/CartStore";
const cartStore = useCartStore();

import CartCard from "./CartCard.vue";
</script>

<style scoped>
.custom-padding {
  padding-bottom: 2px;
}

.active {
  border-bottom: 3px solid orange;
  padding-bottom: 0px;
}
</style>
