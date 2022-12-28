import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // base de materias e tags, para evitar erros, 
    //use apenas quando as tabelas estiverem limpas e na primeira vez que iniciar o projeto
    const materias = await prisma.types.createMany({
        data: [
            { name: 'Portugues', },
            { name: 'Matematica' },
            { name: 'Geografia' },
            { name: 'Historia' },
            { name: 'Fisica' },
            { name: 'Quimica' },
            { name: 'Filosofia' },
            { name: 'sociologia' }
        ]
    });

    console.log(materias) 

    const tags = await prisma.tags.createMany({
        data: [
            { name: 'virgula', typeId: 1 },
            { name: 'Função', typeId: 2 },
            { name: 'Geopolitica', typeId: 3 },
            { name: 'Brasil imperio', typeId: 4 },
            { name: 'Transformação de temporetura', typeId: 5 },
            { name: 'Ligação quimica', typeId: 6 },
            { name: 'Filosofo piton', typeId: 7 },
            { name: 'Antropologia', typeId: 8 }
        ]
    });
    console.log(tags)
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });