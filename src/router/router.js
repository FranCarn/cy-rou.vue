import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "ListPage"*/ "../modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage"*/ "../modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:pokemonid",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage"*/ "../modules/pokemon/pages/PokemonPage"
      ),
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
