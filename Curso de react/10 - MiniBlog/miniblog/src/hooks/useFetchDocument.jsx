import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
    doc,
    getDoc
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, id) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadDocument() {

            if (cancelled) return;

            setLoading(true);

            try {
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);
                setDocuments(docSnap.data());
                setLoading(false);
            }
            catch (error) {
                setError(error.message);
                setLoading(true);
            }
        }

        loadDocument();

    }, [docCollection, id, cancelled])

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { document, loading, error };

}