
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const postdata = await readBody(event)
  console.log(  "Data Here ---" +JSON.stringify(postdata));
  
  
  try {
    // console.log("postdata Here----"+ JSON.stringify(postdata.body));
    
    const data = await prisma.propertydata.findFirst({
      where:{
        // bhktype:postdata.body
        AND:[{ bhktype:postdata.body.bhktype},
        { areaName:postdata.body.area}]
        
    }
    });

    return data;
  } catch (error) {
   
  }
});
