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
    route: '/createPost',
    visible: () => user.name != 'Logged out'
  }
])
const user_menu = ref()
const userItems = ref<MenuItem[]>([
  {
    label: 'Register',
    icon: 'pi pi-user-plus',
    route: '/register',
    visible: () => user.name == 'Logged out'
  },
  {
    label: 'Login',
    icon: 'pi pi-sign-in',
    route: '/login',
    visible: () => user.name == 'Logged out'
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
      service.logout()
    },
    visible: () => user.name != 'Logged out'
  }
])

function toggleUserMenu(event: any) {
  user_menu.value.toggle(event)
}
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
        <a
          v-ripple
          class="mx-2 p-3 border-round cursor-pointer hover:surface-100"
          @click="toggleUserMenu"
        >
          <span class="pi pi-user" />
          <span class="ml-2">{{ user.name }}</span>
        </a>
        <Menu ref="user_menu" id="user-menu" :model="userItems" :popup="true">
          <template #item="{ item, props }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </RouterLink>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </template>
        </Menu>
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