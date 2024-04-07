//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../../firebaseConfig";
//React
import React, { useState } from 'react';
//Ionic
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';

//Configuração initial para utilização o serviço Firebase para registro dos e-mails
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Codigo para funcionalidade da TAB de reistro do e-mail
const RegisterEmailPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://us-central1-maturidadeproject.cloudfunctions.net/registerEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Email registrado com sucesso!');
        setEmail('teste');
      } else {
        alert('Erro ao registrar o email. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao registrar o email. Por favor, verifique sua conexão e tente novamente.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de e-mail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            placeholder="Digite seu e-mail"
            required
          />
          <IonButton expand="block" type="submit">Registrar</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegisterEmailPage;