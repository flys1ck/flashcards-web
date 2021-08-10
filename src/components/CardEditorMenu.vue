<template>
  <div v-if="editor" class="space-x-0.5 flex p-2">
    <CardEditorMenuButton
      v-for="(tButton, index) in markerButtons"
      :key="index"
      :is-active="tButton.isActive()"
      @click="tButton.onClick()"
    >
      {{ tButton.content }}
    </CardEditorMenuButton>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue";
import { Editor } from "@tiptap/vue-3";

import CardEditorMenuButton from "@components/CardEditorMenuButton.vue";

const props = defineProps({
  editor: {
    type: Object as PropType<Editor>,
    default: null,
  },
});
const markerButtons = computed(() => {
  return [
    {
      isActive: () => props.editor?.isActive("bold"),
      onClick: () => props.editor?.chain().focus().toggleBold().run(),
      content: "B",
    },
    {
      isActive: () => props.editor?.isActive("italic"),
      onClick: () => props.editor?.chain().focus().toggleItalic().run(),
      content: "I",
    },
    {
      isActive: () => props.editor?.isActive("underline"),
      onClick: () => props.editor?.chain().focus().toggleUnderline().run(),
      content: "U",
    },
    {
      isActive: () => props.editor.isActive("blockquote"),
      onClick: () => props.editor.chain().focus().toggleBlockquote().run(),
      content: '"',
    },
  ];
});
</script>
