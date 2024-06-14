const form = document.querySelector('#form-cadastro');
const collectionName = 'leis-normas';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    cadastrarNorma();
});

function cadastrarNorma() {
    initializeFirebase();

    const db = firebase.firestore();
    db.collection(collectionName).add({
        nome: document.querySelector('#nome-norma').value,
        descricao: document.querySelector('#desc-norma').value,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.querySelector("#form-cadastro").reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function initializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBmzf5akBn-Kgzgwn2FbkMhUYxhYU-vGLM",
        authDomain: "fiap-construtech.firebaseapp.com",
        projectId: "fiap-construtech",
        storageBucket: "fiap-construtech.appspot.com",
        messagingSenderId: "766409992933",
        appId: "1:766409992933:web:836806ada7466ef23e020c",
        measurementId: "G-MNHLCP8WG0"
    };

    firebase.initializeApp(firebaseConfig);
}