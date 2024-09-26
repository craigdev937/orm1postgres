import "reflect-metadata";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { ERR } from "./middleware/midError";
import { zodMID } from "./middleware/zodMid";
import { userRt } from "./routes/UserRt";

(async () => {
    const app: express.Application = express();
    app.use(helmet());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(logger("dev"));
    app.use(zodMID);
    app.use("/api/user", userRt);
    app.use(ERR.notFound);
    app.use(ERR.errHandler);

    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



