# Job Finder

A simple job listing and search web app built with React, Vite, Tailwind CSS, and Firebase Firestore. Users can browse jobs sorted by recent posting date and filter by type, location, experience, and title.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4
- Firebase Web SDK v12 (Firestore)
- ESLint 9

## Features

- List jobs ordered by `postedOn` (newest first)
- Client-side filter form for:
  - `type` (e.g., Full-time, Part-time)
  - `location` (e.g., Remote, Onsite)
  - `experience` (e.g., Junior, Senior)
  - `title`
- Clear filter button to reset and show all job

## Project Structure

```
job_finder/
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ public/
└─ src/
	├─ App.jsx
	├─ main.jsx
	├─ index.css
	├─ JobDummyData.js
	├─ firebase.config.js
	├─ assets/
	└─ components/
		├─ Navbar/
		├─ Header/
		├─ SearchBar/
		└─ JobCard/
```

## Prerequisites

- Node.js 18+ (LTS recommended)
- A Firebase project with Firestore enabled

## Setup

1. Install dependencies:

	```powershell
	npm install
	```

2. Configure Firebase in `src/firebase.config.js`.

	This project already includes a sample configuration. For your own Firebase project, replace the values in `firebaseConfig` with your project's Web app credentials from the Firebase Console.

3. Firestore collection and fields:

	- Collection: `jobs`
	- Example job document fields:
	  - `title`: string
	  - `type`: string
	  - `location`: string
	  - `experience`: string
	  - `postedOn`: Firestore `Timestamp`

	The app queries all jobs ordered by `postedOn` and supports compound filters on `type`, `location`, `experience`, and `title`.

4. Firestore index (if needed):

	The custom search uses multiple `where` clauses with `orderBy('postedOn','desc')`. Firestore may require a composite index to support this query. If you see an error about missing indexes, follow the link provided in the error to create the required index, or create one manually in the Firebase Console:

	- Go to Firestore Database → Indexes → Composite Indexes
	- Add index for collection `jobs` with fields:
	  - `type` ==
	  - `location` ==
	  - `experience` ==
	  - `title` ==
	  - `postedOn` desc (order)

	You can also tailor indexes based on which filters you actually apply.

## Running the app

Start the development server:

```powershell
npm run dev
```

The server will print a local URL (typically http://localhost:5173). Open it in your browser.

## Build for production

```powershell
npm run build
```

Preview the built app locally:

```powershell
npm run preview
```

## Lint

```powershell
npm run lint
```

## Environment Notes

- This project uses Vite’s native ESM and React Fast Refresh.
- Tailwind v4 is included via the `@tailwindcss/vite` integration.
- On Windows PowerShell, use `npm run` scripts as shown above. If you need to chain commands, use `;` between commands.

## Troubleshooting

- Firestore query errors about indexes: create the suggested composite index.
- Empty results after filtering: ensure your documents have the exact values for `type`, `location`, `experience`, and `title` you're filtering by.
- `postedOn` type issues: `postedOn` must be a Firestore `Timestamp`. The app converts it to a JS `Date` via `toDate()`.
- Tailwind styles not loading: confirm `index.html` includes the stylesheet and that Tailwind is built with Vite.

## License

MIT
