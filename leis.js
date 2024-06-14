
const collectionName = 'leis-normas';

addEventListener("load", (event) => {
    console.log('caindo aqui')
    initializeFirebase();
    getNormas();
});

function getNormas() {
    const db = firebase.firestore();
    let cards = '';
    db.collection(collectionName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            cards += `
            <div class="card">
                <h3>${doc.data().nome}</h3>
                <p>${doc.data().descricao}</p>
            </div>
            `; 
        });
        document.querySelector('#meus-cards').innerHTML = cards;
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