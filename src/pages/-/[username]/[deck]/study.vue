<template>study</template>

<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
  },
});
</script>

<route>
{
  name: "deck-study",
}
</route>
