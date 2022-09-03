import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import base_path from "lume/plugins/base_path.ts";
import terser from "lume/plugins/terser.ts";
import date from "lume/plugins/date.ts";
import attributes from "lume/plugins/attributes.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const site = lume();

site.ignore("README.md", "CHANGELOG.md", "node_modules");
site.use(attributes());
site.use(base_path());
site.use(date());
site.use(postcss());
site.use(terser());
site.use(parcelCss());
site.copy("img");
site.copy("site.webmanifest");
site.copy("CNAME");

export default site;
