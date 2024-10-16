const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Music"},
                {name: "Photography"},
                {name: "Accounting"},
                {name: "Photo Editing"}
            ]
        });

        console.log("Success seeding categories.")
    }catch(error){
        console.log("Error seeding categories.", error)
    }finally{
        await db.$disconnect();
    }
}

main();