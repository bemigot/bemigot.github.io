const pluginRss = require("@11ty/eleventy-plugin-rss");

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Read a date with UTC getters so it matches the YYYY-MM-DD filename prefix
// regardless of the build machine's timezone.
function utcParts(d) {
  const dt = new Date(d);
  return { y: dt.getUTCFullYear(), mo: dt.getUTCMonth(), da: dt.getUTCDate() };
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Copy static assets through untouched.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // 2026-05-30
  eleventyConfig.addFilter("isoDate", (d) => {
    const p = utcParts(d);
    return `${p.y}-${String(p.mo + 1).padStart(2, "0")}-${String(p.da).padStart(2, "0")}`;
  });

  // May 30, 2026
  eleventyConfig.addFilter("readableDate", (d) => {
    const p = utcParts(d);
    return `${MONTHS[p.mo]} ${p.da}, ${p.y}`;
  });

  // First/last N of an array (negative N = last N).
  eleventyConfig.addFilter("head", (arr, n) => (n < 0 ? arr.slice(n) : arr.slice(0, n)));

  eleventyConfig.addGlobalData("buildYear", () => new Date().getUTCFullYear());

  // Newest-first list of all blog posts.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
