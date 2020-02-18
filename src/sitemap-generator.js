require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("../src/sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
// get all icecreams
const icecreams = require("../src/constants/icecream").default;

// for each icecream we have a page so we have to get
// all possible params for these pages
const icecreamArray = icecreams.map(ice => ({ id: ice.name }));

// pass all possible pages to configuration
const paramsConfig = {
  "/:id": icecreamArray
};

function generateSitemap() {
  return new Sitemap(router)
    .applyParams(paramsConfig)
    .build("https://pwa-try.jannalynn.now.sh/")
    .save("./public/sitemap.xml");
}

generateSitemap();
