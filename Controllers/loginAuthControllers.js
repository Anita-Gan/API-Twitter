const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.loginAuthController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = ({
            where: { email: email }
        });

        if (!existingUser) {
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'authentification" });
    }
};
