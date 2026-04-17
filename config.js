const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUXZOiRhT9L/2qFeVzhKqpCoOAqKCjIkgqDw00iEKD3Y2IKf97Cmdndx+SzYSnpj/OPfeec+9fAFc5RQvUAfUvUJP8Chnql6yrEVDBW5OmiIAhSCCDQAXyUhAkOxXZGUYlxcaO7ZaGVJ3CHUqjPS/LjeI2hTwVS/oKHkNQN1GRx78ARMH0VhJ+49wbtr3vi1aPINQJzCYz3DTCbCvGd4y3cWaKr+DRI8Kc5Dgz6iMqEYHFAnVrmJOv0R+s7JnPtGBg7ufZtUlSqzyPxhNNutWjQ1yl0h0XPpnwreF8jT6f1YZjvDghfgvMnPemYluG4+tdTOXmRq/HqxnUh1aP00L7oE/zDKPEThBmOeu+Xnd9n0HZsfbmZY3F7XJeVEt+egq4naEHW0vPRmEXzu5KOD58jTi38t/2hhWbWxw3pAhM++5KW0yjCOvl2Tl40iXolHixzCc/E1+TT6+c/0/dF0Zar9y3Cp2CWQ3dsBys303PZZbpX8+mlbnbxEqjC2xx+zX67pJ5siMUtpZ3ilJIntZU1xc4GiwDUSg23t67+QeXKcKnbXr6kDXkVyyjFQsH/o1rmtXOnx3H0kLyR+Li5bI/j2RhpVR3TZQ3nTLmC4kGnB5158ik8OZY2WZ3v3oE7298UItycphHGJ/mJ8U8ta/PjM6osxOgco8hICjLKSOQ5RXu93heGAKYXLcoJog9ywskce9s7sJlNu04HLzjwfztYt6zyDO0VTHwhEYSkbQTF1qsvYIhqEkVI0pRMsspq0jnIEphhihQ//hzCDC6sQ/h+nACNwRpTijzcFMXFUw+Vf08hHFcNZhtOxzr/QIRoI5/bCPGcpzRvo4NhiQ+5lekHyGjQE1hQdH3DBFBCVAZadD3rtWrpC+8vNHXwtyxwBCUT0HyBKhA4QVeUiaSLHOSOlF+p7+1PSys698wYmAIMOxvg0WOMzAExfMRLwoKx02EMT+RReX5rj94fOfbwyeIwbygQAX6MvLp2jYM109yOrEszck0PdPAj/w+jfIhhNMYHI3K1cUok7F3XIfSupDC8LCsY/euyFifrdp4HJqp177+AwhQgSgTMRygRnMPrddKV6ldlywYu9t9cWw2S7rxNGfvyGuyxqsuoWxz40a3vJh7FFfHvVSutFjAxU6ODElPjqW7tOORrr320RJ0zWP0czArjsI6tRy+Ef3b5kpdUsquFc3N6QXuojOxWjoL8frwjk/ubPoecgoOtIOyunkNnPHvwvw+nnaOR06ZLePtZdvM9dPp/cPCzxYqvo2u/GmuXrn+N83RcxJ8U+g/lfwg3htu/Bj+hPFttvxLf77tlkc3sqTT5TjHiWnveLSTkO/7uhxM4xGq2+OdzlxrE3AOeDz+HIK6gCytSAlUQMsIgiEgVdPb18Zp9YtIumbbRpbZfdoFpEz70RK7vESUwbIGKvfyIouSJCj8EJSdVtdbBtlnJwGt/xZKAB5/AyDIWWJlBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
