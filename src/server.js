const { server } = require("@hapi/hapi");
const hapi = require("@hapi/hapi");
const { routes } = require("./routes");

const init = async () => {
  const server = hapi.server({
    host: "localhost",
    port: 9000,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`server started on ${server.info.uri}`);
};
init();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
