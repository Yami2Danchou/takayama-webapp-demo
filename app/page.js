"use client"; // Required for useState in Next.js 13+

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState({}); // track which code block is copied

  // Utility function to copy text
  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => setCopied({ ...copied, [id]: false }), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-indigo-600">
            How to Use Tailwind CSS
          </h1>
          <p className="text-gray-600 mt-2">
            A Step-by-Step Tutorial Blog using Next.js and Tailwind CSS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Tailwind CSS is a utility-first CSS framework that allows developers to
            design user interfaces directly in their HTML or JSX files. Instead of
            writing traditional CSS, Tailwind provides predefined classes that control
            layout, color, spacing, and responsiveness.
          </p>
        </section>

              {/* Step 1 */}
        <section>
          <h3 className="text-xl font-bold mb-2 text-black">
            Step 1: Download Node.js, GitHub Desktop, Git, And VS Code
          </h3>
          <p className="text-gray-700">
            Make sure you have Node.js, GitHub Desktop, VS Code and Git installed on your computer.
          </p>
        </section>

        {/* Step 2 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Step 2: Create a GitHub Repository
          </h3>
          <p className="text-gray-700">
            First, open GitHub Desktop and sign in to your account. Create a new
            repository with your preferred name and publish it to
            GitHub. This repository will store all your project files.
          </p>
        </section>

     

        {/* Step 3 */}
        <section>
          <h3 className="text-xl font-bold mb-2 text-black">
            Step 3: Open the Project in Visual Studio Code
          </h3>
          <p className="text-gray-700">
            In GitHub Desktop, click <strong>Open in Visual Studio Code</strong>.
            Inside VS Code, open the Integrated Terminal. This terminal will be used
            to run Node.js and Tailwind-related commands.
          </p>
        </section>

       
     

 {/* Step 4 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Step 4: Verify Installed Tools
          </h3>
          <p className="text-gray-700 mb-3">
            Before installing Tailwind CSS, verify that the required tools are installed.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
            node -v <br />
            npm -v <br />
            git -v
          </div>
        </section>

        {/* Step 5 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Step 5: Create a New Next.js Project
          </h3>
          <p className="text-gray-700 mb-3">
            Inside your project folder, create a Next.js app. During setup, enable
            Tailwind CSS when prompted.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
            npx create-next-app@latest .
          </div>
        </section>

              {/* Step 6: Create Next.js Project */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Step 6: Add the Boilerplate Page
          </h3>
          <p className="text-gray-700 mb-4">
 Copy the provided <strong>page.js</strong> code below
            and paste it into <strong>app/page.js</strong>. This file is where Tailwind
            CSS classes are applied.          </p>

          <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <pre className="text-gray-100 p-6 flex-1 overflow-x-auto">
              <code>{`import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">...........
            Press copy to copy the code`}</code>
            </pre>
            <div className="flex items-center justify-center bg-gray-800 p-4 border-l border-gray-700">
              <button
                onClick={() => copyToClipboard("nextjs", `import Image from "next/image";\n
\n
export default function Home() {\n
  return (\n
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">\n
      {/* Navigation Menu */}\n
      <nav className="bg-white shadow-lg">\n
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n
          <div className="flex justify-between items-center h-16">\n
            <div className="flex items-center">\n
              <h1 className="text-2xl font-bold text-indigo-600">TailwindDemo</h1>\n
            </div>\n
            <div className="hidden md:flex space-x-8">\n
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>\n
              <a href="#colors" className="text-gray-700 hover:text-indigo-600 transition">Colors</a>\n
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>\n
              <a href="#text" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>\n
            </div>\n
            <button className="md:hidden">\n
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />\n
              </svg>\n
            </button>\n
          </div>\n
        </div>\n
      </nav>\n
\n
      {/* Hero Section */}\n
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">\n
        <div className="text-center">\n
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">\n
            Tailwind CSS Components\n
          </h1>\n
          <p className="text-xl text-gray-600 mb-8">\n
            A showcase of beautiful, responsive components built with Tailwind CSS\n
          </p>\n
        </div>\n
\n
        {/* Buttons Section */}\n
        <section id="buttons" className="mb-16">\n
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buttons</h2>\n
          <div className="bg-white rounded-lg shadow-md p-8">\n
            <div className="flex flex-wrap gap-4">\n
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">\n
                Primary Button\n
              </button>\n
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">\n
                Success Button\n
              </button>\n
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition">\n
                Danger Button\n
              </button>\n
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">\n
                Secondary Button\n
              </button>\n
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">\n
                Outline Button\n
              </button>\n
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition">\n
                Gradient Button\n
              </button>\n
            </div>\n
          </div>\n
        </section>\n
\n
        {/* Colors Section */}\n
        <section id="colors" className="mb-16">\n
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>\n
          <div className="bg-white rounded-lg shadow-md p-8">\n
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Red</p>\n
              </div>\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Blue</p>\n
              </div>\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-green-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Green</p>\n
              </div>\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-yellow-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Yellow</p>\n
              </div>\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-purple-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Purple</p>\n
              </div>\n
              <div className="text-center">\n
                <div className="w-full h-24 bg-pink-500 rounded-lg mb-2"></div>\n
                <p className="text-sm font-medium">Pink</p>\n
              </div>\n
            </div>\n
          </div>\n
        </section>\n
\n
        {/* Typography Section */}\n
        <section id="text" className="mb-16">\n
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>\n
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">\n
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>\n
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>\n
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>\n
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>\n
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>\n
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>\n
            <p className="font-bold text-gray-900">This is bold text.</p>\n
            <p className="italic text-gray-700">This is italic text.</p>\n
            <p className="underline text-blue-600">This is underlined text.</p>\n
          </div>\n
        </section>\n
\n
        {/* Layouts Section */}\n
        <section id="layouts" className="mb-16">\n
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>\n
          {/* Grid Layout */}\n
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">\n
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>\n
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">\n
                <h4 className="font-bold text-lg mb-2">Card 1</h4>\n
                <p>This is a card in a responsive grid layout.</p>\n
              </div>\n
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">\n
                <h4 className="font-bold text-lg mb-2">Card 2</h4>\n
                <p>Grid automatically adjusts to screen size.</p>\n
              </div>\n
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">\n
                <h4 className="font-bold text-lg mb-2">Card 3</h4>\n
                <p>Three columns on large screens, stacked on mobile.</p>\n
              </div>\n
            </div>\n
          </div>\n
\n
          {/* Flex Layout */}\n
          <div className="bg-white rounded-lg shadow-md p-8">\n
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>\n
            <div className="flex flex-wrap gap-4 justify-center">\n
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>\n
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>\n
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>\n
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>\n
            </div>\n
          </div>\n
        </section>\n
\n
        {/* Image Section */}\n
        <section className="mb-16">\n
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>\n
          <div className="bg-white rounded-lg shadow-md p-8">\n
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">\n
              <div>\n
                <img \n
                  src="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+1" \n
                  alt="Placeholder" \n
                  className="w-full rounded-lg shadow-md"\n
                />\n
                <p className="mt-2 text-center font-medium">Rounded Image</p>\n
              </div>\n
              <div>\n
                <img \n
                  src="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Image+2" \n
                  alt="Placeholder" \n
                  className="w-full rounded-full shadow-md"\n
                />\n
                <p className="mt-2 text-center font-medium">Circular Image</p>\n
              </div>\n
              <div>\n
                <img \n
                  src="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Image+3" \n
                  alt="Placeholder" \n
                  className="w-full shadow-2xl"\n
                />\n
                <p className="mt-2 text-center font-medium">Shadow Image</p>\n
              </div>\n
            </div>\n
          </div>\n
        </section>\n
      </div>\n
\n
      {/* Footer */}\n
      <footer className="bg-gray-800 text-white py-8">\n
        <div className="max-w-7xl mx-auto px-4 text-center">\n
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>\n
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial project</p>\n
        </div>\n
      </footer>\n
    </div>\n
  );\n
}\n
`
)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition"
              >
                {copied["nextjs"] ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </section>


        {/* Step 7 */}
        <section className="bg-white p-6 rounded-lg shadow">
  <h3 className="text-xl font-bold text-indigo-600 mb-2">
    Step 7: Use Tailwind Utility Classes
  </h3>
  <p className="text-gray-700 mb-4">
    Tailwind styles elements using utility classes such as colors, spacing,
    typography, borders, shadows, and flex/grid layouts. Experiment with them to see instant results.
  </p>

  <div className="flex gap-4 flex-wrap">
    <div className="bg-blue-500 text-white p-4 rounded">bg-blue-500</div>
    <div className="bg-green-500 text-white p-4 rounded">p-4 spacing</div>
    <div className="text-xl font-bold text-indigo-600">text-xl font-bold</div>
    <div className="border-2 border-gray-400 p-4 rounded">border-2</div>
    <div className="shadow-lg p-4 rounded bg-white">shadow-lg</div>
    <div className="flex justify-center items-center bg-gray-200 p-4 rounded w-32 h-32">
      flex + justify-center + items-center
    </div>
    <div className="grid grid-cols-2 gap-2 bg-gray-100 p-4 rounded w-32">
      <div className="bg-red-400 h-8"></div>
      <div className="bg-blue-400 h-8"></div>
      <div className="bg-green-400 h-8"></div>
      <div className="bg-yellow-400 h-8"></div>
    </div>
    <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition">
      Hover Effect
    </button>
  </div>
</section>




        {/* Step 8 */}
        <section className="bg-white p-6 rounded-lg shadow">
  <h3 className="text-xl font-bold text-indigo-600 mb-2">
    Step 8: Apply Responsive Design
  </h3>
  <p className="text-gray-700 mb-4">
    Tailwind uses responsive prefixes such as <strong>sm</strong>, <strong>md</strong>, <strong>lg</strong>, and <strong>xl</strong> to style elements at different screen sizes.
  </p>

  {/* Responsive Text */}
  <div className="bg-indigo-500 text-white p-4 rounded text-center
                  text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl mb-6">
    Responsive Text Example
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="bg-red-400 p-4 rounded text-white text-center">Col 1</div>
    <div className="bg-blue-400 p-4 rounded text-white text-center">Col 2</div>
    <div className="bg-green-400 p-4 rounded text-white text-center">Col 3</div>
    <div className="bg-yellow-400 p-4 rounded text-white text-center">Col 4</div>
  </div>

  
</section>

  {/* Step 9 */}
        <section>
          <h3 className="text-xl font-bold mb-2 text-black">
            Step 9: Run the Web App Locally
          </h3>
          <p className="text-gray-700 mb-3">
            Start the development server to check if Tailwind CSS is working properly.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
            npm run dev
          </div>
        </section>



        {/* Step 10 */}
        <section>
          <h3 className="text-xl font-bold mb-2 text-black">
            Step 10: Commit and Push to GitHub
          </h3>
          <p className="text-gray-700">
            Once your changes are complete, commit your work and push it to your
            GitHub repository using GitHub Desktop.
          </p>
        </section>

        {/* Step 11 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Step 11: Deploy Using Vercel
          </h3>
          <p className="text-gray-700">
            Finally, deploy your project using Vercel. Sign in with GitHub, select
            your repository, and deploy your web app.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            By following these steps, Tailwind CSS is successfully used inside a
            Next.js application. This approach is efficient, beginner-friendly,
            and follows industry best practices for modern web development.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Tailwind Quick Demo</h2>
  <p className="text-gray-700 mb-6">
    Each element below has its own code block and copy button. Labels show which utilities are applied.
  </p>

  {/* Buttons Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Buttons</h3>
    <div className="flex gap-4 flex-wrap items-center mb-3">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
        Primary
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition">
        Success
      </button>
    </div>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">Primary</button>
<button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition">Success</button>`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "button-demo",
`<button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">Primary</button>
<button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition">Success</button>`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["button-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>

  {/* Color Palette Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Color Palette</h3>
    <div className="grid grid-cols-6 gap-4 mb-3">
      <div className="w-full h-16 bg-red-500 rounded flex items-end justify-center text-white text-xs">red-500</div>
      <div className="w-full h-16 bg-blue-500 rounded flex items-end justify-center text-white text-xs">blue-500</div>
      <div className="w-full h-16 bg-green-500 rounded flex items-end justify-center text-white text-xs">green-500</div>
    </div>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<div class="w-full h-16 bg-red-500 rounded"></div>
<div class="w-full h-16 bg-blue-500 rounded"></div>
<div class="w-full h-16 bg-green-500 rounded"></div>`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "color-demo",
`<div class="w-full h-16 bg-red-500 rounded"></div>
<div class="w-full h-16 bg-blue-500 rounded"></div>
<div class="w-full h-16 bg-green-500 rounded"></div>`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["color-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>

  {/* Typography Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Typography</h3>
    <p className="text-xl font-bold text-gray-900 mb-2">Heading 1 - Extra Large <span className="text-xs text-gray-400 ml-2">text-xl font-bold</span></p>
    <p className="text-lg text-gray-700 italic mb-2">Italic text example <span className="text-xs text-gray-400 ml-2">italic</span></p>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<p class="text-xl font-bold text-gray-900">Heading 1 - Extra Large</p>
<p class="text-lg text-gray-700 italic">Italic text example</p>`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "typography-demo",
`<p class="text-xl font-bold text-gray-900">Heading 1 - Extra Large</p>
<p class="text-lg text-gray-700 italic">Italic text example</p>`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["typography-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>

  {/* Grid Layout Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Grid Layout</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
      <div className="bg-blue-400 text-white p-4 rounded text-center">Card 1</div>
      <div className="bg-green-400 text-white p-4 rounded text-center">Card 2</div>
      <div className="bg-purple-400 text-white p-4 rounded text-center">Card 3</div>
    </div>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-blue-400 p-4 rounded text-white">Card 1</div>
  <div class="bg-green-400 p-4 rounded text-white">Card 2</div>
  <div class="bg-purple-400 p-4 rounded text-white">Card 3</div>
</div>`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "grid-demo",
`<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-blue-400 p-4 rounded text-white">Card 1</div>
  <div class="bg-green-400 p-4 rounded text-white">Card 2</div>
  <div class="bg-purple-400 p-4 rounded text-white">Card 3</div>
</div>`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["grid-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>

  {/* Flex Layout Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Flex Layout</h3>
    <div className="flex flex-wrap gap-4 justify-center mb-3">
      <div className="bg-red-500 text-white p-4 rounded">Item 1</div>
      <div className="bg-orange-500 text-white p-4 rounded">Item 2</div>
      <div className="bg-yellow-500 text-white p-4 rounded">Item 3</div>
    </div>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<div class="flex flex-wrap gap-4 justify-center">
  <div class="bg-red-500 p-4 rounded text-white">Item 1</div>
  <div class="bg-orange-500 p-4 rounded text-white">Item 2</div>
  <div class="bg-yellow-500 p-4 rounded text-white">Item 3</div>
</div>`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "flex-demo",
`<div class="flex flex-wrap gap-4 justify-center">
  <div class="bg-red-500 p-4 rounded text-white">Item 1</div>
  <div class="bg-orange-500 p-4 rounded text-white">Item 2</div>
  <div class="bg-yellow-500 p-4 rounded text-white">Item 3</div>
</div>`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["flex-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>

  {/* Images Demo */}
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-black">Images</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
      <div className="flex flex-col items-center">
        <img src="https://i.pinimg.com/736x/b5/b2/54/b5b254178045d26b5658de201a8bcd7b.jpg" className="rounded shadow-md" />
        <span className="text-xs text-gray-400 mt-1">rounded shadow-md</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/fb4b69163535371.Y3JvcCw2MDYsNDc0LDQwNywyMzU.png" className="rounded-full shadow-md" />
        <span className="text-xs text-gray-400 mt-1">rounded-full shadow-md</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ORxW1tpLXm1LdO9aYLLROgTaPjn2FKBBeQ&s" className="rounded-lg shadow-2xl" />
        <span className="text-xs text-gray-400 mt-1">rounded-lg shadow-2xl</span>
      </div>
    </div>
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow mb-2">
      <pre className="text-gray-100 p-4 flex-1 overflow-x-auto">
        <code>{`<img src="..." class="rounded shadow-md" />
<img src="..." class="rounded-full shadow-md" />
<img src="..." class="rounded-lg shadow-2xl" />`}</code>
      </pre>
      <div className="flex items-center justify-center bg-gray-800 p-2 border-l border-gray-700">
        <button
          onClick={() =>
            copyToClipboard(
              "images-demo",
`<img src="..." class="rounded shadow-md" />
<img src="..." class="rounded-full shadow-md" />
<img src="..." class="rounded-lg shadow-2xl" />`
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded transition"
        >
          {copied["images-demo"] ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="font-semibold">Tailwind CSS Tutorial Blog</p>
        <p className="text-sm text-gray-400">
          Built using Next.js, Tailwind CSS, GitHub, and Vercel
        </p>
      </footer>

    </div>
  );
}
