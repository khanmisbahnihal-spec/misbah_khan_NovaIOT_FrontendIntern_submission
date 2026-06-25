# Misbah Khan - NovaIoT Frontend Intern Submission

## Overview
This project is my submission for the NovaIoT Frontend Intern assignment.

It is a **Fleet Health Dashboard** built as a frontend monitoring interface for a fleet / IoT operations use case. The application provides an enterprise-style dashboard experience for monitoring device health, alert levels, and operational status across a large connected fleet.

The project is built using **React, Vite, JavaScript, CSS, and Node.js/npm**.

## Features
### Dashboard Overview
- Fleet overview dashboard with enterprise-style layout
- Sidebar navigation for **Overview, Analytics, Alerts, and Settings**
- Header area with breadcrumb navigation, system operational status chip, notification badge, and admin profile display

### Monitoring Metrics
- Summary cards for Total Devices, Online Devices, Warning Devices, and Critical Devices
- Fleet uptime / alert summary card in the sidebar
- Status distribution bar for quick visual health monitoring

### Device Registry
- Search devices by **name or ID**
- Filter devices by **status**
- Filter devices by **zone**
- Scrollable device registry table
- Empty-state handling when no devices match filters

### UI / UX
- Clean card-based dashboard layout
- Status badges for Online / Warning / Critical / Offline
- Responsive behavior for smaller screen sizes

## Tech Stack
- **React**
- **Vite**
- **JavaScript (JSX)**
- **CSS**
- **Node.js / npm**

## Project Structure
```bash
Misbah_Khan_NovaIoT_FrontendIntern_Submission/
1-> index.html
2-> package.json
3-> vite.config.js
4-> README.md
5-> ARCHITECTURE_NOTES.md
6-> AI_USAGE_LOG.md
7-> src/
    7.1-> App.jsx
    7.2-> main.jsx
    7.3-> index.css
8-> dist/   (generated build output)
```

## How It Works
The application renders a fleet monitoring dashboard with mock/generated device data. It calculates fleet summary metrics such as total, online, warning, critical, and offline counts, then displays them across summary cards and a visual distribution bar.

The dashboard also includes a searchable and filterable device registry table. Users can filter by:
- device name / ID
- device status
- zone

## Setup Instructions
### 1) Clone the repository
   bash
git clone <your-repository-link>


### 2) Move into the project folder
   bash
cd Misbah_Khan_NovaIoT_FrontendIntern_Submission


### 3) Install dependencies
   bash
npm install


### 4) Run the development server
   bash
npm run dev


### 5) Build for production
   bash
npm run build


### 6) Preview the production build
   bash
npm run preview


## Available Scripts
- `npm run dev` → starts the Vite development server
- `npm run build` → creates the production build
- `npm run preview` → previews the production build locally

## Links
- **Repository:** [Add your GitHub repository link here]
- **Deployed Preview:** [Add your deployed preview link here]
- **Demo Video:** [videolink[https://drive.google.com/file/d/1FJa9MZBCeonfqlfvuowO2mj1QtS9sy3w/view?usp=sharing]]

## Assumptions
- The assignment focuses on the **frontend dashboard experience**, so fleet data is represented using generated/mock data instead of a live backend integration.
- Authentication / authorization flows are treated as outside scope unless explicitly required.
- The dashboard is designed primarily for desktop monitoring usage, with responsive behavior added for smaller screens where practical.

## Future Improvements
- real backend / API integration for fleet data
- separate pages for Analytics, Alerts, and Settings
- pagination or virtualized rendering for very large device tables
- richer charts and trend analytics
- automated tests for filtering and UI behavior
- improved accessibility and keyboard navigation

## Documentation
Additional submission documentation is included in:
- `ARCHITECTURE_NOTES.md`
- `AI_USAGE_LOG.md`

## Submission Name
`Misbah_Khan_NovaIoT_FrontendIntern_Submission`
