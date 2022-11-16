<script lang="ts" setup>
import { Button as DvButton, Dropdown as DvDropdown, Menu as DvMenu, MenuItem as DvMenuItem } from 'daisyui-vue'

</script>

<template>
  <dv-dropdown trigger-action="click">
    <dv-button>Click</dv-button>
    <template #content>
      <dv-menu class="shadow-lg rounded-lg bg-base-100 p-2 w-56">
        <dv-menu-item>Item 1</dv-menu-item>
        <dv-menu-item>Item 2</dv-menu-item>
      </dv-menu>
    </template>
  </dv-dropdown>
</template>
