require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("../src/sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const icecreams = require("../src/constants/icecream").default;

const icecreamArray = icecreams.map(ice => ({ id: ice.name }));

const paramsConfig = {
  "/:id": icecreamArray
};

function generateSitemap() {
  return new Sitemap(router)
    .applyParams(paramsConfig)
    .build("https://pwa-try.jannalynn.now.sh/")
    .save("./sitemap.xml");
}

generateSitemap();
