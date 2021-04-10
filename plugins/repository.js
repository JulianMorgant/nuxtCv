import createRepository from "../api/repository/repository.js";

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios);

  const repositories = {
    badge: repositoryWithAxios("badge"),
    user: repositoryWithAxios("user")
  };
  inject("repositories", repositories);
};
