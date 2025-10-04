<template>
  <header class="py-5 absolute w-full top-0 left-0 z-50 shadow">
    <div class="px-10">
      <nav class="flex items-center justify-end gap-x-10">
        <ul class="hidden md:flex items-center gap-x-10">
          <li v-for="link in navLinks">
            <nuxt-link :to="link.href" class="font-bold">{{
              link.title
            }}</nuxt-link>
          </li>
        </ul>

        <ul class="hidden md:flex gap-x-5">
          <li>
            <a
              href="https://facebook.com/rankwithebube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
            >
              <Icon name="mdi:facebook" size="25" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/EbubeIreneaus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter(X) Page"
            >
              <Icon name="mdi:twitter" size="25" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/EbubeIreneaus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Page"
            >
              <Icon name="mdi:instagram" size="25" />
            </a>
          </li>
        </ul>

        <u-button
          icon="mdi:menu"
          class="md:hidden"
          aria-label="menu button"
          @click="showMobileNav = !showMobileNav"
        />
      </nav>
    </div>

    <nav
      class="max-h-0 overflow-hidden opacity-0 w-full bg-secondary/80 transition-all ease-linear duration-300 block md:hidden"
      :class="{ 'max-h-[500px] py-10 opacity-100': showMobileNav }"
    >
      <ul class="*:text-center">
        <li v-for="link in navLinks" class="mb-2">
          <nuxt-link
            :to="link.href"
            class="font-bold text-slate-200 hover:!text-secondary"
            >{{ link.title }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navLinks: { title: string; href: string }[] = [
  { title: "Home", href: "#hero" },
  { title: "About Us", href: "#about-us" },
  { title: "Services", href: "#services-we-offer" },
  { title: "Blog", href: "#blog" },
  { title: "Contact Us", href: "#contact" },
];
const showMobileNav = ref(false);
</script>

<style></style>
