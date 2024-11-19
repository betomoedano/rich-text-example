import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Editor from "@/components/dom-components/hello-dom";
import { useState } from "react";
import { Text, View } from "react-native";

const IS_DOM = typeof Editor !== "undefined";

export default function HomeScreen() {
  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState("");
  const wordCount = editorState?.split(" ").length ?? 0;

  // console.log(JSON.stringify(JSON.parse(editorState ?? ""), null, 2));

  return (
    <>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>📱 Native Side</Text>
        <Text style={{ fontSize: 16, marginVertical: 10 }}>{plainText}</Text>
        <Text style={{ fontSize: 16 }}>Words: {wordCount}</Text>
      </View>
      <Editor setPlainText={setPlainText} setEditorState={setEditorState} />
    </>
  );
}
