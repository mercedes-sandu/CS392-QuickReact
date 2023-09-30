import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { useCallback, useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBOmRgz_JXpfnzRiOyJyWMICm_Ap7rGWXQ",
    authDomain: "cs392quickreact.firebaseapp.com",
    projectId: "cs392quickreact",
    storageBucket: "cs392quickreact.appspot.com",
    messagingSenderId: "677390693027",
    appId: "1:677390693027:web:db304b0a0c75787a4d8516",
    measurementId: "G-FGEDXC1TR1",
    databaseUrl: "https://cs392quickreact-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useDbData = (path) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataRef = ref(database, path);
        const unsubscribe = onValue(dataRef, (snapshot) => {
            const fetchedData = snapshot.val();
            setData(fetchedData);
        }, (error) => {
            setError(error);
        });
        return () => unsubscribe();
    }, [path]);

    return [data, error];
};

export const useDbUpdate = (path) => {
    const [result, setResult] = useState(null);

    const updateData = useCallback((value) => {
        const dataRef = ref(database, path);
        update(dataRef, value)
            .then(() => setResult({ success: true }))
            .catch((error) => setResult({ success: false, error }));
    }, [path]);

    return [updateData, result];
};