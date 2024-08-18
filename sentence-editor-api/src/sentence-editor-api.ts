// import Koa from "koa";
// import cors from '@koa/cors';
// import Router from '@koa/router';
import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import { SentencesController } from './sentencesController';
import bodyParser from 'koa-bodyparser';

export  const app = new Koa();
const  router = new Router();
const sentencesController = new SentencesController();
// const DATA = dummyData;
app.use(
    cors({
        origin: "http://localhost:4200",
        credentials: false,
    })
);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


router.get('allSetences','/allsetences', (ctx: Koa.Context)=>sentencesController.getallSentences(ctx));
router.post('editSentence', '/editsentence', (ctx: Koa.Context) =>sentencesController.updateSentence(ctx));




