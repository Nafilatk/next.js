export default function ContactPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
      <h1>Welcome to our Next.js app!</h1>
      <p>next_js
Next.js can be used for both frontend (UI) and backend (API routes), making it a full-stack framework.
Server-Side Rendering (SSR) Pages are generated on the server at request time, giving better SEO and performance.
Static Site Generation (SSG) Pages can be pre-built at build time for faster loading and scalability.
It simplifies routing, styling, and performance so beginners can build modern apps without extra setup.
"Hello, World!" Program in Next.js


Screenshot-2025-03-21-163019

In this example :
The code resides in pages/index.js, defining the home page for the root route (/).
Declares a functional component named Home that renders the UI.
Outputs JSX, displaying "Hello, World!" inside an h1 tag within a div.
Exports the Home component, enabling Next.js to render it as the default page.
Before starting to learn Next.js we need to install Next.js on our system

Working of Next.js
Next.js works as a bridge between the server and the browser. It decides how pages are rendered and delivered, ensuring speed, SEO, and a smooth user experience.

working_of_next_js
Node.js
Next.js runs on top of Node.js, which acts as the backend environment to execute JavaScript outside the browser.
It handles server requests and responses efficiently.
Next.js Framework
Provides Routing (file-based system for pages).
Supports Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) to improve performance and SEO.
Works as the bridge between backend logic and frontend rendering.
React Components
Next.js uses React to build the UI components of the application.
These components are rendered on the server (SSR) or pre-generated (SSG) before being sent to the browser.
Browser (Client-Side)
The final HTML, CSS, and JavaScript are delivered to the user’s browser.
Thanks to Next.js optimizations and CDN support, users see a fast, SEO-friendly, and interactive web app.
This is how Next.js works to deliver fast and optimized web applications.

React Vs Next.js
Both are popular choices for web development, but they serve different purposes and offer different levels of functionality.

React.js:

A JavaScript library used mainly for building UI components on the client-side.
Handles only the frontend, needs extra setup for routing, SEO, and backend features.
Example of building a blog page with Reactjs:



export default Blog;
You create a Blog.js component.
To handle routing, you install a separate package like React Router.
To fetch blog posts, you use useEffect() and fetch() inside the component.
The page is rendered on the client-side, so search engines may not immediately see the content (bad for SEO)
In React.js, you need extra libraries (like React Router) and client-side fetching, which can hurt SEO.

</p>
    </div>
  );
}
