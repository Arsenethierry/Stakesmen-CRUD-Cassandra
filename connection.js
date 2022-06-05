import { Client } from "cassandra-driver"

export const client = new Client({
    cloud:{
        secureConnectBundle: 'C:/Users/ADMIN/Downloads/Compressed/secure-connect-db2.zip',
    },
    credentials:{
        username:'FvFQxJNaZbJAprXhXchseSUn',
        password: 'N2JzwoxG,cTR6oi5FQLm5Hdupn1xTpioytuf6XiKYypHbxR7K,kejR4ZRMtzYg3TlXZPdXT_fsQ0H8IkO1pdyf1TpE+U4.mirGLP9EAZcMveZzRWPgggiK8zKypuNYXM',
    },
})
