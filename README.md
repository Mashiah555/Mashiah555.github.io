[English Version](#english-version) | [הגרסה העברית](#hebrew-version)

---

<a id="english-version"></a>
# Yuval Mashiah - Personal Portfolio

A custom-engineered, high-performance portfolio website showcasing my professional experience, academic journey, and software engineering projects. The architecture is built entirely from scratch using vanilla web technologies, emphasizing clean code, modularity, and modern user experience principles.

## 🚀 Key Features

* **Custom AI Assistant (Zing):** Integrates a bespoke N-gram artificial intelligence engine, built completely from scratch in JavaScript, to interactively answer user questions about my projects and skills[cite: 1]. 
* **Bilingual Localization:** Full native support for both English and Hebrew, featuring seamless on-the-fly toggling between Left-to-Right (LTR) and Right-to-Left (RTL) structural layouts[cite: 1].
* **Dynamic Theming:** Deep integration of Light, Dark, and System-default visual themes, managed smoothly through CSS variables (`color-scheme`) and a custom dropdown toggle[cite: 1].
* **Multi-Format Resume:** An interactive resume section offering three distinct viewing modes: a visual timeline, a clean plain-text layout, and an embedded PDF preview with intelligent fallback mechanisms[cite: 1].
* **Rich Project Showcase:** A dynamic project gallery utilizing accessible modal windows for deep dives, and an integrated lightbox overlay for high-resolution gallery viewing[cite: 1].
* **Smart Navigation:** A responsive, state-aware navigation bar that automatically hides on downward scrolls to maximize screen real estate and reappears on upward scrolls[cite: 1].

## ♿ Accessibility (WCAG Compliant)

This portfolio is strictly designed to meet and exceed WCAG (Web Content Accessibility Guidelines) regulations to ensure an inclusive experience for all users. Native support and considerations include:
* **Magnification Support:** The UI scales cleanly without breaking the grid or overflowing containers.
* **High Contrast Compatibility:** Color palettes and semantic HTML ensure maximum readability under high-contrast modes.
* **Link Bolding:** Distinct visual indicators and strong focus states for all interactive elements.
* **Default Scrollbar:** Custom scrollbars gracefully degrade to native default scrollbars under strict user agent preferences.
* **Media Controls (Hiding Media):** Animations respect the `prefers-reduced-motion` media query, disabling heavy transitions and auto-playing dynamics for users who require reduced sensory input[cite: 1].

## 🏗️ Architecture & Engineering Principles

The codebase is engineered without heavy frontend frameworks, relying instead on a highly modular Vanilla JavaScript (ES6+) architecture[cite: 1]. The system strictly adheres to enterprise-grade design principles:
* **Separation of Concerns (SoC):** Logic is strictly divided into distinct domains: `core` (theme, i18n, utils), `components` (navbar, modal, chat), `renderers` (resume, projects), and `data` (configs, translations)[cite: 1].
* **DRY (Don't Repeat Yourself):** Reusable rendering functions natively map over centralized JSON data structures to generate dynamic HTML components without duplicated markup[cite: 1].
* **SOLID Principles:** Handlers, API controllers, and rendering modules maintain single responsibilities, ensuring that extending the site with new projects or languages requires zero modification to the underlying engine logic[cite: 1].

## ⚖️ License & Copyright

**All Rights Reserved.** 
This repository is public strictly for **read-only and portfolio showcase purposes**. You may view and inspect the code to assess my software engineering capabilities. However, you are **not** permitted to copy, clone, distribute, modify, or reuse this source code, its design, or its custom assets for your own personal or commercial projects without explicit written consent.

---

<a id="hebrew-version"></a>
# יובל משיח - אתר פורטפוליו אישי

אתר פורטפוליו מתקדם שנבנה מאפס, המציג את הניסיון המקצועי, המסלול האקדמי ופרויקטי הפיתוח שלי. המערכת פותחה ללא שימוש בספריות צד-שלישי כבדות, תוך התמקדות בארכיטקטורת תוכנה נקייה, מודולריות וחווית משתמש מודרנית.

## 🚀 תכונות מרכזיות

* **עוזר וירטואלי חכם (Zing):** שילוב של מנוע בינה מלאכותית מבוסס N-gram, שנכתב לחלוטין מאפס ב-JavaScript, המאפשר למשתמשים לשאול שאלות ולקבל מידע אינטראקטיבי על הפרויקטים והכישורים שלי[cite: 1].
* **תמיכה דו-לשונית מלאה:** מערכת i18n מובנית התומכת באנגלית ובעברית, עם החלפה חלקה ומיידית בין תצוגת LTR לתצוגת RTL מלאה[cite: 1].
* **ערכות נושא דינמיות:** תמיכה מקיפה במצב כהה (Dark Mode), מצב בהיר (Light Mode) והתאמה אוטומטית להגדרות המערכת של המשתמש, באמצעות משתני CSS מתקדמים[cite: 1].
* **קורות חיים אינטראקטיביים:** מנגנון תצוגה משולש המאפשר צפייה בקורות החיים כציר זמן ויזואלי, תצוגת טקסט נקי או תצוגת PDF מוטמעת עם מנגנוני גיבוי חכמים[cite: 1].
* **תצוגת פרויקטים מתקדמת:** גלריית פרויקטים דינמית הכוללת חלונות קופצים (Modals) למידע מורחב, ו-Lightbox לצפייה בתמונות מסך ברזולוציה גבוהה[cite: 1].
* **ניווט חכם:** סרגל ניווט רספונסיבי המזהה את כיוון הגלילה ונעלם אוטומטית בעת גלילה מטה כדי למקסם את שטח המסך[cite: 1].

## ♿ נגישות (תאימות לתקן WCAG)

האתר תוכנן בקפידה כדי לעמוד בדרישות הנגישות של תקן WCAG ולהבטיח חווית שימוש שוויונית לכולם. התמיכה כוללת:
* **הגדלת מסך וטקסט (Magnification):** הממשק מגיב בצורה חלקה להגדלה ללא שבירת רכיבים או גלישת טקסט.
* **תאימות לניגודיות גבוהה:** שימוש בפלטת צבעים מותאמת וסמנטיקת HTML נכונה המבטיחה קריאות מקסימלית.
* **הדגשת קישורים (Link Bolding):** סימון ברור ויזואלי ומצבי Focus בולטים לכלל האלמנטים האינטראקטיביים.
* **פסי גלילה חלופיים (Default Scrollbar):** עיצוב פסי הגלילה מותאם אישית אך יורד בצורה חלקה (Graceful degradation) לפסי הגלילה של מערכת הפעלה בהתאם להעדפות נגישות.
* **עצירת מדיה והנפשות (Hiding Media):** המערכת מכבדת את הגדרת `prefers-reduced-motion` של המשתמש ומבטלת אוטומטית אנימציות, מעברים ותנועות חדות עבור מי שזקוק לכך[cite: 1].

## 🏗️ ארכיטקטורה ועקרונות הנדסת תוכנה

קוד המקור נכתב כ-Vanilla JavaScript (ES6+) בצורה מודולרית במיוחד, תוך הימנעות משימוש בתשתיות פריימוורק כבדות[cite: 1]. המערכת תוכננה על פי עקרונות הנדסת תוכנה קפדניים:
* **הפרדת תחומי אחריות (SoC):** הקוד מחולק לוגית למדורים מוגדרים היטב: `core` (ליבה, נושא, שפות), `components` (רכיבי ממשק כמו סרגל ניווט וצ'אט), `renderers` (מנועי רינדור לתוכן דינמי), ו-`data` (מבני הנתונים והתרגומים)[cite: 1].
* **עקרון DRY (Don't Repeat Yourself):** פונקציות הרינדור קוראות ממאגרי נתונים מרכזיים (JSON-like structures) ומייצרות את אלמנטי ה-HTML באופן דינמי מבלי לשכפל קוד[cite: 1].
* **עקרונות SOLID:** המודולים השונים מטפלים באחריות יחידה (Single Responsibility), מה שמבטיח שהוספת שפה חדשה, פרויקט חדש או כישור נוסף אינה דורשת שינוי בלוגיקת הליבה של מנוע האתר[cite: 1].

## ⚖️ זכויות יוצרים ורישיון שימוש

**כל הזכויות שמורות.**
מאגר קוד זה מוגדר כפומבי למטרות **קריאה והצגת יכולות בלבד**. הנכם מוזמנים לעיין בקוד על מנת להתרשם מיכולות הפיתוח שלי. עם זאת, **חל איסור מוחלט** להעתיק, לשכפל, להפיץ, לשנות או לעשות שימוש חוזר בקוד מקור זה, בעיצובו או בנכסיו הגרפיים עבור פרויקטים אישיים או מסחריים ללא קבלת אישור מפורש ובכתב ממני.
