const { AuthenticationError } = require('apollo-server-express');
const { User, Asset, WorkOrder } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    asset: async (parent, { id }) => {
      const foundAsset = await Asset.findById(id);
      if (foundAsset) {
        return foundAsset;
      } else {
        return new Error();
      }
    },

    assets: async () => {
      const foundAssets = await Asset.find();
      return foundAssets;
    },

    workorders: async () => {
      const foundWorkOrders = await WorkOrder.find();
      return foundWorkOrders;
    },

    workorder: async (parent, { id }) => {
      const foundWorkOrder = await WorkOrder.findById(id).populate('asset');
      if (foundWorkOrder) {
        return foundWorkOrder;
      } else {
        return 'Work Order Not Found';
      }
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // adding a new asset to the db
    addAsset: async (parent, args) => {
      const newAsset = await Asset.create(args);
      return newAsset;
    },
    // adding a new work order. Where job is the users input for the order
    addWorkOrder: async (parent, args, context) => {
      console.log(context);
      const order = await WorkOrder.create(args);

      return order;

      // throw new AuthenticationError('Not logged in');
    },
    // updating a prexisting work order. Searched by ID
    updateWorkOrder: async (parent, args, context) => {
      const updatedWorkOrder = await WorkOrder.findByIdAndUpdate(context.workorder._id, args, { new: true });
      return updatedWorkOrder;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
