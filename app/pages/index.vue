<template>
  <div>
    <HeaderComponent />
    <Hero />
    <u-container class="grid md:grid-cols-2 lg:grid-cols-4 my-10 mb-24">
      <u-card
        class="bg-primary rounded-none rounded-t-lg md:rounded-tl-lg lg:rounded-l-lg ring-0"
      >
        <template #default>
          <div class="flex flex-col gap-y-2 items-center text-white">
            <icon name="mdi:string-lights-off" size="24" />
            <p class="font-playfair text-lg">Innovation</p>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </template>
      </u-card>
      <u-card
        class="bg-primary rounded-none md:rounded-tr-lg lg:rounded-none ring-0"
      >
        <template #default>
          <div class="flex flex-col gap-y-2 items-center text-white">
            <icon name="mdi:trophy-award" size="24" />
            <p class="font-playfair text-lg">High Quality</p>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </template>
      </u-card>
      <u-card class="bg-secondary scale-105 md:scale-110 ring-0">
        <template #default>
          <div class="flex flex-col gap-y-2 items-center text-white">
            <icon name="mdi:checkbox-marked-circle-outline" size="24" />
            <p class="font-playfair text-lg">Best Product</p>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </template>
      </u-card>
      <u-card
        class="bg-primary grow rounded-none rounded-b-lg md:rounded-br-lg lg:rounded-r-lg ring-0"
      >
        <template #default>
          <div class="flex flex-col gap-y-2 items-center text-white">
            <icon name="mdi:cogs" size="24" />
            <p class="font-playfair text-lg">Top Service</p>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </template>
      </u-card>
    </u-container>
    <!-- about us -->
    <u-container class="grid md:grid-cols-2 lg:grid-cols-3 mb-24 mt-16">
      <u-card>
        <template #default>
          <div class="py-5">
            <img
              src="~/assets/images/multiple-cctv.webp"
              width="400"
              height="200"
              alt="image with different type of cctv camera"
              class="h-[200px] object-cover object-center mb-3"
            />
            <img
              src="~/assets/images/single-cctv.webp"
              width="400"
              height="200"
              alt="image with one type of cctv camera"
              class="h-[200px] w-full object-cover object-center"
            />
          </div>
        </template>
      </u-card>
      <u-card
        class="bg-primary text-white scale-105 lg:scale-110 flex items-center"
      >
        <template #default>
          <div class="">
            <h2 class="text-xl font-extrabold font-playfair">About Us</h2>
            <p class="text-sm my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              repellat cum. Neque minus nemo tempora ratione, aspernatur alias
              illo, adipisci itaque nesciunt placeat eaque nihil quae impedit,
              vel quia rerum voluptatum et laborum eos? Sequi, tenetur
              architecto. Vitae iure, molestias cum non quod similique facilis,
              sapiente ratione minima distinctio ab. Similique quo natus dolores
              magni laboriosam, cupiditate eum modi at adipisci quam, veniam
              doloribus amet rem? Adipisci accusantium similique modi dolorum at
              pariatur quam? Maiores similique quos laborum odio ipsam
              excepturi, quod tempora eos itaque fugiat nostrum inventore
              veritatis natus aliquam! Modi consequatur laboriosam ut
              reprehenderit. Earum maxime tenetur non.
            </p>
            <u-button color="secondary" label="Learn More" />
          </div>
        </template>
      </u-card>
      <u-card class="px-10 py-5">
        <template #default>
          <h2 class="text-xl font-playfair font-extrabold">Why Choose Us</h2>
          <p class="text-sm my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            eos.
          </p>
          <div class="flex flex-col gap-5">
            <div class="flex gap-x-3">
              <div class="bg-secondary h-fit p-1.5 rounded-md">
                <icon name="mdi:thumb-up" size="26" class="text-white" />
              </div>
              <div>
                <h3 class="font-playfair font-bold text-lg mb-3">
                  23 years of Experience
                </h3>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non natus molestiae.
                </p>
              </div>
            </div>

            <div class="flex gap-x-3">
              <div class="bg-secondary h-fit p-1.5 rounded-md">
                <icon name="mdi:headset" size="26" class="text-white" />
              </div>
              <div>
                <h3 class="font-playfair font-bold text-lg mb-3">
                  24/7 Customer Support
                </h3>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non natus molestiae.
                </p>
              </div>
            </div>

            <div class="flex gap-x-3">
              <div class="bg-secondary h-fit p-1.5 rounded-md">
                <icon
                  name="mdi:notebook-edit-outline"
                  size="26"
                  class="text-white"
                />
              </div>
              <div>
                <h3 class="font-playfair font-bold text-lg mb-3">
                  Industry Certified
                </h3>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non natus molestiae.
                </p>
              </div>
            </div>
          </div>
        </template>
      </u-card>
    </u-container>

    <u-container class="my-10 mb-24 py-10">
      <div class="flex flex-col lg:flex-row gap-y-4 items-center">
        <div class="grow">
          <h2 class="text-2xl font-playfair font-extrabold">Our Partners</h2>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            voluptatem.
          </p>
        </div>
        <div class="grow flex justify-between flex-wrap">
          <img
            src="~/assets/images/company-logo.png"
            alt="company-logo"
            width="200"
            height="100"
            class="mx-auto"
          />
          <img
            src="~/assets/images/company-logo.png"
            alt="company-logo"
            width="200"
            height="100"
            class="mx-auto"
          />
          <img
            src="~/assets/images/company-logo.png"
            alt="company-logo"
            width="200"
            height="100"
            class="mx-auto"
          />
        </div>
      </div>
    </u-container>

    <u-container class="my-10 py-5">
      <div>
        <div class="flex flex-col md:flex-row justify-between">
          <div class="grow w-full">
            <h2 class="font-playfair text-4xl font-extrabold">
              We Provide The Best Services
            </h2>
          </div>
          <div class="grow">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, repellat nostrum. Distinctio dolorum sint maiores eius
              odio, non error qui corporis deserunt, ipsa exercitationem quod!
              Corrupti quidem similique incidunt. Quam.
            </p>
            <u-button
              label="learn more"
              leading-icon="mdi:arrow-right"
              variant="link"
            />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between gap-x-10 items-center"
        >
          <u-card class="bg-primary max-w-xs rounded-full py-10">
            <template #default>
              <div class="flex flex-col gap-y-3 items-center text-white">
                <icon
                  name="mdi:camera-plus-outline"
                  size="28"
                  class="text-white"
                />
                <h3 class="text-2xl font-extrabold">Security Camera</h3>
                <p class="text-center text-slate-100">
                  We bring the right people together to challenge extablish
                  thinking and drive transform in 2025
                </p>
                <u-button
                  label="learn More"
                  variant="solid"
                  color="secondary"
                  trailing-icon="mdi:arrow-right"
                />
              </div>
            </template>
          </u-card>

          <u-card class="h-fit py-5 bg-background ring-0">
            <template #default>
              <div class="flex flex-col gap-y-3 items-center">
                <icon name="mdi:bell" size="28" class="" />
                <h3 class="text-2xl font-extrabold">Fire Detection</h3>
                <p class="text-center">
                  We bring the right people together to challenge extablish
                  thinking and drive transform in 2025
                </p>
                <u-button
                  label="learn More"
                  variant="solid"
                  color="secondary"
                  trailing-icon="mdi:arrow-right"
                />
              </div>
            </template>
          </u-card>

          <u-card class="h-fit py-5 bg-background ring-0">
            <template #default>
              <div class="flex flex-col gap-y-3 items-center">
                <icon name="mdi:video-input-antenna" size="28" class="" />
                <h3 class="text-2xl font-extrabold">Smart Home</h3>
                <p class="text-center">
                  We bring the right people together to challenge extablish
                  thinking and drive transform in 2025
                </p>
                <u-button
                  label="learn More"
                  variant="solid"
                  color="secondary"
                  trailing-icon="mdi:arrow-right"
                />
              </div>
            </template>
          </u-card>
        </div>
      </div>
    </u-container>

    <div
      class="bg-[url('~/assets/images/camera-bg.webp')] relative bg-no-repeat bg-cover bg-center mb-24"
    >
      <div class="absolute size-full bg-secondary/80 z-10"></div>
      <div class="text-white relative z-30 grid md:grid-cols-2 py-10">
        <u-card class="bg-transparent max-w-lg mx-auto ring-0">
          <h2 class="text-5xl font-bold font-playfair">
            Monitor Your Workplace From Your Phone
          </h2>
          <p class="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex
            illo ducimus possimus sed temporibus in veniam nisi quos provident
            eum rerum similique laudantium culpa necessitatibus amet facilis
            sequi doloremque delectus eos dicta quo sit vero vitae. Officia qui
            magnam veritatis sed itaque culpa, nemo provident eum voluptate
            eveniet deserunt.
          </p>
          <u-button
            label="learn more"
            trailing-icon="mdi:arrow-right"
            variant="link"
            color="secondary"
          />
        </u-card>
        <u-card class="bg-transparent ring-0 max-w-md w-full mx-auto">
          <form>
            <u-form-field class="mb-5">
              <u-input
                placeholder="Email"
                variant="soft"
                size="xl"
                class="w-full"
                :ui="{ base: 'placeholder:text-secondary' }"
              />
            </u-form-field>
            <u-form-field label="" class="mb-5">
              <u-select
                :items="[]"
                variant="soft"
                size="xl"
                class="w-full"
                placeholder="Select"
                :ui="{ base: 'placeholder:text-secondary' }"
              />
            </u-form-field>
            <u-form-field label="" class="mb-5">
              <u-textarea
                :rows="10"
                placeholder="Message"
                class="w-full"
                variant="soft"
                :ui="{ base: 'placeholder:text-secondary' }"
              >
              </u-textarea>
            </u-form-field>

            <u-button
              label="Submit Button"
              trailing-icon="mdi:send"
              color="secondary"
              size="xl"
            />
          </form>
        </u-card>
      </div>
    </div>

    <u-container class="relative mb-20">
      <div>
        <div class="text-center mb-20">
          <h2 class="text-4xl font-extrabold font-playfair mb-3">
            Our Working Process
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            impedit ipsam illo veritatis hic.
          </p>
        </div>

        <div
          class="relative flex flex-col justify-center lg:flex-row items-center gap-3"
        >
          <UCard class="py-5">
            <template #default>
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-secondary p-5 rounded-full absolute -top-10 z-30"
                >
                  <icon
                    name="mdi:account-supervisor-outline"
                    size="30"
                    class="text-white"
                  />
                </div>
                <h2 class="text-2xl font-extrabold font-playfair mt-5 mb-2">
                  Discussion
                </h2>
                <p class="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  non maxime distinctio exercitationem voluptatem
                </p>
              </div>
            </template>
          </UCard>
          <icon
            name="mdi:arrow-right"
            size="50"
            class="hidden lg:inline-block"
          />
          <icon
            name="mdi:arrow-down"
            size="50"
            class="inline-block lg:hidden"
          />

          <UCard class="py-5 bg-primary text-white">
            <template #default>
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-secondary p-5 rounded-full absolute -top-10 z-30"
                >
                  <icon name="mdi:cogs" size="30" class="text-white" />
                </div>
                <h2 class="text-2xl font-extrabold font-playfair mt-5 mb-2">
                  Installation
                </h2>
                <p class="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  non maxime distinctio exercitationem voluptatem
                </p>
              </div>
            </template>
          </UCard>
          <icon
            name="mdi:arrow-right"
            size="50"
            class="hidden lg:inline-block"
          />
          <icon
            name="mdi:arrow-down"
            size="50"
            class="inline-block lg:hidden"
          />

          <UCard class="py-5">
            <template #default>
              <div class="flex flex-col items-center text-center">
                <div
                  class="bg-secondary p-5 rounded-full absolute -top-10 z-30"
                >
                  <icon name="mdi:hammer-wrench" size="30" class="text-white" />
                </div>
                <h2 class="text-2xl font-extrabold font-playfair mt-5 mb-2">
                  Maintainance
                </h2>
                <p class="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  non maxime distinctio exercitationem voluptatem
                </p>
              </div>
            </template>
          </UCard>
        </div>
      </div>
    </u-container>

    <div
      class="bg-[url('~/assets/images/camera-bg.webp')] relative bg-no-repeat bg-cover bg-center mb-24"
    >
      <div class="absolute size-full bg-secondary/80 z-10"></div>
      <div class="text-white relative z-30 py-20 max-w-lg mx-auto px-3">
        <h2 class="text-4xl font-extrabold font-playfair text-center">
          Security Solution For Your Work and Home
        </h2>
        <p class="text-center my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          iste nisi, porro non, natus laboriosam ullam labore quisquam
          consequuntur quidem ut inventore minus, temporibus quas? Incidunt
          animi ab autem voluptatem?
        </p>

        <div class="flex justify-center gap-x-5 items-center">
          <u-button label="Learn More" size="xl" color="secondary" aria-label="learn more" />
          <u-button
            icon="mdi:play"
            size="xl"
            class="rounded-full ring-2 hover:ring-4 ring-slate-100 shadow-md shadow-slate-100"
            aria-label=""
          />
        </div>
      </div>
    </div>

    <footer class="bg-primary text-slate-100">
      <u-container class="flex flex-col md:flex-row gap-y-6 items-center justify-between py-14">
        <div class="flex-grow text-center md:text-left">
          <h2 class="text-4xl font-extrabold font-playfair mb-3 ">
            Our Newsletter
          </h2>
          <p class="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            molestias.
          </p>
        </div>
        <div class="flex gap-x-5 items-center flex-grow">
          <u-input
            class="max-w-lg w-full"
            size="xl"
            placeholder="Email"
            variant="outline"
            :ui="{ base: 'placeholder:text-secondary' }"
          />
          <u-button
            label="Subscribe"
            color="secondary"
            size="xl"
            class="px-10"
            aria-label="submit button"
          />
        </div>
      </u-container>

      <div>
        <div
          class="bg-[url('~/assets/images/camera-bg.webp')] relative bg-no-repeat bg-cover bg-center"
        >
          <div class="absolute size-full bg-secondary/80 z-10"></div>
          <u-container
            class="text-white relative z-30 grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 py-20"
          >
            <div>
              <p class="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                sequi maiores quaerat facilis blanditiis iusto quibusdam?
                Expedita veritatis voluptatum eum inventore, dolore odit
                temporibus magnam deleniti ex quibusdam non recusandae.
              </p>
              <div class="flex gap-x-4">
                <u-button icon="mdi:facebook" color="secondary" aria-label="facebook page" />
                <u-button icon="mdi:instagram" color="secondary" aria-label="instagram page" />
                <u-button icon="mdi:twitter" color="secondary" aria-label="twitter page" />
              </div>
            </div>

            <div>
              <div class="w-fit md:mx-auto">
              <h2 class="text-xl mb-2">Navigation</h2>
              <ul>
                <li v-for="link in navLinks" :key="link.title" class="mb-2 hover:scale-115 transition-transform ease-linear duration-300">
                 &gt; <NuxtLink :to="link.href">{{ link.title }}</NuxtLink>
                </li>
              </ul>
            </div>
            </div>

            <div class="lg:text-center">
              <h2 class="text-xl">Work Hours</h2>
              <div class="mb-3">
                <p class="mb-3"><icon name="mdi:map-marker-radius-outline" /> 7am - 5pm Mon - Sat</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <u-button label="Call Now" icon="mdi:phone" href="https://wa.me/+2348061982520" color="secondary" aria-label="Call Us Now" />
            </div>
          </u-container>

          <div class="text-slate-200 text-center relative z-30 py-3">
            Developed By <a href="https://rankwithebube.com" aria-label="rank with ebube .com" class="text-info underline underline-offset-2" target="_blank">Rank With Ebube</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const navLinks: { title: string; href: string }[] = [
  { title: "Home", href: "#hero" },
  { title: "About Us", href: "#about-us" },
  { title: "Services", href: "#services-we-offer" },
  { title: "Blog", href: "#blog" },
  { title: "Contact Us", href: "#contact" },
];

useSeoMeta({
  title: 'Ebube CCTV Cameras Sales and Installation, Lagos Nigeria',
  ogTitle: 'Ebube CCTV Cameras Sales and Installation, Lagos Nigeria',
  ogDescription: 'Ebube CCTV Cameras Sales and Installation in Lagos, Nigeria — expert security solutions for homes, offices, and businesses. We supply and install high-quality CCTV cameras for 24/7 safety and monitoring at affordable prices.',
  description: 'Ebube CCTV Cameras Sales and Installation in Lagos, Nigeria — expert security solutions for homes, offices, and businesses. We supply and install high-quality CCTV cameras for 24/7 safety and monitoring at affordable prices.',
  ogImage: 'https://ebube-cctv-ltd.vercel.app/images/og.png',
  twitterImage: 'https://ebube-cctv-ltd.vercel.app/images/og.png',
  twitterCard: 'summary',
  twitterCreator: '@EbubeIreneaus',
  ogSiteName: 'Ebube CCTV Limited',
  ogType: 'website',
  ogUrl: 'https://ebube-cctv-ltd.vercel.app'
})
useHead({
  link: [
    {rel:'canonical', href: 'https://ebube-cctv-ltd.vercel.app'}
  ],
  htmlAttrs: {
    lang: 'en-NG'
  }
})
</script>

<style></style>
