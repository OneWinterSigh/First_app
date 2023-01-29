import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiP89Po4KPPFHx8TlkYwBqwSZbKSz64Nk",
  authDomain: "first-project-e9bd5.firebaseapp.com",
  projectId: "first-project-e9bd5",
  storageBucket: "first-project-e9bd5.appspot.com",
  messagingSenderId: "1040406695243",
  appId: "1:1040406695243:web:7ffea3ba3750023af16cce",
  measurementId: "G-RVHDW6CMYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  let x = 1;
  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, hola!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
