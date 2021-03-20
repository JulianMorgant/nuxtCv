import createRepository from "../api/repository/repository.js";

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);

  const repositories = {
    // posts: repositoryWithAxios('posts'),
    user: repositoryWithAxios("user")
  };
  inject("repositories", repositories);
};
