'use strict'

const bcrypt = require('bcryptjs')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'root',
          email: 'root@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'admin',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'root',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user1',
          email: 'user1@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'user',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'user1',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user2',
          email: 'user2@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'user',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'user2',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user3',
          email: 'user3@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'user',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'user3',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user4',
          email: 'user4@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'user',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'user4',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user5',
          email: 'user5@example.com',
          password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
          role: 'user',
          avatar: 'https://i.imgur.com/q6bwDGO.png',
          introduction: faker.lorem.text().substring(0, 50),
          account: 'user5',
          cover: 'https://i.imgur.com/1jDf2Me.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {
      where: {},
      truncate: true
    })
  }
}
