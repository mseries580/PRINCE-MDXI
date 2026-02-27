const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU247iOBD9F7+ChlxJg9TS5gIJJIEEmutqHkzsXMgV2wmEUf/7KHT39Gilne3Nk1MunTpV55R/gKJMKLZxC8Y/QEWSBjLcHVlbYTAGWh2GmIA+QJBBMAaSNb36i33vqITDtpLbWmTH7Vmi/hI1u+wkFjevN8X2iN/MnsFrH1T1KUuCPwBaG54u5r3RfTjktmfvSJOpgsh5yO9RI2LH3Nzbhk+bXSWWz+C1Q4QJSYpoUsU4xwRmNm49mJCv0U/n2y1pQzR1aI6mwRw6gT84pEOx2Q+G8wkaWpbGTV/CLA++Rr8lptnmrl/Io1RFrT6pzhckTYTFaWkMTmJx52tlcX5SbZF7o0+TqMBohnDBEtZ+ee6pdhTFsyPC+9BulnQZ+lkxD1Ks1CfqLbCDfH+AxLBZcu7XiGeuL2+d1FSFXRPGTYNemnizHXmK5fvQc+VperBatxQHN/o7cY98eCX9P3Mv9cveM497uoGnI1ypKFpuFGEk7SYxd1jxpSEc9urM2YSb8mv0o2s+LfHljgNys81p7Ck776jZdkAONmpOflXF85tuNfPz7JM+ZDX5E8sBDBTHFM3loelFtZbE3mmKnvKBj4s9dg+lljrzne87o3rRO8Aennqlv7isHWsdrWRDbrZOq8eXQHZDbXc+2+H6QG3Nf350lOJ2hsCYf+0DgqOEMgJZUhZdTBT7AKJmjQOC2WO6QLKl1pQ11t6o6e2w8YSPURst9Oto7cVczxI8XnM3+2A1U59BH1SkDDClGFkJZSVpXUwpjDAF47+/90GBb+xNt0c1vg/ChFC2KeoqKyH6EPXjEgZBWRds3RaB3h0wAWPuM4wZS4qIdmOsC0iCOGmwHkNGwTiEGcW/GsQEIzBmpMa/llYvUTd30+B4YXeQQB/kDz0SBMZAFKShIvEcrzyNlb/ot2sHCqvqW4EZ6IPskSQI0kgcKiI/EgRZ7hK7eB8UsEMCK9jCohv3O9sOHGEGk4yCMdDd9aq1J8bEhcPE5UxTnUSqHqngs7sPl7zJkO/NQTKB2yZdRoOT2tKNYfDm7FZDf3RussPkutJMgiyZf8jwTxAwBkxIpanuyBPBrfQsxx4cbV6MFN1ZzqHzct+c1YJfNlxSQbee1KHByYObUgW9mW24woJw+6fFQMGDWIYWa0Vik1pQ1eeuGsJNEuDfix0NR9ISrK4y95wFAm130WA+R3aehffWbJVavl9t3Ryt80Qnx71vxE5ZbG9Y4g8TOGsvpSTxF862tKV1KTyfLCpoGdGbfx/7k72/W8nDWp1u3W+Y4Mcz8K7Bf+j4RrszG/fa/w3h/Vn5l9XUjtmtkWIzO8lG6QlXl0zV62iVuKc89Q6KvNPcib+6iKse8sHr6/c+qDLIwpLkYAxggUj5sAkp6869syIs/1BM12YzNYpmXd8ZpEz93IiXJMeUwbwCY15RBEEUOF5+y/JIWVmQxp1Lt4py2XT2btWqWjPIPhYMqN235ELw+hOqTR3iewcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
