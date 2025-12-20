export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">
            Tailwind CSS Tutorial
          </h1>
          <div className="hidden md:flex gap-6 text-gray-700">
            <a href="#intro" className="hover:text-indigo-600">Intro</a>
            <a href="#install" className="hover:text-indigo-600">Installation</a>
            <a href="#basics" className="hover:text-indigo-600">Basics</a>
            <a href="#examples" className="hover:text-indigo-600">Examples</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Introduction */}
        <section id="intro">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Use Tailwind CSS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tailwind CSS is a <span className="font-semibold">utility-first CSS framework</span>
            that lets you design directly in your HTML or JSX using predefined classes.
            Instead of writing custom CSS files, you apply styles using class names like
            <code className="bg-gray-200 px-1 mx-1 rounded">bg-blue-500</code> or
            <code className="bg-gray-200 px-1 mx-1 rounded">text-center</code>.
          </p>
        </section>

        {/* Installation */}
        <section id="install" className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            Step 1: Install Tailwind CSS
          </h3>
          <p className="text-gray-700 mb-4">
            If you are using <strong>Next.js</strong>, Tailwind can be installed easily.
            After creating a Next.js project, run the Tailwind installation commands
            and configure the Tailwind files.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <p>npm install -D tailwindcss postcss autoprefixer</p>
            <p>npx tailwindcss init -p</p>
          </div>
        </section>

        {/* Basics */}
        <section id="basics">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Step 2: Learn the Basics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Colors</h4>
              <p className="text-gray-600">
                Tailwind uses classes like <code>bg-red-500</code> or
                <code>text-blue-600</code> to apply colors.
              </p>
              <div className="h-16 bg-red-500 rounded mt-3"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Spacing</h4>
              <p className="text-gray-600">
                Padding and margin use <code>p-</code> and <code>m-</code> classes.
                Example: <code>p-4</code>, <code>mt-6</code>.
              </p>
              <div className="bg-indigo-500 text-white p-4 mt-3 rounded">
                Padding Example
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Typography</h4>
              <p className="text-gray-600">
                Text size and style are controlled using classes like
                <code>text-xl</code> or <code>font-bold</code>.
              </p>
              <p className="text-xl font-bold mt-3 text-indigo-600">
                Sample Text
              </p>
            </div>

          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-indigo-600">
            Step 3: Practical Examples
          </h3>

          {/* Buttons */}
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-3">Buttons</h4>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Primary
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Success
              </button>
              <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-4 py-2 rounded">
                Outline
              </button>
            </div>
          </div>

          {/* Card Layout */}
          <div>
            <h4 className="font-bold text-lg mb-3">Card Layout</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                Simple
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                Responsive
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                Clean Design
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Why Use Tailwind CSS?
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Faster development</li>
            <li>No need to write custom CSS</li>
            <li>Consistent and responsive design</li>
            <li>Perfect for modern frameworks like Next.js</li>
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="font-medium">Tailwind CSS Tutorial Blog</p>
        <p className="text-sm text-gray-400 mt-1">
          Built with Next.js and Tailwind CSS
        </p>
      </footer>

    </div>
  );
}
