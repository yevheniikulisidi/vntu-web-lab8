import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.createMany({
    data: [
      {
        page: '/',
        name: 'Степан',
        email: 'stepan@mail.com',
        text: 'Крутий веб-сайт',
      },
      {
        page: '/labs/lab2',
        name: 'Олена',
        email: 'olena@mail.com',
        text: 'Дуже корисно!',
      },
      {
        page: '/labs/lab3',
        name: 'Тарас',
        email: 'taras@mail.com',
        text: 'Цікаві матеріали.',
      },
      {
        page: '/labs/lab4',
        name: 'Світлана',
        email: 'svitlana@mail.com',
        text: 'Завжди радий новим знанням!',
      },
      {
        page: '/labs/lab5',
        name: 'Микола',
        email: 'mykola@mail.com',
        text: 'Щоб ще додати...',
      },
      {
        page: '/',
        name: 'Ігор',
        email: 'ihor@mail.com',
        text: 'Завдання виконано',
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        user: 'student',
        pass: 'p@ssw0rd',
      },
      {
        user: 'student2',
        pass: 'qwerty123!',
      },
      {
        user: 'student3',
        pass: 'vntuTHEbest1!',
      },
      {
        user: 'student4',
        pass: 'laba8pass!A',
      },
      {
        user: 'student5',
        pass: 'TOP4ik!',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
