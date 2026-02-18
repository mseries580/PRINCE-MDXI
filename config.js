const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUyZKjOBD9F13taFZjIKIims37go33iT7IIIMACyyEMXTUv0/gqurqw0xPDSeRynj58uVL/QQkwwWaohroP0FO8R0y1B5ZnSOgA7O8XBAFXRBABoEOZFc6uqa/Mipi085juT8nzTl2Ud9D6iHpeXmWKB2TQy4xXsBrF+TlOcX+HwAFp1p4hrTZ2FBayCe5Z2k70x/6cnOibj3xg7FTRIcbFcwWsEWEmGISOnmErojCdIpqF2L6NfrI9hNjP73VmN46c7JwkRpvSL/ClyZfk3152qU83fi+xKtfo79tZHE/cmLoLteJml6riT/RdocrUu4Ns6VRFjyupXCyKqK+0S9wSFAwDhBhmNVf1j203d6K2dfRwXUV7rC3DDn2iUgnwqAK+WVs2tPefrqYyM4XdbcFFpoBe5jUHFgLp99cd1LeJPL0zjlkGd2iHeKVWjmudvLvxF364ZXk/+ieTLVOWIkRMZornw6NSWe1iIORojykPUK3c1yf1Wwy4JvB9mv0I36z5P0brfnezfMSAZk7k8XHcbSP1/l9UPfiFYHVFe95/5M+ZCX9E0tnHNZzdIutzFIEUSgGvrCtfRmdaHI/8eJRjbNYXB4OZ6dQir7JjUquIZ53y0ZrPq1ccaGtBsj0pwPXhTVXbVAamHH18uwoQfU4ALrw2gUUhbhgFDKckWdM07oABncP+RSxp7xgmHjcojCEwdhK3M6+iZY7Zy2ra64+GQdHC4JCraYb5TY9FS+gC3Ka+agoUDDCBctoPUdFAUNUAP2vH11A0IO9Da4tJwldcMG0YFtS5mkGg4+pflxC389Kwrya+FZ7QBTo/GcYMYZJWLQ6lgRSP8J3ZEWQFUC/wLRAvzpEFAVAZ7REv7bWyoJW+Pl6s/MkbQW64PocCA6ADjRREsWeovRVidfl78W3qkWFef6NIAa6IH1mqYLck5V+r9emqrr8vQ2//qLXogWIQZwWQAfWjHQUWNnOXBqI82o4NFahYYUG+GznwxdvuqNh5M/vobdhyuGIzg+xc3L61YKjG+yOZ/kpPOB6P1NdQZRf/gGkfRFGh8AdMnxZSEdF5XtDfNnuAi7Gj3HH62B7y5ZDyI9mD3iXjls3C7L6EkbccdpMV+Vudil9R6BSv1mLxnwxdNaTW5VZq5e2WoDu2Ee/F+P6dp7O4x4VXMqNFH9xftQnxZ0FUHEzjeO2RjkKFvQSHHrNABtTmbrQFFenUZ9W0XioTswlyWxrs0POUiBVMUt4GL079rkx6ftLhZ9eagfV/l4wei4+ge34/nNwb7xbe/Gv3d8g3l+Sf9lG8xBlB3smO0kfpeLoqgb363qp2heFl+PaUvbHgVykmLO1oASvrz+6IE8hu2T0CnQASUAzHIAuoFnZ+nVMLtkfilnGeOyE4bhtPIUFMz53YIOvqGDwmgNd6PcFWVY0TXnLcmmWj2ARAR1Ia+0kaa2hayPPPQbZx0oBo/3cZgVe/wZcQCJRbgcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
