const dotenv = require("dotenv");
const synchronizeNotionPages = require("notion-to-mdx").default;
dotenv.config()

synchronizeNotionPages([
    {
        notionToken: process.env.NOTION_TOKEN,
        type: "database",
        id: "80035349b4bb4c16b89af4f3db64f97e",
        outputDir: "./content/articles",
        basePath: "/articles"
    }
]);
