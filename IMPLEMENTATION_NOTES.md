# MERN STACK WEBSITE DEVELOPMENT - STEP-BY-STEP NOTES

## 1. Backend Setup

1. Download and install Node.js and VS Code.
2. Create the `backend` folder. The frontend uses React.js, while the backend uses Node.js + Express.js.
3. Explanation of the MERN stack.
4. Install the Express web framework.
5. Create the `server.js` file inside `backend`.
6. Set up scripting in `package.json`.
7. Write APIs in `server.js`. Explanation of API requests.
8. Install Nodemon to avoid restarting the server manually every time.
9. Explanation of important API routes.
10. Create `backend/routes` → inside it, create `noteRoutes.js`.
11. Add all endpoints/routes to `noteRoutes.js`. Also create `backend/controllers` → inside it, create `noteControllers.js`.
12. Move the body/logic of all routes from `noteRoutes.js` to `noteControllers.js`.
13. Create `backend/src` → move all the previously created backend folders and `server.js` inside `src`.
14. Update `package.json`.

## 2. MongoDB Database Setup

15. Create a MongoDB account. Explanation of SQL vs. NoSQL databases.
16. In MongoDB Atlas, create a cluster → choose Drivers → copy the connection string.
17. Install Mongoose for schema validation.
18. Create `backend/src/config` → inside it, create `db.js`. Add the MongoDB connection string using Mongoose.
19. Create `backend/.env` to store the connection string securely.
20. Update `server.js` and `db.js` to use the connection string from `.env`.
21. Add the port number in `.env` → update `server.js`.
22. Create `backend/src/models` → inside it, create `note.js`.
23. Explanation of core Mongoose concepts, such as schemas (fields of data).
24. Complete all controllers in `noteControllers.js`.
25. Add the Get Note by ID controller in `noteControllers.js`.
26. Add middleware in `server.js` (code block).

## 3. Upstash Redis and Rate Limiting

27. Create a database in Upstash Redis for rate limiting.
28. Add the Redis connection URL and token to `backend/.env`.
29. Install Redis CLI in VS Code.
30. Create a package/folder → inside it, create `app.js`.
<!-- 31. Create `backend/src/middleware` → inside it, create `middleware.js`. -->
32. Use the Upstash code in `rateLimiter.js`.
33. Update `upstash.js`.
34. Update `server.js` → add the `connectDB` code block.

## 4. Frontend Setup

35. Create the frontend using Vite (instead of Webpack).
36. Install React Router and React Hot Toast.
37. Inside `frontend/src`, delete the default content of `App.jsx` and `index.css`. Also delete the `assets` folder.
38. Install the ES7+ React/Redux snippets extension in VS Code (RFC shortcut).
39. Create `frontend/src/pages` → inside it, create:
    - `HomePage.jsx`
    - `CreatePage.jsx`
    - `NoteDetailPage.jsx`
40. Update `frontend/src/App.jsx` → add code for routes to different pages.
41. Set up React Hot Toast (notification library).
42. Update `frontend/src/main.jsx`, CSS files, and `App.jsx` for notifications.
43. Set up the required Tailwind CSS version → resolve any version discrepancies in the terminal.
44. Update `frontend/src/index.css` and `App.jsx` for Tailwind CSS.
45. Install the Tailwind CSS IntelliSense extension in VS Code.
46. Set up DaisyUI version 4 (Tailwind CSS component library for customization).
47. Update `frontend/tailwind.config.js` and `frontend/src/App.css`.

## 5. Homepage and Components

48. Homepage: Install the `lucide-react` package in the frontend.
49. Create `frontend/src/components` → inside it, create `Navbar.jsx`.
50. Update `frontend/src/pages/HomePage.jsx` and `frontend/src/components/Navbar.jsx`.
51. Create `frontend/src/components/RateLimitedUI.jsx`.
52. Update `frontend/src/pages/HomePage.jsx`.
53. Explanation of CORS → install CORS in the backend.
54. Update `backend/src/server.js`.
55. Correct the errors in `frontend/src/pages/HomePage.jsx`.
56. Update `frontend/src/pages/HomePage.jsx`.
57. Create `frontend/src/components/NoteCard.jsx` → add code to it.
58. Create `frontend/src/lib` → inside it, create `utils.js`.
59. Format and save the code.
60. Update `frontend/src/components/NoteCard.jsx`.
61. Update `frontend/src/App.jsx`.

## 6. Create Note, Delete Note, and Note Details Page

62. Create Note page → update `frontend/src/pages/CreatePage.jsx`.
63. Create `frontend/src/lib/axios.js` → configure a global Axios instance.
64. Update `frontend/src/pages/HomePage.jsx`.
65. Delete functionality → update `frontend/src/components/NoteCard.jsx` and `frontend/src/pages/HomePage.jsx`.
66. Create `frontend/src/components/NoteModal.jsx`.
67. Update `frontend/src/components/NoteCard.jsx`.
68. Note Details page → update `frontend/src/pages/NoteDetailPage.jsx`.
69. Use the referenced background design website for the background in `frontend/src/pages/NoteDetailPage.jsx`.

## 7. Deployment Using GitHub and Render

70. Deploy the website → push to GitHub and use Render.com.
71. Create/update `.gitignore` outside the `backend` and `frontend` folders → add `.env`.
72. Create `package.json` in the main/root folder for Render.com deployment and installing dependencies (`node_modules`).
73. Update the root `package.json`.
74. Explanation of combining the frontend and backend under one domain.
75. Update `backend/src/server.js`.
76. Update `backend/.env`.
77. Update `frontend/src/lib/axios.js` for production.
78. Push the code to GitHub → deploy using Render.com.
79. Fill in the required details on Render.com. The website is now live!
80. Update `Upstash.js`.

# END
