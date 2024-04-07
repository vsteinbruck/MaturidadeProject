/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//Standard
//import {onRequest} from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";

//Função para registro de e-mails
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const registerEmail = functions.https.onRequest(async (req, res) => {
  try {
    const { email } = req.body;

    // Valide o email, se necessário

    await admin.firestore().collection('emails').add({ email });

    res.status(200).send('Email registrado com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao registrar o email. Por favor, tente novamente mais tarde.');
  }
});
