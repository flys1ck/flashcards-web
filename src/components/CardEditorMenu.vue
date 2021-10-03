<template>
  <div v-if="editor" class="flex bg-gray-50 border border-gray-300">
    <CardEditorMenuButton
      v-for="(tButton, index) in markerButtons"
      :key="index"
      :is-active="tButton.isActive"
      :icon="tButton.icon"
      :on-click="tButton.onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { Editor } from "@tiptap/vue-3";

import BoldIcon from "@assets/icons/BoldIcon.vue";
import ItalicIcon from "@assets/icons/ItalicIcon.vue";
import UnderlineIcon from "@assets/icons/UnderlineIcon.vue";
import QuoteIcon from "@assets/icons/QuoteIcon.vue";
import InlineCodeIcon from "@assets/icons/InlineCodeIcon.vue";
import CodeIcon from "@assets/icons/CodeIcon.vue";
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
      isActive: props.editor?.isActive("bold"),
      onClick: () => {
        props.editor?.chain().focus().toggleBold().run();
      },
      icon: BoldIcon,
    },
    {
      isActive: props.editor?.isActive("italic"),
      onClick: () => {
        props.editor?.chain().focus().toggleItalic().run();
      },
      icon: ItalicIcon,
    },
    {
      isActive: props.editor?.isActive("underline"),
      onClick: () => {
        props.editor?.chain().focus().toggleUnderline().run();
      },
      icon: UnderlineIcon,
    },
    {
      isActive: props.editor.isActive("blockquote"),
      onClick: () => {
        props.editor.chain().focus().toggleBlockquote().run();
      },
      icon: QuoteIcon,
    },
    {
      isActive: props.editor.isActive("code"),
      onClick: () => {
        props.editor.chain().focus().toggleCode().run();
      },
      icon: InlineCodeIcon,
    },
    {
      isActive: props.editor.isActive("codeBlock"),
      onClick: () => {
        props.editor.chain().focus().toggleCodeBlock().run();
      },
      icon: CodeIcon,
    },
  ];
});
</script>
