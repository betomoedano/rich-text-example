import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Editor from "@/components/dom-components/hello-dom";
import { useState } from "react";

const IS_DOM = typeof Editor !== "undefined";

export default function HomeScreen() {
  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState("");
  const wordCount = editorState?.split(" ").length ?? 0;

  console.log(editorState);

  return (
    <>
      <Editor setPlainText={setPlainText} setEditorState={setEditorState} />
      <ThemedView style={{ padding: 16 }}>
        <ThemedText>📱 Native Side</ThemedText>
        <ThemedText>{plainText}</ThemedText>
        <ThemedText>Words: {wordCount}</ThemedText>
      </ThemedView>
    </>
  );
}
