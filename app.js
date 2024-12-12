require('dotenv').config();
const express = require('express');

async function start() {
    try {
        const app = express();
        const port = process.env.PORT || 3000;

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        throw error;
    }
}

start().catch((error) => {
    console.error(error);
    process.exit(1);
});
