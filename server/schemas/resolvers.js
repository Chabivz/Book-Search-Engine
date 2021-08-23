const { UserInputError } = require("apollo-server-express");
const { Book, User } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user.id }).populate('books')
      }
      
      throw new UserInputError('You need to be logged in!');
    }
    
  },

  Mutation: {
    createUser: async (parent, { username, email, password}) => {
      return await User.create({ username, email, password})
    },
  
    login: async (parent , { email, password }) => {
      const user = await User.findOne({email})
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new UserInputError('Incorrect Credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { books }, context) => {
      if ( context.user ) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: books._id } },
          { new: true } 
        );
        return updateUser;
      }
      throw new UserInputError('You need to be logged in!')
      },

      deleteBook: async (parent, { bookId }, context) => {
        if ( context.user ) {
          const updateUser = await User.findOneAndUpdate(
            { _id: context.user.id },
            { $pull: {saveBooks: { _id: bookId }}},
            { new: true },
          );
        }
        throw new UserInputError('Cannot Delete Book')
      }




  }
}
 

module.exports = resolvers;
