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



  return (
    <>
      {/* Minimal filter bar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {filterKeys.map((key) => (
            <div key={key} className="flex flex-col items-center min-w-[120px]">
              <span className={`${TW.text.secondary} mb-1`}>{t[key]}</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {filterOptions[key].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleSelect(key, value)}
                    className={`${TW.buttons.base} ${
                      selected[key] === value
                        ? TW.buttons.primary
                        : `${TW.buttons.secondary} bg-transparent border border-gray-300`
                    } text-sm py-1 px-3`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}


        </div>
      </div>

      {/* Trails grid (renders filtered results) */}
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
                <Button text={lang === "he" ? "לקריאה נוספת" : "Read More"} href={`/${lang}/${key}`} className="mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
