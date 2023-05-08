'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
        title: 'С новым годом!',
        description: 'Капи-мороз желает всем денег',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Капибара съела тапок',
        description: 'Завел себе капибару, а она вон что',
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        title: 'КАПИТЕРМИНАТОР АТАКУЕТ',
        description: 'Новости с места событий',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Поиграем?',
        description: 'Комментарий без лайка выигрывает',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'РЕБЯТА ЭТО РЯЛЬНО РАБОТАЕТ',
        description: 'Выпей стакан воды, слетай на луну, хрюкни 4 раза и загляни под подушку, там тебя ждут армяне с нардами',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Идеи кончились',
        description: 'Я ухожу.....',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    await queryInterface.bulkInsert('comments', [
      {
        articleId: 1,
        text: 'Урааа',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 1,
        text: 'Я опять все проспал',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 1,
        text: 'Оливье вкусное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 1,
        text: 'Нового года не будет',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        text: 'Жиза',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        text: 'Терпила хахах',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        text: 'Это ее квартира',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3,
        text: 'Мне страшно...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3,
        text: 'У меня так друг умер',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3,
        text: 'Где Джон Капибоннор',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 4,
        text: 'Накрутка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 4,
        text: 'Одни боты в комментах',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 4,
        text: 'фвцрцй',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 4,
        text: 'йййййй',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 4,
        text: 'Кто лайкнет, того съест капибара',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 5,
        text: 'Я айфон хотел',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 5,
        text: 'Баян',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 5,
        text: 'Паблик скатился',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 6,
        text: 'Через неделю опять пост напишет',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 6,
        text: 'Мда',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 6,
        text: 'Работа капиграм',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 6,
        text: 'Баньте этих рептилоидов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null)
    await queryInterface.bulkDelete('comments', null)
  }
};
