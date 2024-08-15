import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiDY-RK9YJhoxd4RYCV7IRmXZx9TnNWts",
  authDomain: "pantry-app-321cb.firebaseapp.com",
  projectId: "pantry-app-321cb",
  storageBucket: "pantry-app-321cb.appspot.com",
  messagingSenderId: "875988195260",
  appId: "1:875988195260:web:c54062640e4d22053e7db9",
  measurementId: "G-7LM8KTVVQ8"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Simple test function to check connection
const testFirestoreConnection = async () => {
  try {
    // Writing a test document to Firestore
    const docRef = doc(firestore, 'testCollection', 'testDoc');
    await setDoc(docRef, { testField: 'testValue' });
    console.log('Document written successfully!');

    // Reading the test document from Firestore
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error interacting with Firestore:', error);
  }
};

testFirestoreConnection();

export { firestore };
