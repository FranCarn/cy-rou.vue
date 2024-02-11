const isAuthenticatedGuard = async (to, from, next) => {
  return await new Promise(() => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("is Authenticated");
      next();
    } else {
      console.log(random, "unautorized");
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
