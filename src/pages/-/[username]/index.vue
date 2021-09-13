<template>Profile</template>

<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true,
  },
});
</script>

<route>
{
  meta: {
    layout: "header",
  }
}
</route>
