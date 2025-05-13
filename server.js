import express from "express"
import { configDotenv } from "dotenv";
configDotenv()
const app = express();

// app.get("/", (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <title>Server Running</title>
//       <style>
//         body {
//           margin: 0;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           text-align: center;
//           padding: 0 20px;
//         }
//         .container {
//           max-width: 400px;
//           background: rgba(255, 255, 255, 0.15);
//           padding: 30px;
//           border-radius: 12px;
//           box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//           backdrop-filter: blur(8px);
//           -webkit-backdrop-filter: blur(8px);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//         }
//         h1 {
//           font-size: 2.5rem;
//           margin-bottom: 10px;
//         }
//         p {
//           font-size: 1.25rem;
//           margin-top: 0;
//         }
//         @media (max-width: 600px) {
//           .container {
//             padding: 20px;
//           }
//           h1 {
//             font-size: 2rem;
//           }
//           p {
//             font-size: 1rem;
//           }
//         }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <h1>🚀 Server is Running!</h1>
//         <p>Welcome to your Express web server.</p>
//       </div>
//     </body>
//     </html>
//   `);
// });

app.use("/t",(req,res)=>{
    res.json("tttl")
})
console.log(process.env.MONGO_URI)
const port = process.env.port

app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port} `)
})

