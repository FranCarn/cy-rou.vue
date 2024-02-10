import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(
        /*webpackChunkName: "ListPage"*/ "../modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage"*/ "../modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/pokemonId/:pokemonid",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage"*/ "../modules/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      const { pokemonid } = route.params;
      const id = Number(pokemonid);
      return {
        id: isNaN(id) ? 1 : id,
      };
    },
    name: "pokemon-id",
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../modules/shared/pages/NotFoundPage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
