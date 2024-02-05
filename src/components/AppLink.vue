<script setup lang="ts">
// because RouterLink only handles relative links we need to handle both
type Props = { to: string | undefined }
const { to = "/" } = defineProps<Props>()
const isRelative = to.startsWith('/')
const onClick = (e: Event) => {
  e.preventDefault()
  window.location.href = to
}
// const emits = defineEmits()
</script>

<template>
  <template v-if="isRelative">
    <RouterLink custom :to="to" v-slot="{ isActive, href, navigate }">
      <slot :isActive="isActive" :href="href" :navigate="navigate" :isRelative="isRelative" />
    </RouterLink>
  </template>
  <template v-else>
    <slot :isActive="false" :href="to" :navigate="onClick" :isRelative="isRelative" />
  </template>
</template>
