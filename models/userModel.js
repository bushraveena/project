const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });

      return {
        response: user,
      };
    } catch (error) {
      console.log("check");
      console.log("check");
      console.log("check");
      console.log("check");

      return {
        error: error.errors[0].message,
      };
    }
  },

  getALLUser: async () => {
    try {
      const user = await models.users.findALL({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
  updateUser: async ({ username, ...body }) => {
    try {
      const user = await models.users.update(
        {
          ...body,
        },
        {
          where: {
            username: username,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
  deleteUser: async ({ username }) => {
    try {
      const user = await models.users.destroy({
        where: { username: username },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
};
