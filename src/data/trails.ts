

export interface TrailProps {
  name: string;
  desc: string;
  distance: string;
  type: string;
  water: string;
  difficulty: string;
  season: string;
  seasoncats: string[];
  content: string;
  gallery?: string[];
    img?: string; // ✅ add this
  map?: string; // ✅ optional, since you also merge this
}

export interface TrailMetaProps {
  img: string;
  map: string;
  gallery: string[];
}

export type TrailsByLang = {
  he: Record<string, TrailProps>;
  en: Record<string, TrailProps>;
};
export type TrailsMeta = Record<string, TrailMetaProps>;



export const rawTrails: TrailsByLang = {
  he: {
    kziv: {
      name: "נחל כזיב",
      desc: "מסלול קסום בצפון, לאורך הנחל הצלול...",
      distance: "3.5 ק״מ",
      type: "לא מעגלי, דורש הקפצת רכבים",
      water: "כניסה לנחל",
      difficulty: "בינוני",
      season: "כל השנה",
      seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
      content: `
טענו בעבר ונמשיך לטעון- נחל כזיב הוא היפה שבנחלי ישראל!!
 מים זכים בצל עצי דולב ענקיים נותנים תחושב כאילו שאנחנו מטיילים בסלובניה או יוון. 
 הקאצ'- בשביל יופי כזה צריך להתאמץ ולעבור ירידה גדולה ועלייה גדולה אבל בהחלט שווה את זה. 
 מחניון הזיתים נרד בשביל כחול ותלול לכיוון עין טמיר. נרחץ בבריכות הטבעיות במים הזכים ונרד במורד הנחל בשביל הירוק עד העלייה במעלה קידה. נעלה במעלה השחור חזרה לכיוון פארק גורן. 
      `,
      gallery: ["/hi.jpg", "/hi.jpg", "/hi.jpg"],
    },
    yarkon: {
      name: "נחל הירקון",
      desc: "טיול משפחתי קליל ונעים...",
      distance: "2.5 ק״מ",
            type: "מעגלי",
      water: "כניסה לנחל",
      difficulty: "קל",
      season: "כל השנה",
      seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],

      content: `
נטייל בחלקים הנקיים של נהר הירקון המפתיע! 
מתחילים בטחנת אבו-ראבח ההיסטורית. 
טיול משפחות קליל ונעים לאורך הירקון, בו נוכל לעצור לבניית חלילים מצמח הקנה ולגלות שפע עקבות של בעלי חיים. 
המסלול משלב הליכה קלה לצד מים זורמים, צמחייה ירוקה והמון מקומות קטנים לעצירה ולגילוי. 
מתאים מאוד למשפחות עם ילדים צעירים שמחפשות חוויה מהנה ומעשירה קרוב לבית.
      `,
      gallery: ["/hi.jpg", "/hi.jpg"],
    },
        gachar: {
      name: "נחל גחר",
      desc: "טיול משפחתי קליל ונעים...",
      distance: "3.5 ק״מ",
            type: "מעגלי",
      water: "שכשוך רגליים",
      difficulty: "קל",
      season: "כל השנה",
      seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],

      content: `
אחד הנחלים הקסומים והמפתיעים. לא סתם נקרא בפי המקומיים יער הפיות. 
יער אקליפטי עם מטפסים שמגיעים עד השמיים. 
בשעות הבוקר יש מעט ערפילים שגורמים לו להרגיש כמו היער השחור. ההליכה קלילה ונעימה, הטבע קסום ואפילו יש עדרי פרות לעתים שרועות במקום. קק"ל עשתה עבודה נפלאה בהרחקת הכלים המוטוריים משטח הנחל. 
חוויה פראית ומקסימה. מחניון גחר יורדים בשביל צמוד לנחל עד לחניון פז ואז עולים בשביל עפר. מגיעים לבקתה מסתורים במעבה היער וחוזרים דרך הנחל הפראי לחניון גחר. 
      `,
      gallery: ["/hi.jpg", "/hi.jpg"],
    },
  },
  en: {
    kziv: {
      name: "Nahal Kziv",
      desc: "A magical trail in the north...",
      distance: "3.5 km",
            type: "Not circular - requires car pickup",
      water: "Yes",
      difficulty: "Medium",
      season: "Year-round",
            seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
      content: `
We have claimed in the past and will continue to claim - Nahal Kziv is the most beautiful of the rivers in Israel!!
Clear water in the shade of huge plane trees makes you think that you are traveling in Slovenia or Greece. 
The catch - for such beauty you have to make an effort and go through a big descent and a big ascent, but it is definitely worth it. 
From the olive parking lot we go down a steep blue path towards Ein Tamir. We bathe in the natural pools in the clear water and go down the stream on the green path until we reach Maale Kida. We ascend the black route towards Goren park. `,
      gallery: ["/hi.jpg", "/hi.jpg", "/hi.jpg"],
    },
    yarkon: {
      name: "Yarkon River",
      desc: "A light and family-friendly walk...",
      distance: "2.5 km",
            type: "Circular",
      water: "Yes",
      difficulty: "Easy",
      season: "Year-round",
                  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],

      content: `
We will hike the cleanest parts of the surprising Yarkon River! 
Starting at the historic Abu Rabah Mill. 
A light and pleasant family hike along the Yarkon, where we can stop to make flutes from the reed plant and discover plenty of animal tracks. 
The route combines easy walking alongside flowing water, green vegetation and lots of small places to stop and discover. 
Very suitable for families with young children who are looking for a fun and enriching experience close to home.
      `,
      gallery: ["/hi.jpg", "/hi.jpg"],
    },
            gachar: {
      name: "Nahal Gachar",
      desc: "A light and family-friendly walk...",
      distance: "3.5 km",
            type: "Circular",

      water: "Shallow",
      difficulty: "Easy",
      season: "Year-round",
                  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],

      content: `
One of the magical and surprising streams. It is not for nothing that the locals call it the fairy forest. 
An eucalypt forest with climbers that reach up to the sky. 
In the mornings there is a little mist that makes it feel like the Black Forest. The walk is light and pleasant, the nature is magical and there are even herds of cows sometimes grazing there. KKL-JNF did a wonderful job of keeping motorized vehicles away from the stream surface. 
A wild and charming experience. From the Gahar parking lot, you descend along a path next to the stream to the Paz parking lot, then ascend a dirt path. You arrive at a hidden cabin in the thick of the forest and return via the wild stream to the Gahar parking lot.`,
      gallery: ["/hi.jpg", "/hi.jpg"],
    },
  },
};

export const metatrailsmeta: TrailsMeta = {
        kziv: {

      img: '/נחל כזיב.webp',
      map: '',
  gallery: ["/hi.jpg", "/hi.jpg",  "/hi.jpg"]
        },
        yarkon: {

      img: '/hi.jpg',
            map: '',

  gallery: ["/hi.jpg",]
        },
        gachar: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },
};

/* -----------------------------------
   Merge language data + meta
----------------------------------- */
export const trails: TrailsByLang = (() => {
  const out: any = { he: {}, en: {} };

  (Object.keys(rawTrails) as ("he" | "en")[]).forEach((lang) => {
    Object.entries(rawTrails[lang]).forEach(([id, trail]) => {
      const meta = metatrailsmeta[id] ?? {};
      out[lang][id] = {
        ...trail,
        img: meta.img ?? trail.gallery?.[0],
        map: meta.map ?? "",
        gallery: Array.from(new Set([...(trail.gallery ?? []), ...(meta.gallery ?? [])])),
      };
    });
  });

  return out;
})();