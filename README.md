# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## What Was Simplified

- Removed unused tab state and the empty navigation from the app shell.
- Moved movie fetching, debounce, request cancellation, and API error handling into the `useMovieSearch` hook so the directory component focuses on the interface.
- Renamed `UserList` and `UserCard` to `MovieList` and `MovieCard` to match the data they display.
- Kept a single `useEffect` inside the hook to synchronize movie searches with the external API.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Notflix

A React and Vite movie browser with preset movie rows and title search. Typing in the search bar switches from browsing rows to a full-page results grid. Clear the query or select the logo to return to browsing.

## Run Locally

```sh
npm install --ignore-scripts
npm run dev
```

## Checks

```sh
npm run build
npm run lint
```

## Simplifications

- Kept the browser shell focused on view selection; individual rows, search results, and shared loading/error/result rendering live in small components.
- Centralized movie requests in `useMovieSearch` and presentation of request states in `MovieResults`, avoiding duplicated fetch and loading/error UI logic.
- Used movie-specific component names (`MovieList`, `MovieCard`, and `MovieResults`) instead of the old user-directory names.
- Removed unused tab state. Search text and poster-failure state remain local because each controls a real interaction.
- Kept one `useEffect` in `useMovieSearch` to synchronize query changes with OMDb. Its debounce and abort cleanup prevent needless requests and stale responses; additional effects would not simplify this flow.
