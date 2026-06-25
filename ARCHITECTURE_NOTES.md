# Architecture Notes

## Candidate
**Misbah Khan**

## Submission
**NovaIoT Frontend Intern Assignment**

## 1. Project Summary
This project is a **Fleet Health Dashboard** built for the NovaIoT Frontend Intern assignment.

The dashboard presents a fleet / IoT operations monitoring interface where users can review high-level system health information and inspect device-level records. The interface is designed to resemble an enterprise admin console with clear navigation, operational status visibility, and searchable device monitoring data.

The current implementation focuses on the frontend experience using **React + Vite + CSS**, with data represented locally in the application.

## 2. Goals of the Implementation
1. Build a clean and professional **dashboard-style frontend**
2. Present fleet health metrics in a format that is easy to scan
3. Provide a searchable and filterable device registry
4. Use a maintainable React-based structure suitable for extension
5. Deliver a polished front-end assignment within the given time constraints

## 3. Tech Stack
- **React** for UI composition
- **Vite** for development/build tooling
- **JavaScript (JSX)** for component logic
- **CSS** for layout, styling, and responsiveness
- **Node.js / npm** for dependency management and local development

## 4. Project Structure
```bash
project-root/
1-> index.html
2-> package.json
3-> vite.config.js
3-> src/
  3.1-> App.jsx
  3.2-> main.jsx
  3.3-> index.css
4-> dist/
5-> README.md
6-> ARCHITECTURE_NOTES.md
7-> AI_USAGE_LOG.md


## 5. High-Level Architecture
### Entry Layer
- `index.html` provides the root container
- `src/main.jsx` bootstraps the React app and imports global CSS

### Main UI Layer
`src/App.jsx` is the main dashboard composition layer. It is responsible for:
- generating / holding fleet device data
- deriving summary metrics
- rendering the dashboard layout
- managing search and filter state
- computing filtered device results
- rendering the device registry table

### Styling Layer
`src/index.css` contains the global dashboard styles including:
- layout and sidebar styling
- header styling
- stat cards
- table styles
- status badges
- responsive breakpoints

## 6. Functional Architecture
### Device Data Layer
The app uses locally generated fleet device data. Each record contains fields such as:
- `id`
- `name`
- `zone`
- `type`
- `status`

### Derived Metrics Layer
The app computes:
- total devices
- online devices
- warning devices
- critical devices
- offline devices

These values are reused in summary cards and distribution UI.

### Filter and Search Layer
The app maintains filter state for:
- **search text**
- **status filter**
- **zone filter**

The table view is derived from these values so the displayed registry always reflects the current controls.

## 7. Key Architectural Decisions
1. **Use React for a single-screen dashboard** so state and UI logic stay manageable and extensible.
2. **Keep data local to the app** because the assignment is frontend-focused and does not require backend setup.
3. **Use derived calculations instead of hardcoded card values** so summary metrics remain consistent with the device dataset.
4. **Keep state lightweight** using local React state rather than a global state library.

## 8. Assumptions Made
1. The assignment primarily evaluates frontend implementation quality rather than a production-ready backend.
2. Device and fleet metrics can be represented with mock/generated data unless live API integration is explicitly required.
3. Analytics / Alerts / Settings are treated as dashboard shell navigation items in this version.
4. The project is optimized primarily for desktop dashboard usage, with responsive support added where feasible.

## 9. Trade-offs
- Most of the UI logic currently lives in `App.jsx` for simplicity within the time-boxed assignment.
- Mock data is used instead of a live API, which keeps the project self-contained but avoids backend data fetching concerns.
- Navigation items are present as part of the layout but do not yet route to separate pages.

## 10. Future Improvements
- split `App.jsx` into smaller reusable components
- connect to a real backend / fleet API
- add sorting, pagination, and export functionality
- improve accessibility and mobile behavior
- add automated tests

## 11. Local Development
   bash
npm install
npm run dev


To build:
   bash
npm run build


To preview:
   bash
npm run preview

