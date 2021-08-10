<template>
  <div>
    <CardEditorMenu :editor="editor" />
    <EditorContent :editor="editor"></EditorContent>
  </div>
  <div v-if="editor">
    {{ editor.getJSON() }}
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import lowlight from "lowlight";
// nodes
import Document from "@tiptap/extension-document";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// marks
import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
// import Highlight from "@tiptap/extension-highlight";
import Italic from "@tiptap/extension-italic";
// import Stike from "@tiptap/extension-strike";
// import Subscript from "@tiptap/extension-subscript";
// import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

import CardEditorMenu from "@components/CardEditorMenu.vue";

const editor = useEditor({
  content: "Some text from tiptap",
  extensions: [
    // nodes
    Document,
    Paragraph,
    Text,
    Blockquote.configure({
      HTMLAttributes: {
        class: "border-l-2 pl-2 border-teal-500",
      },
    }),
    // marks
    Bold.configure({
      HTMLAttributes: {
        class: "font-bold",
      },
    }),
    Code.configure({
      HTMLAttributes: {
        class: "bg-gray-200 font-mono p-0.5 rounded",
      },
    }),
    Italic.configure({
      HTMLAttributes: {
        class: "italic",
      },
    }),
    Underline.configure({
      HTMLAttributes: {
        class: "underline",
      },
    }),
    CodeBlockLowlight.configure({
      lowlight,
      HTMLAttributes: {
        class:
          "bg-gray-900 text-gray-50 rounded p-2 overflow-hidden overflow-auto",
      },
    }),
  ],
  editorProps: {
    attributes: {
      class:
        "p-2 border border-teal-500 rounded focus:outline-none h-64 overflow-auto",
      spellcheck: "false",
    },
  },
});
</script>

<style>
@import "highlight.js/styles/atom-one-dark.css";
</style>
