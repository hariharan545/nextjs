"use client";

import { useState } from "react";
import BlurText from "@/components/BlurText";
import MagnetLines from "@/components/MagnetLines";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function askGemini() {
    if (!input.trim()) return;

    setLoading(true);
    setOutput("");

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setOutput(data.text || "No response.");

    setLoading(false);
  }

  return (
    <main className="max-w-3xl mx-auto p-8 space-y-16">

      {/* Blur Text Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Blur Text</h2>
        <p className="text-lg">
          Hover to reveal 👉{" "}
          {/* <BlurText blurAmount="8px">This is blurred text</BlurText> */}
        </p>
        <p className="mt-3">
          Always visible 👉{" "}
          <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => console.log("Done!")}
  className="text-2xl mb-8 font-bold"
/>
        </p>
      </section>

      {/* Magnet Lines Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Magnet Lines</h2>
        <MagnetLines
        rows={9}
        columns={9}
        containerSize="60vmin"
        lineColor="tomato"
        lineWidth="0.8vmin"
        lineHeight="5vmin"
        baseAngle={0}
        style={{ margin: "2rem auto" }}
      />
      </section>

      {/* Gemini UI */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Ask Gemini</h2>

        <textarea
          rows={4}
          className="w-full p-3 border rounded"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={askGemini}
          className="px-5 py-2 mt-3 bg-black text-white rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask Gemini"}
        </button>

        {output && (
          <div className="p-4 mt-4 border rounded bg-gray-50 whitespace-pre-wrap">
            {output}
          </div>
        )}
      </section>
    </main>
  );
}
