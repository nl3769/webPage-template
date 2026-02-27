// backend/server.ts
import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// URI MongoDB avec encodeURIComponent pour le mot de passe
const uri = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(
  process.env.DB_PASSWORD!
)}@${process.env.DB_CLUSTER}/?appName=WebTemplate`;

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

let inputCollection: any;   // pour insérer les avis
let outputCollection: any;  // pour lire les avis

// Connexion MongoDB avant de lancer le serveur
async function connectDB() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    inputCollection = db.collection("input review");
    outputCollection = db.collection("output review");
    console.log("✅ Connecté à MongoDB depuis le backend");

    app.listen(port, () => {
      console.log(`🚀 Backend démarré sur http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Erreur de connexion à MongoDB :", err);
  }
}

connectDB();

// --- ROUTES API ---

// GET /api/avis → récupère tous les avis depuis output review
app.get("/api/avis", async (req, res) => {
  if (!outputCollection) return res.status(500).send("DB non connectée");
  try {
    const avis = await outputCollection.find({}).toArray();
    console.log("Données envoyées :", avis);
    res.json(avis);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// POST /api/avis → ajoute un avis dans input review
app.post("/api/avis", async (req, res) => {
  if (!inputCollection) return res.status(500).send("DB non connectée");
  try {
    const { nom, prenom, note, commentaire } = req.body;
    console.log("Données reçues :", req.body);
    if (note === undefined || !commentaire || !commentaire.trim() || !nom.trim() || !prenom.trim()) {
      return res.status(400).send("Données invalides");
    }
    
    const avis = {
      nom: nom,
      prenom: prenom,
      note: note,
      commentaire: commentaire,
      createdAt: new Date()
    };
    const result = await inputCollection.insertOne(avis);
    console.log("📝 Avis inséré avec l'id :", result.insertedId);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});