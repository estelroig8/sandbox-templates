import React, { useState } from "react";
  { name: "Julier Pass", x: 52, y: 40 },
  { name: "Bernina Pass", x: 70, y: 50 },
  { name: "Maloja Pass", x: 48, y: 50 },
  { name: "Ofen Pass", x: 65, y: 55 },
  { name: "Umbrail Pass", x: 78, y: 62 },
  { name: "Stelvio Pass", x: 82, y: 66 },
  { name: "Foscagno Pass", x: 86, y: 55 },
  { name: "Forcola di Livigno", x: 74, y: 52 }
];

export default function AlpsPassChecklistPoster() {
  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-neutral-50 min-h-screen">
      {/* LEFT: CHECKLIST */}
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">Alps Road Bike Pass Challenge</h1>
          <p className="text-sm text-neutral-600 mb-4">
            Tick off each mountain pass as you ride them.
          </p>

          <div className="space-y-3">
            {passes.map((p) => (
              <div
                key={p.name}
                onClick={() => toggle(p.name)}
                className="flex items-center justify-between p-3 rounded-xl border cursor-pointer hover:bg-neutral-100"
              >
                <span className="font-medium">{p.name}</span>
                <div className="w-6 h-6 border rounded flex items-center justify-center">
                  {checked[p.name] && <Check className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RIGHT: MAP */}
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Route Map (Swiss / Alps Overview)</h2>

          <svg viewBox="0 0 100 80" className="w-full h-[500px] bg-blue-50 rounded-xl">
            {/* rough Alps silhouette */}
            <path
              d="M10,60 L20,40 L30,50 L40,30 L55,45 L65,25 L80,40 L90,30"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
            />

            {passes.map((p) => (
              <g key={p.name}>
                <circle cx={p.x} cy={p.y} r="2" fill="#ef4444" />
                <text x={p.x + 2} y={p.y} fontSize="2.5" fill="#111827">
                  {p.name.split(" ")[0]}
                </text>
              </g>
            ))}
          </svg>

          <p className="text-xs text-neutral-500 mt-3">
            Approximate positions for visualization purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
