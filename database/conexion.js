import mongoose from "mongoose";
 //remplazo de las promesas

//Me conecto a la base de datos
export async function conectar (){ //Async para que funcione el await
    try{
        await mongoose.connect(process.env.DATABASE);
    }
    catch(error){
        console.log("Ups...!" + error)
    }
}
