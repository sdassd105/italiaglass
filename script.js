import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaxDTXpLc6FdCntguaNKY49LAhGHNkdt4",
  authDomain: "vidros-905e5.firebaseapp.com",
  projectId: "vidros-905e5",
  storageBucket: "vidros-905e5.firebasestorage.app",
  messagingSenderId: "668909983138",
  appId: "1:668909983138:web:ea56930d51ad72308d0efb",
  measurementId: "G-X16KDKTMW3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome")?.value.trim();
    const bairro = document.getElementById("bairro")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !bairro || !mensagem) {
      alert("Preencha nome, bairro e a descricao do projeto.");
      return;
    }

    try {
      await addDoc(collection(db, "orcamentos"), {
        nome,
        bairro,
        mensagem,
        data: serverTimestamp(),
      });

      alert("Pedido de orcamento enviado com sucesso! Entraremos em contato.");
      contactForm.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Nao foi possivel enviar agora. Tente novamente em instantes.");
    }
  });
}

void analytics;
