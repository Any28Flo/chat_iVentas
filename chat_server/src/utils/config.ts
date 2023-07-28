import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../../.env") });


interface ENV {
    PORT: number | undefined;
    APP_ID: string | undefined;
    KEY: string | undefined;
    SECRET: string | undefined;
    CLUSTER: string | undefined;
    MONGODB_URL: string | undefined;
    BCRYPT_HASH: string | undefined;
}

interface Config {

    PORT: number;
    APP_ID: string;
    KEY: string;
    SECRET: string;
    CLUSTER: string;
    MONGODB_URL: string;
    BCRYPT_HASH: string
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : 3003,
        APP_ID: process.env.APP_ID ? String(process.env.APP_ID) : undefined,
        KEY: process.env.KEY ? String(process.env.KEY) : undefined,
        SECRET: process.env.SECRET ? String(process.env.SECRET) : undefined,
        CLUSTER: process.env.CLUSTER ? String(process.env.CLUSTER) : undefined,
        MONGODB_URL: process.env.MONGODB_URL ? String(process.env.MONGODB_URL) : undefined,
        BCRYPT_HASH: process.env.BCRYPT_HASH ? String(process.env.BCRYPT_HASH) : undefined,
    };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitizedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;

