const db = require('./connection');
const { User, WorkOrder, Asset, Department } = require('../models');

db.once('open', async () => {
  // removing previously stored Departments and seeding in pre written seeds
  await Department.deleteMany();

  const Departments = await Department.insertMany([
    { name: 'Worker' },
    { name: 'Admin' },
    { name: 'Main Water People' }
  ]);

  console.log('Departments seeded');

  // Deleting assets and seeding in pre written
  await Asset.deleteMany();

  const assets = await Asset.insertMany([
    {
      number: 3,
      date: new Date(1992, 7, 11).getTime(),
      length: 12,
      address: '123 Fake St',
      area: 'west',
      priority: 'urgent',
      status: 'new'
    },
    {
      number: 1,
      date: new Date(2003, 1, 10).getTime(),
      length: 45.95,
      address: 'loser St',
      area: 'north',
      priority: 'low',
      status: 'pending approval'
    },
    {
      number: 2,
      date: new Date(2023, 3, 05).getTime(),
      length: 321.01,
      address: 'long Ave',
      area: 'south',
      priority: 'low',
      status: 'pending final review'
    },
  ]);

  console.log('Assets Seeded!');

  await WorkOrder.deleteMany();

  const jobs = await WorkOrder.insertMany([
    {
      contractor: 'Andrews Dad',
      date: new Date(2023, 1, 01).getTime(),
      asset: assets[0]._id,
      cctvFootage: 'Available',
      reviewed: 'No',
      assesed: 'No',
      acessibility: 'Sidewalk',
      reviewer: 'Martin',
      cctvQuality: 'poor',
      cctvViewed: 'pre',
      additionalNotes: 'Walls falling apart'
    },
    {
      contractor: 'Damien',
      date: new Date(2023, 5, 01).getTime(),
      asset: assets[1]._id,
      cctvFootage: 'N/A',
      reviewed: 'No',
      assesed: 'No',
      acessibility: 'Manhole inside Kitchen',
      reviewer: 'Andrews Dad',
      cctvQuality: 'N/A',
      cctvViewed: 'post',
      additionalNotes: 'You need to code to enter the house'
    },
    {
      contractor: 'Steve',
      date: new Date(2022, 10, 12).getTime(),
      asset: assets[2]._id,
      cctvFootage: 'Yes',
      reviewed: 'No',
      assesed: 'Yes',
      acessibility: 'Street Access',
      reviewer: 'Nathan',
      cctvQuality: 'Good',
      cctvViewed: 'pre & post',
      additionalNotes: ''
    },
  ]);

  console.log('work orders seeded');

  await User.deleteMany();

  await User.create({
    username: 'Nathan',
    email: 'nath.w@swarm.com',
    password: 'password12345',
  });

  await User.create({
    username: 'Martin',
    email: 'Martain.W@swarm.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
