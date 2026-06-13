# Mui Ne Trip Planner

A polished single-page React travel planner for a Mui Ne trip from Tuesday, October 13 to Saturday, October 17.

## Run locally

This project includes local browser vendor files and a small dependency-free server, so it can be previewed without installing npm packages:

```powershell
& "C:\Users\ADMIN\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" server.mjs
```

Then open the printed `http://127.0.0.1:5173` URL.

You can also open `index.html` directly in a browser after running the included build script.

If you have Node/npm installed and prefer a normal Vite workflow:

```powershell
npm run build
npm install
npm run vite
```

## Features

- Interactive one-hour itinerary slots with a click-to-edit modal
- Double-click category cycling
- Drag-and-drop activity moves and swaps
- Duplicate activity to another slot
- Calendar grid and day-by-day list modes
- Search, category filtering, print, reset, JSON import, and JSON export
- LocalStorage persistence
