

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
    arbel_hamam: {
  name: "שביל ישראל | ממצפה עד – ואדי חמאם",
  desc: "מסלול מרהיב בין הרים, מצוקים ונחל דרמטי",
  distance: "8 ק\"מ",
  type: "לא מעגלי",
  water: "אין",
  difficulty: "בינוני",
  season: "נובמבר עד אפריל",
  seasoncats: ["חורף", "אביב"],
  content: `
מסלול מרהיב העולה מבקעת ארבל להר ארבל.
יורד מהר ארבל דרך המצודה העות'מאנית עד ליישוב הבדואי ואדי אל חמאם.
שביל מגוון עם תצפיות פתוחות, קטעי ירידה מאתגרים ומפגש עם נחל דרמטי.
מתאים למטיילים עם כושר בינוני שמחפשים טבע גדול ונוף משתנה.
`,
},

osfiya_oren: {
  name: "שביל ישראל | עוספיא – חניון נחל אורן",
  desc: "הליכה קלאסית בכרמל בין חורש ושבילים פתוחים",
  distance: "12 ק\"מ",
  type: "לא מעגלי",
  water: "מספר גבים בנחל חיק",
  difficulty: "בינוני",
  season: "כל השנה",
  seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
  content: `
הליכה קלאסית בכרמל בין חורש ים־תיכוני צפוף לשבילים פתוחים.
משלב ירידות נוחות, מעיינות עונתיים וצל רב לאורך הדרך.
מסלול זורם ונעים שמרגיש רחוק מהעיר למרות הקרבה אליה.
`,
},

yam_elyam_montfort: {
  name: "שביל ים אל ים | חניון המונפורט – חניון אבירים",
  desc: "קטע ירוק במיוחד בלב הגליל המערבי",
  distance: "10 ק\"מ",
  type: "לא מעגלי",
  water: "נחל כזיב, בריכת הדולבים",
  difficulty: "בינוני",
  season: "כל השנה",
  seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
  content: `
קטע הררי וירוק במיוחד בלב הגליל המערבי.
הולכים בתוואי של נחל כזיב.
שילוב של חורש, תצפיות רחוקות ואתרים היסטוריים בדרך.
הליכה רציפה שמכניסה בהדרגה לקצב של שביל ים אל ים.
`,
},

yam_elyam_elkosh: {
  name: "שביל ים אל ים | חניון אבירים – חניון אלקוש",
  desc: "מסע שקט בין רכסים, נחלים ונוף גלילי פתוח",
  distance: "9 ק\"מ",
  type: "לא מעגלי",
  water: "אין",
  difficulty: "בינוני",
  season: "אוקטובר עד יוני",
  seasoncats: ["אביב", "סתיו", "חורף"],
  content: `
קטע מגוון עם עליות וירידות מתונות בין נחלים ורכסים.
עובר בנופים חקלאיים ופתוחים לצד חורש טבעי.
מרגיש כמו מסע קטן בלב הגליל, עם הרבה שקט ומרחב.
`,
},

dalia_loop: {
  name: "סובב דליה",
  desc: "טיול מעגלי רגוע עם פריחות ונוף פתוח",
  distance: "3.5 ק\"מ",
  type: "מעגלי",
  water: "נחלים זורמים",
  difficulty: "קל",
  season: "אביב",
  seasoncats: ["אביב"],
  content: `
מסלול מעגלי ונינוח סביב קיבוץ דליה והגבעות שמסביב.
הליכה קלה עם נופים פתוחים, שדות ומרחבים ירוקים.
פריחות מרהיבות בעונה.
להימנע מהגעה בשבתות.
מתאים למשפחות ולטיול רגוע בלי לחץ.
`,
},

ela_trail: {
  name: "שביל האלות",
  desc: "מסלול קצר ונעים בנוף כפרי פתוח",
  distance: "2.5 ק\"מ",
  type: "מעגלי",
  water: "אין",
  difficulty: "קל",
  season: "כל השנה",
  seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
  content: `
מסלול נעים בין אלות עתיקות ונוף כפרי פתוח.
בורות מים ומתקנים חקלאיים בדרך.
הליכה קלה בשביל רחב ומתאים לכל עונות השנה.
בחירה מצוינת למשפחות ולקבוצות.
`,
},

cisterns_trail: {
  name: "שביל הבורות והבארות",
  desc: "טיול עם ערך מוסף של טבע והיסטוריה",
  distance: "2.5 ק\"מ",
  type: "מעגלי",
  water: "אין",
  difficulty: "קל",
  season: "כל השנה",
  seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
  content: `
מסלול מרתק בעקבות מתקני מים קדומים בלב הנוף.
משלב הליכה נוחה עם נקודות עניין היסטוריות.
טיול עם ערך מוסף של טבע, עבר וסיפור מקומי.
`,
},

judge_stream: {
  name: "נחל השופט",
  desc: "מסלול מוצל וזורם עם מים כל השנה",
  distance: "4–5 ק\"מ",
  type: "מעגלי",
  water: "יש – הליכה לצד מים",
  difficulty: "קל",
  season: "כל השנה",
  seasoncats: ["קיץ", "אביב", "סתיו", "חורף"],
  content: `
אחד המסלולים היפים והנגישים ברמת מנשה.
נעשה את המסלול הארוך הכולל קטעים מוכרים וגם פחות מוכרים אך יפים ביותר.
שביל מוצל עם מים זורמים, גשרים קטנים וטבע ירוק.
מתאים מאוד למשפחות ולטיול רגוע.
`,
},

mashmar: {
  name: "נחל משמר",
  desc: "מסלול מדברי פראי למטיבי לכת",
  distance: "9 ק\"מ",
  type: "מעגלי",
  water: "מעבר גבים בעונה",
  difficulty: "מטיבי לכת",
  season: "נובמבר עד אפריל",
  seasoncats: ["חורף", "אביב"],
  content: `
נחל מדברי פראי בלב מצוקי מדבר יהודה.
משלב ירידות, טיפוסים, גבים מלאי מים וקטעי הליכה מאתגרים.
חוויה מדברית עוצמתית למטיילים מנוסים בלבד.
`,
},

zeelim: {
  name: "נחל צאלים",
  desc: "אחד הנחלים המרשימים במדבר יהודה",
  distance: "10 ק\"מ",
  type: "לא מעגלי",
  water: "גבים עונתיים, עין נמר",
  difficulty: "מטיבי לכת",
  season: "אוקטובר עד אפריל",
  seasoncats: ["חורף", "אביב", "סתיו"],
  content: `
אחד הנחלים המרשימים במדבר יהודה.
נעלה לכיוון עין נמר בגיא סלעים.
נבקר בעין נמר שנובע כל השנה ונרד בגיא בהק עם יתדות וחבלים.
`,
},

og_stream: {
  name: "נחל אוג",
  desc: "מסלול מדברי קצר, דרמטי ומלא אקשן",
  distance: "3.5 ק\"מ",
  type: "מעגלי",
  water: "גבים עונתיים",
  difficulty: "בינוני",
  season: "אוקטובר עד אפריל",
  seasoncats: ["חורף", "אביב", "סתיו"],
  content: `
מסלול מעגלי קצר ודרמטי בלב מדבר יהודה.
מתחילים בחניון ליד קיבוץ אלמוג.
יורדים לנחל, מטפסים מספר מפלים עם יתדות ונהנים מנוף מרהיב.
מסלול מושלם לעצירה בדרך לים המלח.
`,
},

  },
  en: {
    kziv: {
      name: "Wadi Kziv",
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
      name: "Wadi Yarkon",
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
      name: "Wadi Gachar",
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
    arbel_hamam: {
  name: "Israel Trail | Mitzpe Ad – Wadi Hamam",
  desc: "A dramatic mountain trail with wide views and steep descents",
  distance: "8 km",
  type: "Not circular",
  water: "No",
  difficulty: "Medium",
  season: "November to April",
  seasoncats: ["Winter", "Spring"],
  content: `
A spectacular trail climbing from the Arbel Valley to Mount Arbel.
Descends via the Ottoman fortress down to the Bedouin village of Wadi Hamam.
A diverse route with open viewpoints, challenging descents and a dramatic stream section.
Best suited for hikers with moderate fitness looking for big landscapes and changing scenery.
`,
},

osfiya_oren: {
  name: "Israel Trail | Osfiya – Nahal Oren",
  desc: "A classic Carmel hike through Mediterranean woodland",
  distance: "12 km",
  type: "Not circular",
  water: "Seasonal pools at Nahal Hik",
  difficulty: "Medium",
  season: "Year-round",
  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
  content: `
A classic Carmel hike through dense Mediterranean forest and open paths.
Combines gentle descents, seasonal springs and plenty of shade.
A flowing and pleasant route that feels far from the city despite being close to it.
`,
},

yam_elyam_montfort: {
  name: "Sea to Sea Trail | Montfort – Abirim",
  desc: "A lush and scenic section in the Western Galilee",
  distance: "10 km",
  type: "Not circular",
  water: "Nahal Kziv, Plane Tree Pool",
  difficulty: "Medium",
  season: "Year-round",
  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
  content: `
A particularly green and mountainous section in the heart of the Western Galilee.
Follows the route of Nahal Kziv.
Combines forest, distant viewpoints and historical sites along the way.
A steady walk that gently introduces the rhythm of the Sea to Sea Trail.
`,
},

yam_elyam_elkosh: {
  name: "Sea to Sea Trail | Abirim – Elkosh",
  desc: "A peaceful journey through ridges and open Galilee landscapes",
  distance: "9 km",
  type: "Not circular",
  water: "No",
  difficulty: "Medium",
  season: "October to June",
  seasoncats: ["Spring", "Autumn", "Winter"],
  content: `
A varied section with gentle ascents and descents between streams and ridges.
Passes through agricultural landscapes alongside natural woodland.
Feels like a small journey into the quiet heart of the Galilee.
`,
},

dalia_loop: {
  name: "Dalia Loop",
  desc: "A relaxed circular walk with spring blooms",
  distance: "3.5 km",
  type: "Circular",
  water: "Flowing streams",
  difficulty: "Easy",
  season: "Spring",
  seasoncats: ["Spring"],
  content: `
A calm circular trail around Kibbutz Dalia and the surrounding hills.
Easy walking with open views, fields and green spaces.
Spectacular wildflowers in season.
Avoid visiting on Saturdays.
Perfect for families and a relaxed walk.
`,
},

ela_trail: {
  name: "Pistacia Trail",
  desc: "A short and pleasant walk in open rural scenery",
  distance: "2.5 km",
  type: "Circular",
  water: "No",
  difficulty: "Easy",
  season: "Year-round",
  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
  content: `
A pleasant trail among ancient pistacia trees and open countryside.
Includes water cisterns and agricultural installations.
Easy walking on a wide path, suitable year-round.
An excellent choice for families and groups.
`,
},

cisterns_trail: {
  name: "Cisterns and Wells Trail",
  desc: "A walk combining nature, history and local stories",
  distance: "2.5 km",
  type: "Circular",
  water: "No",
  difficulty: "Easy",
  season: "Year-round",
  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
  content: `
A fascinating trail following ancient water systems in the heart of the landscape.
Combines easy walking with historical points of interest.
A hike with added value — nature, history and local heritage.
`,
},

judge_stream: {
  name: "Judge Stream",
  desc: "A shaded trail with flowing water year-round",
  distance: "4–5 km",
  type: "Circular",
  water: "Yes – walking alongside water",
  difficulty: "Easy",
  season: "Year-round",
  seasoncats: ["Summer", "Winter", "Autumn", "Spring"],
  content: `
One of the most beautiful and accessible trails in Ramat Menashe.
Includes the well-known section of the stream as well as quieter, lesser-known parts.
Shaded paths, flowing water, small bridges and lush greenery.
Perfect for families and relaxed hikes.
`,
},

mashmar: {
  name: "Nahal Mashmar",
  desc: "A wild desert canyon for experienced hikers",
  distance: "9 km",
  type: "Circular",
  water: "Seasonal pools",
  difficulty: "Advanced",
  season: "November to April",
  seasoncats: ["Winter", "Spring"],
  content: `
A wild desert canyon in the cliffs of the Judean Desert.
Combines descents, climbs, water pools and challenging terrain.
An intense desert experience for experienced hikers only.
`,
},

zeelim: {
  name: "Nahal Ze’elim",
  desc: "One of the most impressive canyons in the Judean Desert",
  distance: "10 km",
  type: "Not circular",
  water: "Seasonal pools, Ein Namer",
  difficulty: "Advanced",
  season: "October to April",
  seasoncats: ["Winter", "Spring", "Autumn"],
  content: `
One of the most impressive desert streams in Israel.
Ascend toward Ein Namer through a rocky gorge.
Visit the spring that flows year-round and descend via the dramatic canyon with ladders and ropes.
`,
},

og_stream: {
  name: "Nahal Og",
  desc: "A short and dramatic desert loop near the Dead Sea",
  distance: "3.5 km",
  type: "Circular",
  water: "Seasonal pools",
  difficulty: "Medium",
  season: "October to April",
  seasoncats: ["Winter", "Spring", "Autumn"],
  content: `
A short but dramatic loop trail in the Judean Desert.
Starts at the parking area near Kibbutz Almog.
Descend into the canyon, climb waterfalls using ladders and enjoy spectacular views.
A perfect stop on the way to the Dead Sea.
`,
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
                arbel_hamam: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },        osfiya_oren: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },        yam_elyam_montfort: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },    
            yam_elyam_elkosh: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },
                    dalia_loop: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },            ela_trail: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },            cisterns_trail: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },            judge_stream: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },
                 mashmar: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },         zeelim: {

      img: '/גחר.webp',
            map: '',
  gallery: ["/hi.jpg", "/hi.jpg"]

        },         og_stream: {

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