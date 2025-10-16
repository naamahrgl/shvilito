import React, { useMemo, useState } from "react";
import { type TrailProps } from "../data/trails";
import { TW, Card, CardContent, Button } from "./ui";

interface TrailFilterProps {
  trails: Record<string, TrailProps>;
  lang: "he" | "en";
}

type FilterKey = "difficulty" | "type" | "water" | "seasoncats";

export default function TrailFilter({ trails, lang }: TrailFilterProps) {
  // selected filter values (empty string means not selected)
  const [selected, setSelected] = useState<Record<FilterKey, string>>({
    difficulty: "",
    type: "",
    water: "",
    seasoncats: "",
  });

  // filtered results (start with all)
  const [filteredTrails, setFilteredTrails] = useState<Record<string, TrailProps>>(trails);

  const t = {
    he: {
      difficulty: "רמת קושי",
      type: "סוג מסלול",
      water: "נגישות למים",
      seasoncats: "עונה",
      reset: "איפוס",
      readMore: "לקריאה נוספת",
    },
    en: {
      difficulty: "Difficulty",
      type: "Type",
      water: "Water Access",
      seasoncats: "Season",
      reset: "Reset",
      readMore: "Read More",
    },
  }[lang];

  const filterKeys: FilterKey[] = ["difficulty", "type", "water", "seasoncats"];

  // compute options for each filter key from the data (normalize string | string[])
  const filterOptions = useMemo(() => {
    const opts: Record<FilterKey, string[]> = {
      difficulty: [],
      type: [],
      water: [],
      seasoncats: [],
    };

    filterKeys.forEach((key) => {
      const vals = Object.values(trails)
        .flatMap((tr) => {
          const v = tr[key];
          if (Array.isArray(v)) return v;
          if (typeof v === "string" && v !== "") return [v];
          return [];
        })
        .filter(Boolean);
      opts[key] = Array.from(new Set(vals));
    });

    return opts;
  }, [trails]);

  // season matching: "Year-round"/"כל השנה" matches any selected season
  const matchesSeason = (trailSeason: string | string[] | undefined, selectedSeason: string) => {
    if (!selectedSeason) return true;
    if (!trailSeason) return false;
    if (trailSeason === "Year-round" || trailSeason === "כל השנה") return true;
    if (Array.isArray(trailSeason)) return trailSeason.includes(selectedSeason);
    return trailSeason === selectedSeason;
  };

  // apply filters to data
  const applyFilters = (updated: Record<FilterKey, string>) => {
    const result = Object.fromEntries(
      Object.entries(trails).filter(([_, tr]) => {
        return (Object.entries(updated) as [FilterKey, string][]).every(([k, v]) => {
          if (!v) return true; // not filtering this key

          const trailValue = (tr as any)[k];

          if (k === "seasoncats") {
            return matchesSeason(trailValue, v);
          }

          if (Array.isArray(trailValue)) return trailValue.includes(v);
          return trailValue === v;
        });
      })
    );
    return result;
  };

  const handleSelect = (key: FilterKey, value: string) => {
    const updated = { ...selected, [key]: selected[key] === value ? "" : value };
    setSelected(updated);
    setFilteredTrails(applyFilters(updated));
  };
  // accordion open key
const [openKey, setOpenKey] = useState<FilterKey | null>(null);

// show/hide entire filters bar
const [showFilters, setShowFilters] = useState(false);




return (
  <>
    {/* Toggle entire filters bar */}
    <div className="max-w-6xl mx-auto px-4 py-4">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mx-auto flex items-center gap-2 px-4 py-2 bg-[#f5eee7] rounded-full shadow-sm text-gray-700 font-semibold hover:bg-[#eaddcc] transition"
      >
        {showFilters ? (lang === "he" ? "סגירת סינונים ✖️" : "Hide Filters ✖️") : (lang === "he" ? "הצגת סינונים 🔍" : "Show Filters 🔍")}
      </button>

      {/* Filters accordion */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showFilters ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
          {filterKeys.map((key) => (
            <div
              key={key}
              className="w-full md:w-[23%] border rounded-2xl bg-white shadow-sm overflow-hidden text-center"
            >
              {/* Header (accordion toggle) */}
              <button
                onClick={() => setOpenKey(openKey === key ? null : key)}
                className="w-full flex justify-between items-center px-4 py-2 text-grey-600 hover:text-black transition font-semibold text-gray-700 text-sm"
              >
                <span className="flex-1 text-center break-words leading-tight">{t[key]}</span>
                <span
                  className={`transform transition-transform duration-300 ml-2 ${
                    openKey === key ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Options */}
              <div
                className={`transition-all duration-300 ${
                  openKey === key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden px-3 pb-2`}
              >
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {filterOptions[key].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleSelect(key, value)}
                      className={`${TW.buttons.base} ${
                        selected[key] === value
                          ? TW.buttons.primary
                          : `${TW.buttons.secondary} bg-transparent border border-gray-300`
                      } text-sm py-1 px-3 text-center`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Trails grid */}
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(filteredTrails).map(([key, trail]) => (
          <Card key={key} className="overflow-hidden shadow-lg">
            <img src={trail.img} className="w-full h-48 object-cover" />
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="text-2xl font-semibold">{trail.name}</h2>
              <p className="text-gray-600">{trail.desc}</p>
              <div className="flex flex-col items-center text-sm text-gray-500 space-y-1">
                <span>📏 {trail.distance}</span>
                <span>⭕ {trail.type}</span>
                <span>💧 {trail.water}</span>
                <span>⛰️ {trail.difficulty}</span>
                <span>🍂 {trail.season}</span>
              </div>
              <Button
                text={lang === "he" ? "לקריאה נוספת" : "Read More"}
                href={`/${lang}/${key}`}
                className="mt-4"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </>
);


}
