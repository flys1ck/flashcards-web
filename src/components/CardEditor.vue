<template>
  <div>
    <CardEditorMenu :editor="editor" />
    <EditorContent :editor="editor"></EditorContent>
  </div>
  <div v-if="editor">
    {{ editor.getJSON() }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
// nodes
import Document from "@tiptap/extension-document";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// marks
import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Highlight from "@tiptap/extension-highlight";
import Italic from "@tiptap/extension-italic";
import Stike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";

import CardEditorMenu from "@components/CardEditorMenu.vue";

export default defineComponent({
  components: { CardEditorMenu, EditorContent },
  setup() {
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
      ],
      editorProps: {
        attributes: {
          class:
            "p-2 border border-teal-500 rounded focus:outline-none h-64 overflow-auto",
          spellcheck: "false",
        },
      },
    });

    return { editor };
  },
});
</script>
