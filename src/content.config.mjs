import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders"; // Not available with legacy API

// we can also create collections that load from markdown files in a directory...this is an example of how to do that.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" })
});

// load our product info from the tents.json file
const products = defineCollection({
  loader: async () => {
    const response = await fetch(
      import.meta.env.PUBLIC_SERVER_URL + "/products?limit=200"
    );
    const data = await response.json();
    console.log(data.results);
    // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
    return data.results
  },
});

// const products = defineCollection({
//   loader: async () => {
//     const url = `${import.meta.env.PUBLIC_SERVER_URL}products?limit=200`;
//     console.log("Fetching from:", url);

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       // DEBUG: See what the API actually looks like
//       console.log("API Response Data:", data);

//       // 1. Determine where the array is (is it data.results or just data?)
//       const items = Array.isArray(data) ? data : data.results;

//       if (!items) {
//         console.error("Could not find an array in the API response. Check 'API Response Data' above.");
//         return []; 
//       }

//       // 2. Map the data and ensure a valid 'id' exists
//       return items.map((item) => ({
//         ...item,
//         // Astro MUST have a unique string ID
//         id: (item.id || item._id || item.slug || Math.random().toString()).toString()
//       }));

//     } catch (error) {
//       console.error("Fetch failed:", error);
//       return []; // Return empty array so Astro doesn't crash
//     }
//   },
// });

export const collections = { products };