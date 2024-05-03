const flowbite = require("flowbite-react/tailwind");

module.exports = {
  purge: {
    content: [
      // Paths to your components files
      "./src/**/*.js",
      // etc.
    ],
    // Other options for purging
  },
  theme: {
    extend: {
      // Extend the Tailwind CSS theme as needed
    },
  },
  plugins: [
    // Include the flowbite-react plugin
    flowbite.plugin(),
    // Other plugins as needed
  ],
};
