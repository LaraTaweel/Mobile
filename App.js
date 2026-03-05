<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
=======
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
>>>>>>> 7571d3ffff0e0eb0a4b2372a4d2dd667a85e1c79
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://www.google.com" }}
<<<<<<< HEAD
        style={styles.webview}
=======
        style={{ flex: 1 }}
>>>>>>> 7571d3ffff0e0eb0a4b2372a4d2dd667a85e1c79
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
<<<<<<< HEAD
  webview: {
    flex: 1,
  },
});
=======
});
>>>>>>> 7571d3ffff0e0eb0a4b2372a4d2dd667a85e1c79
