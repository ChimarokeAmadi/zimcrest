# Job Match Dashboard

## Project Overview

This project is a **Job Match Dashboard** built using **Next.js, React, Tailwind CSS and Typescript**. It allows users to view job recommendations, visualize match scores, and apply for jobs. The project demonstrates **API handling, state management using Context API, and UI/UX best practices**.

## Features

- **Job List Component:** Displays job recommendations with match scores.
- **Match Score Visualization:** Uses a progress bar to indicate match percentage with color coding.
- **Job Details Component:** Opens a modal with detailed job information.
- **Apply Now Button:** Mock functionality to simulate job applications.
- **Responsive Design:** Adapts seamlessly across devices.

## Technologies Used

- **Frontend Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **API Handling:** Fetched from JSON file
- **Scripting:** TypeScript for type safety

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-repo/job-match-dashboard.git
   cd job-match-dashboard

   ```

2. Start the development server:
   npm run dev

3. Open the app in your browser:

   http://localhost:3000

## Project Structure

```
/src
  ├── app
  │   ├── components
  │   │   ├── JobList.tsx
  │   │   ├── JobDetails.tsx
  │   ├── Jobs
  │   │   ├── Jobs.ts
  │   ├── context
  │   │   ├── JobContext.tsx
  │   ├── globals.css
  │   ├── layout.tsx
  │   ├── page.tsx
```

## Usage

- Click on a job to view its details in a modal.
- Match scores are color-coded:
  - **Green (80%+)** – Strong match
  - **Yellow (50-79%)** – Medium match
  - **Red (<50%)** – Weak match
- The Apply button is a mock function; missing skills trigger an upskilling alert.

## API Handling

- Job data is fetched from a mock API (JSON file).
- User skills and match scores are predefined in the Mock API provided.

## License

This project is open-source. Feel free to modify and use it as needed!

---

```
Developed by Chimaroke Amadi ✅.
```
