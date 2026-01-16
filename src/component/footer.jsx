import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter replacement)
import { GiButterfly } from "react-icons/gi"; // Example for butterfly icon

export default function Footer() {
  return (
    <footer className="bg-[#1f232a] text-white px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1: Meta Open Source */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src="/metalogo.png" alt="Meta Logo" className="w-6 h-6"/>
            <span className="font-semibold">Meta OpenSource</span>
          </div>
          <p className="text-sm text-gray-400">Copyright © Meta Platforms, Inc</p>
          <p className="text-sm text-gray-400">uwu?</p>
        </div>

        {/* Column 2: Learn React */}
        <div className="space-y-2">
          <h3 className="font-bold">Learn React</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-white cursor-pointer">Quick Start</li>
            <li className="hover:text-white cursor-pointer">Installation</li>
            <li className="hover:text-white cursor-pointer">Describing the UI</li>
            <li className="hover:text-white cursor-pointer">Adding Interactivity</li>
            <li className="hover:text-white cursor-pointer">Managing State</li>
            <li className="hover:text-white cursor-pointer">Escape Hatches</li>
          </ul>
        </div>

        {/* Column 3: API Reference */}
        <div className="space-y-2">
          <h3 className="font-bold">API Reference</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-white cursor-pointer">React APIs</li>
            <li className="hover:text-white cursor-pointer">React DOM APIs</li>
          </ul>
        </div>

        {/* Column 4: Community */}
        <div className="space-y-2">
          <h3 className="font-bold">Community</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-white cursor-pointer">Code of Conduct</li>
            <li className="hover:text-white cursor-pointer">Meet the Team</li>
            <li className="hover:text-white cursor-pointer">Docs Contributors</li>
            <li className="hover:text-white cursor-pointer">Acknowledgements</li>
          </ul>
        </div>

        {/* Column 5: More */}
        <div className="space-y-2">
          <h3 className="font-bold">More</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">React Native</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <SiX className="hover:text-white cursor-pointer" />
            <GiButterfly className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
