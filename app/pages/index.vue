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
            <p class="text-sm">
              We constantly adopt modern surveillance technologies to keep your
              property secure and connected 24/7.
            </p>
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
            <p class="text-sm">
              Our CCTV cameras and accessories are sourced from trusted brands
              known for durability and clear video output.
            </p>
          </div>
        </template>
      </u-card>
      <u-card class="bg-secondary scale-105 md:scale-110 ring-0">
        <template #default>
          <div class="flex flex-col gap-y-2 items-center text-white">
            <icon name="mdi:checkbox-marked-circle-outline" size="24" />
            <p class="font-playfair text-lg">Best Product</p>
            <p class="text-sm">
              From indoor to outdoor cameras, we deliver top-tier security
              products that guarantee long-term performance.
            </p>
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
            <p class="text-sm">
              We combine technical expertise with excellent customer care to
              deliver the best installation and maintenance service.
            </p>
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
              Ebube CCTV Cameras is a trusted provider of security surveillance
              solutions in Lagos, Nigeria. We specialize in the sales,
              installation, and maintenance of CCTV systems for residential,
              commercial, and industrial clients. Our mission is to make homes
              and businesses safer through modern technology that provides
              real-time monitoring, remote access, and complete peace of mind.
            </p>
            <u-button color="secondary" label="Learn More" />
          </div>
        </template>
      </u-card>
      <u-card class="px-10 py-5">
        <template #default>
          <h2 class="text-xl font-playfair font-extrabold">Why Choose Us</h2>
          <p class="text-sm my-3">
            We go beyond just selling cameras — we build reliable security
            systems designed to protect what matters most.
          </p>
          <div class="flex flex-col gap-5">
            <div class="flex gap-x-3">
              <div class="bg-secondary h-fit p-1.5 rounded-md">
                <icon name="mdi:thumb-up" size="26" class="text-white" />
              </div>
              <div>
                <h3 class="font-playfair font-bold text-lg mb-3">
                  23 Years of Experience
                </h3>
                <p class="text-sm">
                  Our team has decades of combined experience delivering trusted
                  security solutions across Nigeria.
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
                  Whether it’s a technical question or emergency service, our
                  support team is always available to assist.
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
                  We are trained and certified to handle CCTV installations that
                  meet global safety and quality standards.
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
            We proudly collaborate with leading CCTV and security brands to
            ensure every project delivers unmatched reliability.
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
              From small apartments to large commercial complexes, our CCTV
              solutions are customized to meet each client’s security needs. We
              focus on clarity, coverage, and reliability — ensuring you can
              monitor your property from anywhere.
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
                  We install indoor, outdoor, and wireless cameras that provide
                  clear video footage and long-range night vision.
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
                  We design and install advanced smoke and fire detection
                  systems that alert you instantly during emergencies.
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
                  Experience full home automation — control your cameras,
                  lights, and alarms directly from your smartphone.
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
      <div class="absolute size-full bg-primary/80 z-10"></div>
      <div class="text-white relative z-30 grid md:grid-cols-2 py-10">
        <u-card class="bg-transparent max-w-lg mx-auto ring-0">
          <h2 class="text-5xl font-bold font-playfair">
            Monitor Your Workplace From Your Phone
          </h2>
          <p class="my-5">
            Stay in control even when you’re away. Our smart CCTV systems allow
            real-time video streaming, motion detection alerts, and cloud
            storage — all accessible from your mobile device or desktop.
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
                aria-label="select options"
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
            We follow a simple yet effective workflow that ensures every CCTV
            system is properly installed and performs perfectly.
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
                  We begin by understanding your security goals, property
                  layout, and preferred surveillance features.
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
                  Our experts install high-definition cameras and recording
                  systems with clean cable management and full testing.
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
                  Maintenance
                </h2>
                <p class="">
                  We provide ongoing technical support, system upgrades, and
                  routine checks to keep your security system reliable.
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
      <div class="absolute size-full bg-primary/80 z-10"></div>
      <div class="text-white relative z-30 py-20 max-w-lg mx-auto px-3">
        <h2 class="text-4xl font-extrabold font-playfair text-center">
          Security Solution For Your Work and Home
        </h2>
        <p class="text-center my-6">
          We deliver complete surveillance solutions for homes, offices,
          schools, and industries. Our systems are designed to give you peace of
          mind and control — anytime, anywhere.
        </p>

        <div class="flex justify-center gap-x-5 items-center">
          <u-button
            label="Learn More"
            size="xl"
            color="secondary"
            aria-label="learn more"
          />
          <u-button
            icon="mdi:play"
            size="xl"
            class="rounded-full ring-2 hover:ring-4 ring-slate-100 shadow-md shadow-slate-100"
            aria-label="Watch youtube video"
          />
        </div>
      </div>
    </div>

    <footer class="bg-primary text-slate-100">
      <u-container
        class="flex flex-col md:flex-row gap-y-6 items-center justify-between py-14"
      >
        <div class="flex-grow text-center md:text-left">
          <h2 class="text-4xl font-extrabold font-playfair mb-3">
            Our Newsletter
          </h2>
          <p class="text-slate-300">
            Subscribe to our newsletter for updates on the latest CCTV
            technologies, promotions, and expert security tips.
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
          <div class="absolute size-full bg-primary/80 z-10"></div>
          <u-container
            class="text-white relative z-30 grid md:grid-cols-2 lg:grid-cols-4 py-20"
          >
            <div>
              <h2 class="text-xl font-bold font-playfair mb-3">About</h2>
              <p class="text-sm text-slate-100">
                Ebube CCTV Cameras provides premium sales and professional
                installation of CCTV and security systems across Lagos, Nigeria.
                We help you protect what matters most with cutting-edge
                surveillance technology.
              </p>
            </div>
            <div>
              <h2 class="text-xl font-bold font-playfair mb-3">Quick Links</h2>
              <ul class="text-sm space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold font-playfair mb-3">Services</h2>
              <ul class="text-sm space-y-2">
                <li>CCTV Installation</li>
                <li>Fire Detection Systems</li>
                <li>Smart Home Automation</li>
                <li>Security Maintenance</li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-bold font-playfair mb-3">Contact</h2>
              <ul class="text-sm space-y-2 mb-3">
                <li>
                  <icon name="mdi:map-marker-multiple-outline" /> Lagos, Nigeria
                </li>
                <li>&am - 5pm Mon - Sat</li>
                <li>info@ebubecctv.com</li>
              </ul>
              <u-button
                href="https://wa.me/+2348061982520"
                icon="mdi:phone"
                label="Call Now"
                size="xl"
                color="secondary"
              />
            </div>
          </u-container>

          <div class="relative z-30 text-center py-1">
            <p>Designed By <a href="https://rankwithebube.com" class="text-secondary underline underline-offset-2">rankwithebube.com</a></p>
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
  title: "Ebube CCTV Cameras Sales and Installation, Lagos Nigeria",
  ogTitle: "Ebube CCTV Cameras Sales and Installation, Lagos Nigeria",
  ogDescription:
    "Ebube CCTV Cameras Sales and Installation in Lagos, Nigeria — expert security solutions for homes, offices, and businesses. We supply and install high-quality CCTV cameras for 24/7 safety and monitoring at affordable prices.",
  description:
    "Ebube CCTV Cameras Sales and Installation in Lagos, Nigeria — expert security solutions for homes, offices, and businesses. We supply and install high-quality CCTV cameras for 24/7 safety and monitoring at affordable prices.",
  ogImage: "https://ebube-cctv-ltd.vercel.app/images/og.png",
  twitterImage: "https://ebube-cctv-ltd.vercel.app/images/og.png",
  twitterCard: "summary",
  twitterCreator: "@EbubeIreneaus",
  ogSiteName: "Ebube CCTV Limited",
  ogType: "website",
  ogUrl: "https://ebube-cctv-ltd.vercel.app",
});
useHead({
  link: [{ rel: "canonical", href: "https://ebube-cctv-ltd.vercel.app" }],
  htmlAttrs: {
    lang: "en-NG",
  },
});
</script>

<style></style>
