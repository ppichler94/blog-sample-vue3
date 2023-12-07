<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import UserService from '@/views/UserService'
import type { MenuItem } from 'primevue/menuitem'

const user = useUserStore()
const service = new UserService()

const items = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Create post',
    icon: 'pi pi-plus',
    route: '/createPost'
  },
  {
    label: 'User',
    style: 'flex-end',
    items: [
      {
        label: 'Register',
        route: '/register'
      },
      {
        label: 'Login',
        route: '/login'
      },
      {
        label: 'Logout',
        command: () => {
          service.logout()
        }
      }
    ]
  }
])
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </RouterLink>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <span class="pi pi-user" />
        {{ user.name }}
      </template>
    </Menubar>
  </header>

  <main>
    <RouterView />
    <PvToast />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>