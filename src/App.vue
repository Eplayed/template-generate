<template>
  <header>
    <el-menu class="el-menu-demo" :ellipsis="false" mode="horizontal" @select="handleSelect">
      <el-menu-item index="generate">generate</el-menu-item>
      <el-menu-item index="about">About</el-menu-item>
      <div class="flex-grow" />
      <el-switch
        v-model="theme"
        @click="toggleDark()"
        inline-prompt
        active-text="Dark"
        inactive-text="Light"
      >
      </el-switch>
    </el-menu>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

import { useToggle } from '@vueuse/shared'
import { useDark } from '@vueuse/core'

const router = useRouter()
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light'
})
const theme = ref<boolean>(false)
const toggleDark = useToggle(isDark)

const handleSelect = (key: string, keyPath: string[]) => {
  router.push({ path: key })
  console.log('key', key)
}
</script>
<style scoped>
header {
  max-height: 100vh;
}
.flex-grow {
  flex-grow: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
