import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b82cc5a3579ef9',
    password: 'a8609492',
    port: 3306,
    database: 'heroku_66629adcf6a3cf0'

})
