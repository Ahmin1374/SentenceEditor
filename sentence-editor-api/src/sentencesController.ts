import { Context } from "koa";
import SenetenceModel, { dummyData } from "./data";

export class SentencesController {
    
    DATA:SenetenceModel[] = dummyData;

    async getallSentences(ctx: Context): Promise<void> {        
        return Promise.resolve().then(() => {
            ctx.body = this.DATA
        });
    }
    
    async updateSentence(ctx: Context): Promise<void> {
        const toEdit =  ctx.request.body as SenetenceModel;
        this.DATA.forEach((sentence,i)=> {
            if(sentence.n === toEdit.n){
                    this.DATA[i] = toEdit
            }
        });
        return Promise.resolve().then(() => {
            console.log("controler");
            ctx.body = this.DATA
        });
       
    }
}