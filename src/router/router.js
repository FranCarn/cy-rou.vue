import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import("../modules/pokemon/layouts/PokemonLayout"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPage"*/ "../modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage"*/ "../modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "id/:id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage"*/ "../modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const { id } = route.params;
          const numberId = Number(id);
          return {
            id: isNaN(numberId) ? 1 : numberId,
          };
        },
        name: "pokemon-id",
      },
      {
        path: "",
        name: "pokemon-redirect",
        redirect: { name: "pokemon-about" },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz-home",
    // Specific routes guard
    beforeEnter: [isAuthenticatedGuard],
    component: () => import("../modules/dbz/layouts/DbzLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import("../modules/dbz/pages/Characters"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("../modules/dbz/pages/About"),
      },
      {
        path: "",
        name: "dbz-redirect",
        redirect: { name: "dbz-characters" },
      },
    ],
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

// Synchronous global guard

// router.beforeEach((to, from, next) => {
// const random = Math.random() * 100;
// if (random > 50) {
//   console.log("authenticated");
//   next();
// } else {
//   console.log(random, "unautorized");
//   next({ name: "pokemon-home" });
// }
// });

// Asynchronous global guard

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("Authenticated");
//       resolve(true);
//     } else {
//       console.log(random, "unautorized");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
