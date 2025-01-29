# Docs Tutorial

This is a Next.js project that serves as a document editor with support for rich text editing and collaborative features. It utilizes Clerk for authentication, Liveblocks for real-time collaboration, and Convex for serverless functions.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheCaptain1810/docs-tutorial.git
   cd docs-tutorial
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables. Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

   Replace the placeholders with your actual Clerk and Convex API keys.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- **Rich Text Editing**: Built using Tiptap, allowing users to format text, insert images, and create tables.
- **Real-time Collaboration**: Users can edit documents simultaneously with Liveblocks integration.
- **Document Management**: Create, edit, and delete documents with a user-friendly interface.
- **Templates**: Start new documents from predefined templates.
- **Authentication**: Secure user authentication using Clerk.

## Project Structure

- `src/app`: Contains the main application files, including pages and components.
- `src/components`: Reusable UI components.
- `src/store`: State management using hooks.
- `src/constants`: Constants and configuration files.
- `src/extensions`: Custom Tiptap extensions for enhanced functionality.
- `convex`: Server-side functions and API definitions.

## Usage

### Creating a Document

1. Click on "Start a new document" to choose a template or create a blank document.
2. Use the toolbar to format text, insert images, or create tables.
3. Your changes will be saved automatically.

### Collaborating in Real-time

Invite other users to edit the document simultaneously. Changes made by any user will be reflected in real-time for all collaborators.

## Deployment

To deploy your application, you can use platforms like Vercel or Netlify. Follow their documentation for deploying Next.js applications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.


## Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production.
- [Clerk](https://clerk.dev) - Authentication for your applications.
- [Liveblocks](https://liveblocks.io) - Real-time collaboration made easy.
- [Convex](https://convex.dev) - Serverless functions for your applications.