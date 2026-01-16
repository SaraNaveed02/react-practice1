import React from "react";

export default function ReactConcepts() {
  return (
    <div className="p-6 space-y-8 text-white">
      {/* 1. Props */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-lg shadow-md">
        <img src="/props.png" alt="Props" className="w-32 h-32 object-contain" />
        <div>
          <h2 className="text-2xl font-bold mb-2">1. Props</h2>
          <p>
            Props stand for <strong>properties</strong>. 
            Ye parent component se child component ko data pass karne ke liye use hota hai.
          </p>
        </div>
      </section>

      {/* 2. JSX */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-lg shadow-md">
        <img src="/jsx.png" alt="JSX" className="w-32 h-32 object-contain" />
        <div>
          <h2 className="text-2xl font-bold mb-2">2. JSX</h2>
          <p>
            JSX stands for <strong>JavaScript XML</strong>. 
            Ye hume HTML aur JavaScript ko ek sath likhne ki suvidha deta hai.
          </p>
        </div>
      </section>

      {/* 3. State */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-lg shadow-md">
        <img src="/state.png" alt="State" className="w-32 h-32 object-contain" />
        <div>
          <h2 className="text-2xl font-bold mb-2">3. State</h2>
          <p>
            State memory ki tarah hoti hai. Ye component ke andar data store karta hai.
            Jab bhi state ki value change hoti hai, React automatically component ko re-render kar deta hai.
          </p>
        </div>
      </section>

      {/* 4. Reconcile */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-lg shadow-md">
        <img src="/reconcile.webp" alt="Reconcile" className="w-32 h-32 object-contain" />
        <div>
          <h2 className="text-2xl font-bold mb-2">4. Reconcile</h2>
          <p>
            React apne paas project ki <strong>virtual DOM</strong> copy bana kar rakhta hai. 
            Jab user kisi button ya element par click karta hai, React old virtual DOM aur new code ko compare karta hai aur sirf change wale part ko update karta hai.
          </p>
          <p>
            Doosra way: React dependency versions ko check karta hai. Agar versions match nahi karte, toh error throw kar deta hai.
          </p>
        </div>
      </section>

      {/* 5. Single Page Application */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-lg shadow-md">
        <img src="/spa.jpg" alt="SPA" className="w-32 h-32 object-contain" />
        <div>
          <h2 className="text-2xl font-bold mb-2">5. Single Page Application (SPA)</h2>
          <p>
            SPA me website bar-bar refresh nahi hoti. 
            Jab aap kisi link par click karte hain, poora page reload nahi hota; sirf woh component ya hissa update hota hai jahan change ki zarurat hoti hai.
          </p>
        </div>
      </section>
    </div>
  );
}
