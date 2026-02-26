const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VVa5OiOBT9L/mqNfJSHlVdNchDUUFtFdGt+RAgIA0GTIKIU/3ft7C7Z7pqa2d7+RRuUueee8+5yU+Ay4yiOWqB9hNUJLtChrolaysENDCukwQR0AcxZBBooHXM2vDVVTsrncGLvhtN6kZwbvu1PzK2vmSyYSNCRXGWufIEXvugqsMii/4AOI6gZy/pnRvKK4Qb3gm8XhDblhHf7ipnz8/X7fPhUFau0AF2iDAjGU6t6oTOiMBijtoVzMjX6NOluUuXOaYV2veUW1S0+eYmmgsySMtKQuGdZPZtSDYX0fkafbGxDxFftJxAzjOpSaw0HahJlfPnKbfZOvVymr7cz6fdsrHe6NMsxSh2YoRZxtov9z2auqh8gfZ9yGrdv5zHRCpIXd64BK7v0tTkZvZS2q4I2n2R+KBexiNm7kQLRdALVIQbC8pLTx/tA+XibFpvMvNlwxF37mfiK/Lhlfx/9X0VqZPFapoPgjZmfphfaq6YudvprV1DJ/TleTHCAzxmvPs1+r2hb63jEzd7bqN8fHXzhEp1Gvbml9vcPqtqtHDMUg3He/sTfchq8ieWe3V39KOyrq06Cm6Xg1A349EBG8fgsN0emUVO2Tq7wvyKosmVV5VkXOzluxBuBHllCapRFAFuEEyWzf1unSpze+B72frpUVGOWicGGv/aBwSlGWUEsqzEXUyQ5D6A8XWDIoLYo71geuglZVqfEi9YH8MeMcpBTz8uSq80smq2dtyItDt3HufG7gn0QUXKCFGK4mlGWUlaF1EKU0SB9tePPsDoxt6E69KJfB8kGaFsh+uqKGH8oerHJoyissZs0+LI6BaIAI37HUaMZTilXR9rDEl0yq7IOEFGgZbAgqJfFSKCYqAxUqNfU2uUcdd4zxXWNqceQB+cH4JkMdCAKoiCMByNZEXkNP47/dZ0qLCqvmHEQB8Uj1MKLw2lkTwcdkcVjf/ehfsAww4J5BlOu3a/k+2wY8RgVlCgAWNBeiPYmJZ3XaQuN5noVqobqQ5+F/fhkjcVjJu7uZ+k4KSEA0PBenTzVMmnWZGe/HA8f5mnPOduC9x0U/dPEKABdwAxFz5XIRfqTCrsROSuohXkcWjCFB4SeXxI4HDI9UL1SIf0+DxhC1GWZpE6QIGZN/kxiHi2GW9axzeCg28ShHX9qcsWo2sWoc/J8oiRo3+RvCQ3qeBuLesmydjm6tX9Lo1zxfXb6IRnV5TXhacsX+jwgJTVMrfqFxN7+cgMlHTvzJ+3l3U9qanOS4My09/8+5if4v3eyh7O6mTrfpMMPa6Bdwn+S8Y33p3ZuNf+J4j3e+Xf3ok13VpUQraUTAbNddZM3W2C7NCpDo6/bzZlW3qxaQ2Pim2A19cffVAVkCUlOQMNQByT8mETUtadex2clH9IZuiOY6Wp0xVeQMr03xOxzc6IMniugMbLssBzIi8qb6dWpKymkJ66Z+FZPYpqZ+9Wr6oNg+xjwIDefZZXgte/AUne9Nl8BwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
