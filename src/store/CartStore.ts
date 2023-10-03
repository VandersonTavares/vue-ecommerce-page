import { defineStore } from "pinia";

import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartCount = ref(1);
  const addedToCart = ref(0);

  function addToCart() {
    cartCount.value += 1;
  }

  function removeToCart() {
    if (cartCount.value >= 1) {
      cartCount.value -= 0;
    } else {
      alert("Items removed from your cart!");
      cartCount.value = 0;
      addedToCart.value = 0;
    }
  }

  function removeAllItensFromCart() {
    confirm("All items removed.");
    addedToCart.value = 0;
  }

  function sendToCart() {
    addedToCart.value += cartCount.value;
    cartCount.value = 0;
  }

  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    brand: "SNEAKER COMPANY",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  };

  return {
    cartCount,
    addToCart,
    removeToCart,
    sendToCart,
    addedToCart,
    removeAllItensFromCart,
    product,
  };
});
