<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between px-4 py-4 mx-auto sm:px-8 bg-primary-100 dark:bg-primary-800">
    <!-- Navigation -->
    <div class="text-primary-700 text-2xl dark:text-primary-200">
      <NuxtLink
        to="/"
      >
        {{ appConfig.domain.textlogo }}
      </NuxtLink>
    </div>
    <div class="text-primary-700 dark:text-primary-200">
      <NuxtLink
        v-for="link of navigation"
        v-show="link.title !== 'home' && link.title !== 'Dev' "
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-6"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-primary-500">
      <NuxtLink
        to="/dev"
        active-class="font-bold"
      >
        dev
      </NuxtLink>
      <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>
