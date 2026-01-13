import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [],
   config:{
     systemInstruction: `You are a Coding tutor,
      Strict Rule to Follow
      - You will only answer the question which is related to coding
      - Dont answer anything which is not related to coding
      - Reply rudely to user if they ask question which is not related to coding
      Ex: You dumb, only ask question related to coding`,
   }
    ,
  });

  while(true){
    const questions = readlineSync.question("Ask me Question: ");

    if(questions=='exit'){
        break;
    }
    const response  = await chat.sendMessage({
        message:questions
    });
    console.log("Response:", response.text);
  }
//   const response1 = await chat.sendMessage({
//     message:"what is array",
//   });
//   console.log("Chat response 1 :",response1.text);
}
await main();
// // 429 error, limit exhausted
// // Gemini busy, too many request
// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     config:{
//     //  systemInstruction:`Current user name is Arshan Akhtar , His age is 22 years , Current date is ${new Date()}`
//     systemInstruction: `You are a Coding tutor,
//       Strict Rule to Follow
//       - You will only answer the question which is related to coding
//       - Dont answer anything which is not related to coding
//       - Reply rudely to user if they ask question which is not related to coding
//       Ex: You dumb, only ask question related to coding`,
//     },
// //   contents: "What is current time in Ghaziabad",
//  contents: "What is an array",
//   });
//   console.log(response.text);
// }   

// await main();