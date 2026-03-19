const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VV25KiOhT9l7xqjYCKQlVXHUSUm4oiXvrUPEQIGLmaBBCn/Pcp7O7peThnTh+eQi5rr73X2skPkOWYIgs1QP4BCoIryFA7ZE2BgAwmZRgiAroggAwCGViaaAu6Zh8HA12amNx5anK7wjQm9ayzj5ETd7Dgp0lVHpQX8OiCojwl2P8D4MqhQ0Ft4h4V6pno4cwZXKpgKiJ0M3vGtmPmp9F+FlaFp72AR4sIMcFZpBVnlCICEws1DsTka/Tz6QX5p8VMOpXxeT4/8VKGDg7tNLdgma1va9s6hLGGRC3xvkbfOUtNeFkny2N2eZ0lVqxFtbO4j+M+l2VnWOtaoPZNm4a36I0+xVGGAiNAGcOs+XLd9/YtIsHCtl0dueF4u7lZ/HEd9azLlNuFRUdYKcpOj5aJEH+NeIcdjWi+jw84N3oHt46v5569gkG+P2WB6+cru440bobzG/2duEM+vBL/n7pDdbRFtUYculv707lxHUAixffd6HAsL64/46WouqZ6JaTrr9GvRX53922ngLE1wfnODyi+rAfzq0N3vj3K7JGQilx5UvfeJ33ISvInlv6G59WrW11JdtY2CSLH/nhsL/t1StQVqmBPD269lL+nUF0ixVOUgbVNNRhtqIvMi5Adp31Hs1HViNs1UXVV2c+VKHp5ZhSjxgiAzD+6gKAIU0Ygw3n2nBsPugAGlYt8gtizvADaLPCurjcTy57JTe7j+3y4njNugYR6zPh0XpgrPGhifB+8gC4oSO4jSlGgY8py0iwQpTBCFMh/f++CDN3Ym3BtuL7QBSEmlHlZWSQ5DD5U/ViEvp+XGXObzFfbASJA5j6nEWM4i2hbxzKDxD/jCqlnyCiQQ5hQ9CtDRFAAZEZK9Ktr1TxoCz9X+b6yUzXQBelTEBwAGUhCXxhK46Eo8kN50P+LfqtbWFgU3zLEQBdksN0NLJxFoAuS5yFh0Jd4ftznhLE4kJ7n2oXHL74tfIAYxAkFMlBtfU8dQ9OWtjui3HyueJGiRgr4zO/DKG9C1DtDPA2HiM33u+1msw4Gpe7ENO/09pd62tuTwXSyJGMrj5WXfwABMjjtNolimOEd14JTB4fpRaedGlkFNxFPkjsT89qYLodD26BoRVAULCvj5J/oHbFNmcXFJeQNZMKs2pmT4jWVhv2Dr7au6oIAVdhHvwdjZ2s4nnhLMdIbd9XsX70VExVcmMemSUj0yuLXxSjR3f4Rb5Uq3y+4g7Bab0jEb5bTV7Qxz+vbUmBKGq+XzXB8k7zF7vJu4WcLJe9XF36aq1Wu/Q0xet4E7wr9p5JvxFvDcY/ubxjvd8u/9OfEn7mrtIMOZJMkHud5OrLP96FtORWfj5Uef+0o9Rb21KupgMfjexcUCWRhTlIgA5qeIOgCkpetfY0szP8QSVUMQ4sio007gZQpny2xxSmiDKYFkPnRqC9xoiCKb7sckhc6pOf2XdjHw0lr70YpCpdB9tFgQGk/NZqAx08+3NPRfAcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
