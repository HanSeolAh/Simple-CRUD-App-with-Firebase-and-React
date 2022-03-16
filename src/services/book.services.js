import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const bookCollectionRef = collection(db, "Books");

class BookDateService {
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook);
    };

    updateBook = (id, updateBook) => {
        const bookDoc = doc(db, "Books", id);
        return updateDoc(bookDoc, updateBook);
    };

    deleteBook = (id) => {
        const bookDoc = doc(db, "Books", id);
        return deleteDoc(bookDoc);
    };

    getAllBooks = () => {
        return getDocs(bookCollectionRef);
    }

    getBook = (id) => {
        const bookDoc = doc(db, "Books", id);
        return getDoc(bookDoc);
    };
}

export default new BookDateService();