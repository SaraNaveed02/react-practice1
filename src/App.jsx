import Button from "./component/button";
import ReactConcepts from "./component/content";
import Footer from "./component/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1f232a] text-white">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/mainlogo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-sm text-gray-400">v19.2</span>

          {/* Search (visual only) */}
          <div className="ml-6 hidden md:flex items-center bg-[#2a2f37] rounded-full px-4 py-2 w-72 text-gray-400">
            <span className="text-sm">Search</span>
            <span className="ml-auto text-xs bg-[#3a3f47] px-2 py-1 rounded">
              Ctrl K
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a className="hover:text-white" href="#">Learn</a>
          <a className="hover:text-white" href="#">Reference</a>
          <a className="hover:text-white" href="#">Community</a>
          <a className="hover:text-white" href="#">Blog</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center mt-28 px-4">
        <img
          src="/mainlogo.png"
          alt="Main Logo"
          className="w-28 h-28 mb-8"
        />

        <h1 className="text-6xl font-semibold mb-6">React</h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          The library for web and native user interfaces
        </p>

        <div className="flex gap-4">
         <Button  color="blue"  name="Learn React" />

        <Button color="red" name="Download React" />
        </div>
      </main>
      {/* content */}
      <div className="mt-20">
        <ReactConcepts />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
