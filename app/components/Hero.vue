<template>
  <div class="hero-sec before:bg-background/80 before:z-10">
    <div class="relative z-20 size-full flex items-center">
      <u-container
        class="flex flex-col-reverse lg:flex-row gap-y-10 mt-20 py-16"
      >
        <div class="max-w-2xl">
          <h1 class="text-4xl lg:text-6xl font-extrabold font-playfair mb-4">
            Professional<span class="text-primary"> Security Service</span> You
            Can Trust in Nigeria
          </h1>
          <p class="mb-8">
            At Ebube CCTV Cameras, we deliver reliable and affordable security
            solutions across Nigeria. From homes to corporate buildings, our
            expert team installs high-definition CCTV systems, smart monitoring
            devices, and alarm networks designed to protect your property 24/7.
            We take pride in combining modern technology with years of
            experience to give you peace of mind, knowing your security is in
            trusted hands.
          </p>
          <client-only>
            <div class="flex flex-col md:flex-row gap-x-14 gap-y-6">
              <div class="text-center">
                <i-count-up
                  class="font-bold text-3xl md:text-4xl"
                  :end-val="13"
                />
                <p class="text-sm">Years of Experience</p>
              </div>
              <div class="text-center">
                <i-count-up
                  class="font-bold text-3xl md:text-4xl"
                  :end-val="50"
                />
                <p class="text-sm">Unique Products</p>
              </div>
              <div class="text-center">
                <i-count-up
                  class="font-bold text-3xl md:text-4xl"
                  :end-val="200"
                  :options="{ suffix: '+' }"
                />
                <p class="text-sm">Happy Clients</p>
              </div>
            </div>
          </client-only>
        </div>
        <div class="grow">
          <div class="h-[200px] w-[150px] lg:h-[300px] lg:w-[200px] mx-auto">
            <img
              src="~/assets/images/camera.webp"
              class="size-full rounded-full ring-8 object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </u-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

// Dynamically import actual component
const ICountUp = defineAsyncComponent(() =>
  import("vue-countup-v3").then((m) => m.default)
);
</script>

<style scoped>
.hero-sec {
  background: url("~/assets/images/hero-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;
}
.hero-sec::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
