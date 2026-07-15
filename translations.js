const translations = {
    he: {
        dir: "rtl",
        pageTitle: "משמרת בטוחה - מדריך למטפלות",
        footerText1: "מדריך למידה חווייתי: שומרים על בטיחות המטופל ביחד!",
        footerText2: "פותח על ידי מאיה שקולניק גזית - מומחית למדיניות ומנהל",
        footerText3: "מותאם במיוחד למטפלות, כוחות עזר ומלווים סיעודיים",
        infoTitle: "לתת טיפול בטוח",
        infoSubtitle: "טיפול טוב ובטוח – מתוך לב, ידע, תשומת לב וכבוד.",
        infoDesc: "כל מטופל/ת הוא/היא ייחודי/ת.<br>הקפדה על כללים פשוטים יכולה למנוע טעויות, לשמור על בריאות, לכבד את האדם ולהעניק לו תחושת ביטחון ורוגע.",
        infoBadge: "כללים לטיפול בטוח",
        rules: [
            { title: "הכר את האדם", items: ["פנה אליו בשמו.", "הקשב לו, דבר לאט ובכבוד.", "התייחס אליו כפי שהיית רוצה שיתייחסו אליך."] },
            { title: "מניעת זיהומים", items: ["רחץ או חטא ידיים: לפני מגע, לאחר מגע, לפני אוכל, לאחר טיפול בהפרשות ולאחר הורדת כפפות."] },
            { title: "מניעת פצעי לחץ", items: ["שנה תנוחה כל שעתיים.", "השתמש במזרן מתאים.", "בדוק עור באופן קבוע.", "יובש, אדמומיות או כאב - דווח מיד."] },
            { title: "סביבה בטוחה", items: ["חדר מואר ונקי, מעברים פנויים.", "סדר נגיש: מים, חפצים אישיים וקריאת מצוקה.", "מטופל בסיכון לנפילה - לא משאיר לבד."] },
            { title: "שימוש בציוד תומך", items: ["השתמש בציוד מתאים: הליכון, כיסא גלגלים, חגורת העברה, מוט אחיזה.", "ודא תקינות הציוד."] },
            { title: "תקשורת ודיווח", items: ["הקשב למטופל ולבני המשפחה.", "דווח על כל שינוי: במצב, התנהגות, כאבים או תסמינים."] },
            { title: "פעל לפי הנהלים", items: ["עקוב אחר נהלי המקום והוראות הצוות.", "אם אינך בטוח - שאל והתייעץ."] },
            { title: "טיפול מתוך לב", items: ["חיוך, סבלנות וחמלה עושים הבדל גדול.", "מגע יד תומך, מילה טובה, מבט מכבד - מחזקים."] }
        ],
        infoSummary: "<strong>זכור/י תמיד:</strong> את/ה עושה עבודה חשובה ומשמעותית, חיוך, סבלנות ולב גדול - הם חלק בלתי נפרד מהטיפול.",
        badges: [
            { title: "בטיחות תחילה", desc: "שומרים על בטיחות כל הזמן." },
            { title: "עבודת צוות", desc: "אנחנו כאן אחד/ת בשביל השני/ה." },
            { title: "לב גדול", desc: "טיפול טוב מתחיל בלב שמקשיב." },
            { title: "את/ה עושה הבדל אמיתי!", desc: "תודה על מה שאת/ה עושה בכל יום." }
        ],
        footerEnd: "יחד - נעניק טיפול בטוח, איכות חיים וכבוד לכל אדם.",
        startGreeting: "שלום וברוכים הבאים! במשחק קצר ומהנה זה נלמד איך לשמור על הבריאות והבטיחות של המטופלים היקרים שלנו בכל שלב במהלך יום העבודה.",
        startInstruction: "בכל שלב נציג לכם בעיה קטנה מהשטח. בחרו את התשובה ששומרת על המטופל הכי טוב בשביל לזכות בקונפטי וצליל מנצח! מוכנים?",
        startBtn: "בואו נתחיל במשמרת!",
        stepProgress: "שלב {current} מתוך {total}",
        stepTime: "שעה: {time}",
        correctTitle: "תשובה נכונה!",
        wrongTitle: "טעות...",
        nextBtn: "לשלב הבא",
        finishBtn: "לסיום המשמרת",
        retryBtn: "נסה שוב",
        endTitle: "סיימת את המשמרת בהצטיינות!",
        endDesc: "כל הכבוד! למדת איך לשמור על סביבה בטוחה, למנוע זיהומים ונפילות, ולהעניק טיפול מתוך לב ורגישות.<br>העבודה שלך מצילה חיים ומשפרת איכות חיים בכל יום מחדש.",
        videoBtn: "לצפייה בסרטון הסיכום מבית FLOW",
        playAgainBtn: "שחק שוב",
        gameSteps: [
            {
                id: 1,
                time: "07:15 (תחילת משמרת)",
                badge: "עמוד תווך 1: לדבר בגובה העיניים ולבקש רשות",
                title: "בוקר טוב, גברת שרה!",
                scenario: "אתם נכנסים בבוקר לחדר של גברת שרה כדי לעזור לה לשטוף פנים ולהחליף בגדים. היא ערה, אבל נראית קצת מבוהלת, לא עונה לכם וממלמלת קולות של חוסר שקט. מה הדבר הכי נכון לעשות כדי להתחיל את הטיפול ברגל ימין ובכבוד?",
                imageDefault: "assets/step1_wrong.png", imageCorrect: "assets/step1_correct.png", imageWrong: "assets/step1_wrong.png",
                options: [
                    { text: "להוריד ממנה את השמיכה בעדינות ולהתחיל להלביש אותה מהר-מהר, כדי לסיים עם זה לפני שהיא תתחיל לבכות או להתנגד.", status: "wrong", feedback: "אוי, לא ככה... אם נתחיל לגעת בה פתאום בלי להכין אותה, היא תיבהל מאוד!" },
                    { text: "לגשת אליה ברוגע, להתכופף כדי להסתכל לה בעיניים, לקרוא לה בשמה, לחייך ולהסביר לה במילים פשוטות וקצרות מה אתם רוצים לעשות, ולבקש רשות לפני שנוגעים בה.", status: "correct", feedback: "מעולה, פשוט מושלם! כשאתם מדברים ברוגע, בגובה העיניים ומבקשים רשות, היא תרגיש בטוחה ותשתף פעולה בשמחה." },
                    { text: "להדליק מיד את האור החזק בחדר ולצעוק לה בקול רם מהדלת: 'בוקר טוב שרה! קמים!'", status: "wrong", feedback: "רגע, זה מבהיל! אור חזק פתאום וצעקות מרחוק עושים המון רעש בראש של קשיש מבולבל." }
                ]
            },
            {
                id: 2,
                time: "08:00 (מסדרים את החדר)",
                badge: "עמוד תווך 2: לסדר את החדר ולשמור על פעמון המצוקה קרוב",
                title: "חדר נקי ומסודר מונע נפילה!",
                scenario: "גברת שרה התלבשה וכעת היא יושבת בבטחה בכורסה שלה. יש קצת מים רטובים על הרצפה, כיסא הגלגלים עומד באמצע החדר, ופעמון המצוקה רחוק על הקיר. מה עושים?",
                imageDefault: "assets/step2_wrong.png", imageCorrect: "assets/step2_correct.png", imageWrong: "assets/step2_wrong.png",
                options: [
                    { text: "לעזוב את זה ככה וללכת למטופל הבא.", status: "wrong", feedback: "זהירות, מסוכן! קשישים לפעמים מנסים לקום פתאום לבד ועלולים ליפול." },
                    { text: "לזרוק מגבת קטנה על המים הרטובים ולנעול את הגלגלים במקום שבו הוא עומד.", status: "wrong", feedback: "לא מספיק טוב! מגבת שמונחת על רצפה רטובה יכולה להחליק, והכיסא עדיין חוסם את הדרך." },
                    { text: "לנגב ולייבש את הרצפה לגמרי, להזיז את כיסא הגלגלים, ולשים את פעמון המצוקה ממש ליד היד של שרה.", status: "correct", feedback: "אלופים! חדר יבש, דרך פנויה ופעמון זמין - מתכון מושלם לשמירה על המטופלים." }
                ]
            },
            {
                id: 3,
                time: "09:30 (הולכים לפעילות)",
                badge: "עמוד תווך 3: נעליים טובות וליווי צמוד כשיש חום",
                title: "מר משה רוצה ללכת",
                scenario: "מר משה רוצה לקום. הוא חלש מהרגיל בגלל חום קל, נועל רק גרביים, ומבקש ללכת בלי הליכון כי 'זה רק כמה צעדים'. מה תעשו?",
                imageDefault: "assets/step3_wrong.png", imageCorrect: "assets/step3_correct.png", imageWrong: "assets/step3_wrong.png",
                options: [
                    { text: "לתת לו ללכת בלי הליכון, אבל להחזיק אותו חזק-חזק מתחת לבית השחי שלו.", status: "wrong", feedback: "עצרו, זה מסוכן מאוד! אסור למשוך קשיש מבית השחי - זה פוגע בכתף. הליכה בגרביים היא סכנת החלקה קשה!" },
                    { text: "להסביר לו שבחום הגוף חלש ויש סכנת נפילה. לעזור לו לנעול נעליים סגורות, להביא הליכון וללוות אותו.", status: "correct", feedback: "כל הכבוד! נעליים סגורות מונעות החלקה, וההליכון נותן תמיכה מושלמת." },
                    { text: "להגיד לו שאסור לו לקום היום בכלל בגלל החום ולהביא לו סיר לילה בכוח.", status: "wrong", feedback: "לא כדאי. מטופל מבוגר צריך לזוז בצורה בטוחה, לא כדאי לרתק למיטה." }
                ]
            },
            {
                id: 4,
                time: "12:30 (זמן ארוחת צהריים)",
                badge: "עמוד תווך 4: שטיפת ידיים נכונה עם סבון (40-60 שניות!)",
                title: "נלחמים בחיידקים של השלשול",
                scenario: "סיימתם כרגע לעזור למטופל עם חיידק קלוסטרידיום (מדבק מאוד במערכת העיכול). כעת אתם חייבים לעבור למטופלת אחרת. איך מנקים ידיים?",
                imageDefault: "assets/step4_wrong.png", imageCorrect: "assets/step4_correct.png", imageWrong: "assets/step4_wrong.png",
                options: [
                    { text: "לשים ג'ל אלכוהול (ספטול) מהר על הידיים.", status: "wrong", feedback: "סכנה! החיידק חזק וג'ל אלכוהול לא משמיד אותו." },
                    { text: "לשטוף ידיים היטב עם מים זורמים וסבון למשך 40-60 שניות תוך שפשוף כל חלקי כף היד.", status: "correct", feedback: "פשוט נפלא! מים זורמים וסבון (40-60 שניות) הם הדרך היחידה שמסלקת את חיידקי הקלוסטרידיום." },
                    { text: "להעביר מגבון לח על הידיים ולנגב במגבת.", status: "wrong", feedback: "מגבון לח לא מנקה ידיים מחיידקים מסוכנים. רק שטיפה תציל!" }
                ]
            },
            {
                id: 5,
                time: "14:15 (מנוחת צהריים)",
                badge: "עמוד תווך 5: שינוי תנוחה כדי למנוע פצעי לחץ",
                title: "לשמור על עור בריא",
                scenario: "מר יוסף שוכב במיטה. במהלך החלפת הטיטול שמתם לב לאדמומיות שלא עוברת בעצם הזנב שלו. מה עליכם לעשות?",
                imageDefault: "assets/step5_wrong.png", imageCorrect: "assets/step5_correct.png", imageWrong: "assets/step5_wrong.png",
                options: [
                    { text: "לשפשף ולעסות חזק את המקום האדום כדי להזרים דם.", status: "wrong", feedback: "אזהרה אדומה! אסור בשום אופן לעסות מקום אדום, זה מיד יקרע את הרקמה העדינה וייצור פצע לחץ קשה." },
                    { text: "למרוח משחה אקראית שמצאתם במגירה ולקוות לטוב.", status: "wrong", feedback: "לא מורחים משחות ללא הוראה מהצוות המוסמך." },
                    { text: "לדווח מיד לאחות על האדמומיות, ולהשכיב אותו על הצד (בזווית 30 מעלות) כדי להוריד לחץ מעצם הזנב.", status: "correct", feedback: "נהדר, אתם מצילים חיים! הורדת הלחץ מהמקום האדום ודיווח לצוות מונעים מהפצע להיפתח." }
                ]
            },
            {
                id: 6,
                time: "15:45 (סוף משמרת)",
                badge: "עמוד תווך 6: לדווח לצוות המקצועי ולא לאלתר",
                title: "למי מותר לטפל בהליכון שבור?",
                scenario: "גברת חנה מתלוננת שההליכון שלה 'רוקד' וכנראה נשבר בו בורג. אחד המלווים רוצה 'לסדר לה את זה מהר עם פלייר'. מה עושים?",
                imageDefault: "assets/step6_wrong.png", imageCorrect: "assets/step6_correct.png", imageWrong: "assets/step6_wrong.png",
                options: [
                    { text: "נותנים למלווה החביב לתקן את ההליכון כי זה קל וחוסך זמן.", status: "wrong", feedback: "אסור בתכלית האיסור לאלתר ציוד תומך! אם הבורג ישתחרר כשהיא נשענת עליו, היא תיפול ותשבור אגן." },
                    { text: "מודיעים לחנה שאסור לה להשתמש בהליכון, מחפשים את הפיזיותרפיסט או האחות ומדווחים.", status: "correct", feedback: "מושלם! אתם מגלים אחריות ומקצועיות. רק איש צוות מוסמך יכול לוודא שההליכון בטוח." },
                    { text: "מסבירים לחנה שזה שטויות ומבקשים ממנה ללכת איתו בזהירות.", status: "wrong", feedback: "הליכון לא תקין הוא סכנת נפילה חמורה. אסור לבקש מקשישה ללכת ב'זהירות' על ציוד רעוע." }
                ]
            }
        ]
    },
    en: {
        dir: "ltr",
        pageTitle: "Safe Shift - Caregiver Guide",
        footerText1: "Experiential learning guide: Keeping patients safe together!",
        footerText2: "Developed by Maya Shkolnik Gazit - Policy & Admin Expert",
        footerText3: "Adapted specifically for caregivers and nursing assistants",
        infoTitle: "Providing Safe Care",
        infoSubtitle: "Good and safe care – from the heart, knowledge, attention, and respect.",
        infoDesc: "Every patient is unique.<br>Following simple rules can prevent mistakes, protect health, respect the individual, and provide them with a sense of security and calm.",
        infoBadge: "Rules for Safe Care",
        rules: [
            { title: "Know the Person", items: ["Call them by their name.", "Listen, speak slowly and respectfully.", "Treat them as you would want to be treated."] },
            { title: "Prevent Infections", items: ["Wash or sanitize hands: before and after contact, before meals, after handling waste, and after removing gloves."] },
            { title: "Prevent Pressure Ulcers", items: ["Change position every two hours.", "Use an appropriate mattress.", "Check skin regularly.", "Report any dryness, redness, or pain immediately."] },
            { title: "Safe Environment", items: ["Keep rooms well-lit, clean, and clear of obstacles.", "Keep essentials accessible: water, personal items, call bell.", "Never leave a fall-risk patient unattended."] },
            { title: "Use Supportive Equipment", items: ["Use appropriate equipment: walker, wheelchair, transfer belt, grab bars.", "Ensure equipment is functioning properly."] },
            { title: "Communication & Reporting", items: ["Listen to the patient and their family.", "Report any change in condition, behavior, pain, or symptoms."] },
            { title: "Follow Procedures", items: ["Follow facility guidelines and staff instructions.", "If unsure, ask and consult."] },
            { title: "Care from the Heart", items: ["A smile, patience, and compassion make a huge difference.", "A supportive touch, a kind word, a respectful look - these give strength."] }
        ],
        infoSummary: "<strong>Always remember:</strong> You are doing important and meaningful work. A smile, patience, and a big heart are inseparable parts of care.",
        badges: [
            { title: "Safety First", desc: "Always maintaining safety." },
            { title: "Teamwork", desc: "We are here for one another." },
            { title: "Big Heart", desc: "Good care starts with a listening heart." },
            { title: "You Make a Difference!", desc: "Thank you for what you do every day." }
        ],
        footerEnd: "Together - providing safe care, quality of life, and respect for everyone.",
        startGreeting: "Welcome! In this short and fun game, we will learn how to protect the health and safety of our precious patients at every stage of the workday.",
        startInstruction: "In each step, we'll present a small field scenario. Choose the answer that best protects the patient to win confetti and a winning sound! Ready?",
        startBtn: "Let's Start the Shift!",
        stepProgress: "Step {current} of {total}",
        stepTime: "Time: {time}",
        correctTitle: "Correct Answer!",
        wrongTitle: "Mistake...",
        nextBtn: "Next Step",
        finishBtn: "Finish Shift",
        retryBtn: "Try Again",
        endTitle: "You finished the shift with excellence!",
        endDesc: "Great job! You learned how to maintain a safe environment, prevent infections and falls, and provide compassionate care.<br>Your work saves lives and improves quality of life every single day.",
        videoBtn: "Watch FLOW Summary Video",
        playAgainBtn: "Play Again",
        gameSteps: [
            {
                id: 1,
                time: "07:15 (Start of Shift)",
                badge: "Pillar 1: Speak at eye level and ask for permission",
                title: "Good Morning, Mrs. Sarah!",
                scenario: "You enter Mrs. Sarah's room in the morning to help her wash her face and change clothes. She is awake but looks frightened, isn't answering, and is mumbling restlessly. What is the best thing to do to start the care right and respectfully?",
                imageDefault: "assets/step1_wrong.png", imageCorrect: "assets/step1_correct.png", imageWrong: "assets/step1_wrong.png",
                options: [
                    { text: "Pull her blanket off gently and start dressing her very quickly to get it over with before she starts crying or resisting.", status: "wrong", feedback: "Oh, not like that... Touching her suddenly without preparing her will frighten her very much!" },
                    { text: "Approach her calmly, bend down to look her in the eyes, call her by name, smile, explain in simple words what you want to do, and ask permission before touching her.", status: "correct", feedback: "Perfect! When you speak calmly, at eye level, and ask permission, she understands you are there to help." },
                    { text: "Turn on the bright light immediately and shout loudly from the door: 'Good morning Sarah! Wake up!'", status: "wrong", feedback: "Wait, that's startling! A sudden bright light and yelling from afar creates a lot of noise in the head of a confused elderly person." }
                ]
            },
            {
                id: 2,
                time: "08:00 (Tidying the Room)",
                badge: "Pillar 2: Tidy the room and keep the call bell close",
                title: "A Clean Room Prevents Falls!",
                scenario: "Mrs. Sarah is dressed and sitting safely in her armchair. Before leaving, you notice 3 things: a small puddle of water on the floor, the wheelchair open in the middle of the room, and the call bell hanging far away on the wall. What do you do?",
                imageDefault: "assets/step2_wrong.png", imageCorrect: "assets/step2_correct.png", imageWrong: "assets/step2_wrong.png",
                options: [
                    { text: "Leave it as is and move to the next patient.", status: "wrong", feedback: "Danger! Elderly patients sometimes try to get up on their own and can fall." },
                    { text: "Throw a small towel over the water and lock the wheelchair brakes right where it is.", status: "wrong", feedback: "Not good enough! A towel on a wet floor can slip, and the wheelchair still blocks the path." },
                    { text: "Wipe and dry the floor completely, move the wheelchair aside to clear the path, and place the call bell right next to Sarah's hand.", status: "correct", feedback: "Champions! A dry floor, clear path, and accessible call bell - the perfect recipe to prevent falls." }
                ]
            },
            {
                id: 3,
                time: "09:30 (Activity Time)",
                badge: "Pillar 3: Good shoes and close escort when having a fever",
                title: "Mr. Moshe Wants to Walk",
                scenario: "Mr. Moshe wants to get up. He is weaker than usual due to a slight fever, wearing only slippery socks, and wants to walk without his walker because 'it's just a few steps'. What should you do?",
                imageDefault: "assets/step3_wrong.png", imageCorrect: "assets/step3_correct.png", imageWrong: "assets/step3_wrong.png",
                options: [
                    { text: "Let him walk without a walker, but hold him very tightly under his armpits.", status: "wrong", feedback: "Stop, very dangerous! Never pull an elderly person by the armpits - it can injure the shoulder. Walking in socks is a severe slipping hazard!" },
                    { text: "Kindly explain that a fever weakens the body and increases fall risk. Help him put on closed shoes, bring his walker, and escort him closely.", status: "correct", feedback: "Well done! Closed shoes prevent slipping, and the walker provides perfect support." },
                    { text: "Tell him he is forbidden to get up today because of the fever and forcefully bring him a bedpan.", status: "wrong", feedback: "Not recommended. Older patients need to move safely, bed rest isn't always the answer." }
                ]
            },
            {
                id: 4,
                time: "12:30 (Lunch Time)",
                badge: "Pillar 4: Proper hand washing with soap (40-60 seconds!)",
                title: "Fighting Diarrhea Bacteria",
                scenario: "You just finished helping a patient with highly contagious Clostridium bacteria (diarrhea). Now you must immediately help another patient with a glass of water. How do you clean your hands?",
                imageDefault: "assets/step4_wrong.png", imageCorrect: "assets/step4_correct.png", imageWrong: "assets/step4_wrong.png",
                options: [
                    { text: "Quickly apply alcohol gel on your hands.", status: "wrong", feedback: "Danger! This bacteria is strong and alcohol gel does not destroy it." },
                    { text: "Wash hands thoroughly with running water and soap for 40-60 seconds, rubbing all parts of the hand.", status: "correct", feedback: "Wonderful! Running water and soap (40-60 seconds) is the only way to remove Clostridium bacteria." },
                    { text: "Wipe your hands with a wet wipe.", status: "wrong", feedback: "A wet wipe does not clean hands from dangerous bacteria. Only washing will save you!" }
                ]
            },
            {
                id: 5,
                time: "14:15 (Afternoon Rest)",
                badge: "Pillar 5: Change position to prevent pressure ulcers",
                title: "Keeping Skin Healthy",
                scenario: "Mr. Joseph is lying in bed. While changing his diaper, you notice a persistent redness on his tailbone. What should you do?",
                imageDefault: "assets/step5_wrong.png", imageCorrect: "assets/step5_correct.png", imageWrong: "assets/step5_wrong.png",
                options: [
                    { text: "Rub and massage the red spot vigorously to increase blood flow.", status: "wrong", feedback: "Red Alert! Never massage a red spot, it will immediately tear the delicate tissue and create a severe pressure ulcer." },
                    { text: "Apply a random ointment you found and hope for the best.", status: "wrong", feedback: "Do not apply ointments without staff instructions." },
                    { text: "Report the redness to the nurse immediately, and lay him on his side (at a 30-degree angle) to relieve pressure from his tailbone.", status: "correct", feedback: "Great, you are saving lives! Relieving pressure and reporting prevents the ulcer from opening." }
                ]
            },
            {
                id: 6,
                time: "15:45 (End of Shift)",
                badge: "Pillar 6: Report to professional staff, do not improvise",
                title: "Who is allowed to fix a broken walker?",
                scenario: "Mrs. Hanna complains her walker is 'dancing' and a screw is likely broken. A visitor wants to 'fix it quickly with pliers'. What do you do?",
                imageDefault: "assets/step6_wrong.png", imageCorrect: "assets/step6_correct.png", imageWrong: "assets/step6_wrong.png",
                options: [
                    { text: "Let the nice visitor fix the walker because it's easy and saves time.", status: "wrong", feedback: "It is strictly forbidden to improvise supportive equipment! If the screw loosens while she leans on it, she will fall." },
                    { text: "Tell Hanna she must not use the walker, find the physiotherapist or nurse, and report.", status: "correct", feedback: "Perfect! You show responsibility and professionalism. Only an authorized staff member can verify the walker is safe." },
                    { text: "Explain to Hanna it's nonsense and ask her to walk carefully with it.", status: "wrong", feedback: "A faulty walker is a severe fall hazard. Never ask an elderly person to walk 'carefully' on faulty equipment." }
                ]
            }
        ]
    }
};

// Also adding RU (Russian)
translations.ru = {
    dir: "ltr",
    pageTitle: "Безопасная смена - Руководство для сиделок",
    footerText1: "Практическое руководство: Сохраняем безопасность пациентов вместе!",
    footerText2: "Разработано Майей Школьник Газит - Эксперт по политике и администрированию",
    footerText3: "Адаптировано специально для сиделок и медбратьев",
    infoTitle: "Обеспечение безопасного ухода",
    infoSubtitle: "Хороший уход – от сердца, знаний, внимания и уважения.",
    infoDesc: "Каждый пациент уникален.<br>Соблюдение простых правил предотвращает ошибки, защищает здоровье, проявляет уважение и дает чувство безопасности.",
    infoBadge: "Правила безопасного ухода",
    rules: [
        { title: "Узнайте человека", items: ["Называйте его по имени.", "Слушайте, говорите медленно и уважительно.", "Относитесь так, как хотите, чтобы относились к вам."] },
        { title: "Профилактика инфекций", items: ["Мойте или дезинфицируйте руки: до и после контакта, перед едой, после туалета и снятия перчаток."] },
        { title: "Профилактика пролежней", items: ["Меняйте положение каждые два часа.", "Используйте подходящий матрас.", "Регулярно проверяйте кожу.", "Немедленно сообщайте о сухости или покраснении."] },
        { title: "Безопасная среда", items: ["Светлая и чистая комната без препятствий.", "Всё доступно: вода, личные вещи, кнопка вызова.", "Пациента с риском падения нельзя оставлять одного."] },
        { title: "Использование оборудования", items: ["Используйте ходунки, коляски, ремни безопасности.", "Проверяйте исправность оборудования."] },
        { title: "Общение и отчетность", items: ["Слушайте пациента и семью.", "Сообщайте о любых изменениях в состоянии или боли."] },
        { title: "Следуйте процедурам", items: ["Соблюдайте правила учреждения.", "Если сомневаетесь - спросите."] },
        { title: "Уход от сердца", items: ["Улыбка, терпение и сострадание имеют огромное значение.", "Поддерживающее прикосновение дает силы."] }
    ],
    infoSummary: "<strong>Всегда помните:</strong> Вы делаете важную работу. Улыбка, терпение и большое сердце - неотъемлемая часть ухода.",
    badges: [
        { title: "Безопасность прежде всего", desc: "Всегда поддерживаем безопасность." },
        { title: "Командная работа", desc: "Мы здесь друг для друга." },
        { title: "Большое сердце", desc: "Хороший уход начинается с сердца." },
        { title: "Вы делаете мир лучше!", desc: "Спасибо за вашу работу каждый день." }
    ],
    footerEnd: "Вместе - мы обеспечиваем безопасность, качество жизни и уважение каждому человеку.",
    startGreeting: "Добро пожаловать! В этой короткой игре мы узнаем, как защитить здоровье и безопасность пациентов на каждом этапе рабочего дня.",
    startInstruction: "На каждом этапе мы покажем вам небольшую ситуацию. Выберите правильный ответ, чтобы защитить пациента и заработать конфетти!",
    startBtn: "Начнем смену!",
    stepProgress: "Этап {current} из {total}",
    stepTime: "Время: {time}",
    correctTitle: "Правильный ответ!",
    wrongTitle: "Ошибка...",
    nextBtn: "Следующий этап",
    finishBtn: "Закончить смену",
    retryBtn: "Попробовать снова",
    endTitle: "Вы завершили смену с отличием!",
    endDesc: "Отличная работа! Вы узнали, как поддерживать безопасность и предотвращать инфекции.<br>Ваша работа спасает жизни каждый день.",
    videoBtn: "Посмотреть видео FLOW",
    playAgainBtn: "Играть снова",
    gameSteps: [
        {
            id: 1, time: "07:15", badge: "Правило 1: Говорите на уровне глаз",
            title: "Доброе утро, миссис Сара!",
            scenario: "Вы входите в комнату Сары, чтобы помочь ей умыться. Она напугана и бормочет. Что сделать?",
            imageDefault: "assets/step1_wrong.png", imageCorrect: "assets/step1_correct.png", imageWrong: "assets/step1_wrong.png",
            options: [
                { text: "Быстро стянуть одеяло и начать одевать ее, пока она не начала сопротивляться.", status: "wrong", feedback: "Нельзя касаться пациента без предупреждения, это сильно ее напугает." },
                { text: "Подойти спокойно, посмотреть в глаза, назвать по имени, улыбнуться и объяснить, что вы хотите сделать.", status: "correct", feedback: "Идеально! Спокойный тон и уважение заставят ее чувствовать себя в безопасности." },
                { text: "Включить яркий свет и громко крикнуть с порога: 'Доброе утро! Встаем!'", status: "wrong", feedback: "Слишком громко и резко! Это вызовет сильный стресс." }
            ]
        },
        {
            id: 2, time: "08:00", badge: "Правило 2: Чистая комната",
            title: "Чистота предотвращает падения!",
            scenario: "Сара сидит в кресле. На полу немного воды, коляска посреди комнаты, кнопка вызова далеко. Что делаем?",
            imageDefault: "assets/step2_wrong.png", imageCorrect: "assets/step2_correct.png", imageWrong: "assets/step2_wrong.png",
            options: [
                { text: "Оставить все как есть.", status: "wrong", feedback: "Опасно! Пациенты могут попытаться встать и упасть." },
                { text: "Бросить полотенце на воду и заблокировать коляску на месте.", status: "wrong", feedback: "Полотенце скользит, а коляска все еще мешает." },
                { text: "Вытереть пол, убрать коляску с дороги и положить кнопку вызова рядом с ней.", status: "correct", feedback: "Отлично! Безопасная среда предотвращает падения." }
            ]
        },
        {
            id: 3, time: "09:30", badge: "Правило 3: Обувь и поддержка",
            title: "Господин Моше хочет ходить",
            scenario: "У Моше температура и он в носках. Он хочет пройтись без ходунков. Что делать?",
            imageDefault: "assets/step3_wrong.png", imageCorrect: "assets/step3_correct.png", imageWrong: "assets/step3_wrong.png",
            options: [
                { text: "Разрешить без ходунков, но крепко держать под мышки.", status: "wrong", feedback: "Держать под мышки опасно для плечевых суставов. В носках легко поскользнуться." },
                { text: "Объяснить риск. Помочь надеть обувь, дать ходунки и сопровождать.", status: "correct", feedback: "Правильно! Обувь и ходунки - залог безопасности." },
                { text: "Запретить вставать и принести судно.", status: "wrong", feedback: "Движение полезно. Полный запрет только вредит." }
            ]
        },
        {
            id: 4, time: "12:30", badge: "Правило 4: Мытье рук (40-60 сек)",
            title: "Борьба с инфекциями",
            scenario: "Вы помогли пациенту с опасной кишечной инфекцией. Надо идти к другому. Как очистить руки?",
            imageDefault: "assets/step4_wrong.png", imageCorrect: "assets/step4_correct.png", imageWrong: "assets/step4_wrong.png",
            options: [
                { text: "Использовать спиртовой гель.", status: "wrong", feedback: "Опасно! Гель не уничтожает эти бактерии." },
                { text: "Мыть руки водой с мылом 40-60 секунд.", status: "correct", feedback: "Замечательно! Только мыло и вода могут уничтожить клостридии." },
                { text: "Протереть влажной салфеткой.", status: "wrong", feedback: "Влажные салфетки не убивают опасные бактерии." }
            ]
        },
        {
            id: 5, time: "14:15", badge: "Правило 5: Смена положения",
            title: "Здоровая кожа",
            scenario: "Вы заметили стойкое покраснение на копчике Иосифа. Что делать?",
            imageDefault: "assets/step5_wrong.png", imageCorrect: "assets/step5_correct.png", imageWrong: "assets/step5_wrong.png",
            options: [
                { text: "Интенсивно массировать красное место.", status: "wrong", feedback: "Никогда не массируйте покраснение! Это разорвет ткани и создаст пролежень." },
                { text: "Намазать случайной мазью.", status: "wrong", feedback: "Использовать мази можно только по указанию врача." },
                { text: "Сообщить медсестре и перевернуть его на бок.", status: "correct", feedback: "Молодец! Снятие давления и отчетность предотвращают пролежни." }
            ]
        },
        {
            id: 6, time: "15:45", badge: "Правило 6: Никакой импровизации",
            title: "Сломанные ходунки",
            scenario: "Ходунки Анны расшатались. Посетитель хочет быстро починить их плоскогубцами. Что делать?",
            imageDefault: "assets/step6_wrong.png", imageCorrect: "assets/step6_correct.png", imageWrong: "assets/step6_wrong.png",
            options: [
                { text: "Позволить посетителю починить их.", status: "wrong", feedback: "Импровизированный ремонт запрещен. Оборудование может развалиться." },
                { text: "Запретить использовать ходунки и вызвать специалиста.", status: "correct", feedback: "Идеально! Только профессионал может проверить безопасность." },
                { text: "Сказать Анне, чтобы ходила осторожно.", status: "wrong", feedback: "Нельзя использовать сломанное оборудование." }
            ]
        }
    ]
};

// Arabic (AR) - RTL
translations.ar = {
    dir: "rtl",
    pageTitle: "وردية آمنة - دليل مقدمي الرعاية",
    footerText1: "دليل التعلم التجريبي: نحافظ على سلامة المريض معاً!",
    footerText2: "تم التطوير بواسطة مايا شكولنيك جازيت - خبيرة السياسات والإدارة",
    footerText3: "مصمم خصيصاً لمقدمي الرعاية والمساعدين",
    infoTitle: "تقديم رعاية آمنة",
    infoSubtitle: "رعاية جيدة وآمنة - من القلب والمعرفة والانتباه والاحترام.",
    infoDesc: "كل مريض فريد من نوعه.<br>اتباع قواعد بسيطة يمنع الأخطاء، ويحافظ على الصحة، ويحترم الشخص ويمنحه الشعور بالأمان والهدوء.",
    infoBadge: "قواعد الرعاية الآمنة",
    rules: [
        { title: "تعرف على الشخص", items: ["ناديه باسمه.", "استمع إليه وتحدث ببطء وباحترام.", "عامله كما تحب أن تُعامل."] },
        { title: "منع العدوى", items: ["اغسل وعقم يديك: قبل وبعد التلامس، قبل الأكل، وبعد خلع القفازات."] },
        { title: "منع تقرحات الفراش", items: ["غيّر الوضعية كل ساعتين.", "استخدم مرتبة مناسبة.", "تحقق من الجلد بانتظام.", "أبلغ فوراً عن أي جفاف أو احمرار أو ألم."] },
        { title: "بيئة آمنة", items: ["غرفة مضيئة ونظيفة، وممرات خالية.", "ترتيب يسهل الوصول إليه: ماء، أغراض شخصية، جرس إنذار.", "لا تترك مريضاً معرضاً للسقوط وحده."] },
        { title: "استخدام المعدات الداعمة", items: ["استخدم معدات مناسبة: مشاية، كرسي متحرك.", "تأكد من سلامة المعدات."] },
        { title: "التواصل والإبلاغ", items: ["استمع للمريض وعائلته.", "أبلغ عن أي تغيير في الحالة أو السلوك."] },
        { title: "اتبع الإجراءات", items: ["اتبع إرشادات المكان وتعليمات الفريق.", "إذا لم تكن متأكداً - اسأل واستشر."] },
        { title: "رعاية من القلب", items: ["الابتسامة والصبر والرحمة تصنع فرقاً كبيراً.", "اللمسة الداعمة والكلمة الطيبة تمنح القوة."] }
    ],
    infoSummary: "<strong>تذكر دائماً:</strong> أنت تقوم بعمل مهم وذو مغزى، الابتسامة والصبر والقلب الكبير هي جزء لا يتجزأ من الرعاية.",
    badges: [
        { title: "السلامة أولاً", desc: "نحافظ على السلامة طوال الوقت." },
        { title: "عمل جماعي", desc: "نحن هنا من أجل بعضنا البعض." },
        { title: "قلب كبير", desc: "الرعاية الجيدة تبدأ بقلب يستمع." },
        { title: "أنت تصنع فرقاً حقيقياً!", desc: "شكراً على ما تفعله كل يوم." }
    ],
    footerEnd: "معاً - نقدم رعاية آمنة وجودة حياة واحترام لكل إنسان.",
    startGreeting: "أهلاً بك! في هذه اللعبة القصيرة والممتعة سنتعلم كيف نحافظ على صحة وسلامة مرضانا الأعزاء في كل مرحلة خلال يوم العمل.",
    startInstruction: "في كل مرحلة سنطرح عليك مشكلة صغيرة من الميدان. اختر الإجابة التي تحافظ على المريض بأفضل شكل لتفوز بالقصاصات الملونة وصوت الفوز! جاهزون؟",
    startBtn: "لنبدأ الوردية!",
    stepProgress: "مرحلة {current} من {total}",
    stepTime: "الساعة: {time}",
    correctTitle: "إجابة صحيحة!",
    wrongTitle: "خطأ...",
    nextBtn: "للمرحلة التالية",
    finishBtn: "لإنهاء الوردية",
    retryBtn: "حاول مرة أخرى",
    endTitle: "لقد أنهيت الوردية بامتياز!",
    endDesc: "أحسنت! لقد تعلمت كيف تحافظ على بيئة آمنة وتمنع العدوى والسقوط.<br>عملك ينقذ الأرواح ويحسن جودة الحياة كل يوم.",
    videoBtn: "لمشاهدة فيديو الملخص من FLOW",
    playAgainBtn: "العب مرة أخرى",
    gameSteps: [
        {
            id: 1, time: "07:15", badge: "الركن 1: التحدث بمستوى العين وطلب الإذن",
            title: "صباح الخير، السيدة سارة!",
            scenario: "تدخل غرفة السيدة سارة في الصباح لمساعدتها، لكنها تبدو خائفة وتمتم بقلق. ما هو أفضل شيء تفعله للبدء؟",
            imageDefault: "assets/step1_wrong.png", imageCorrect: "assets/step1_correct.png", imageWrong: "assets/step1_wrong.png",
            options: [
                { text: "سحب الغطاء عنها وإلباسها بسرعة لتنتهي قبل أن تبدأ بالبكاء.", status: "wrong", feedback: "لا، اللمس المفاجئ سيخيفها جداً!" },
                { text: "الاقتراب بهدوء، النظر في عينيها، مناداتها باسمها، الابتسام وشرح ما ستفعله بكلمات بسيطة.", status: "correct", feedback: "ممتاز! عندما تتحدث بهدوء وتطلب الإذن ستشعر بالأمان." },
                { text: "إضاءة النور بقوة والصراخ من الباب: صباح الخير سارة! استيقظي!", status: "wrong", feedback: "هذا مخيف! النور المفاجئ والصراخ يزعج مريضاً مشوشاً." }
            ]
        },
        {
            id: 2, time: "08:00", badge: "الركن 2: ترتيب الغرفة وإبقاء جرس الإنذار قريباً",
            title: "غرفة نظيفة تمنع السقوط!",
            scenario: "تجلس سارة بأمان على كرسيها. لاحظت القليل من الماء على الأرض، والكرسي المتحرك وسط الغرفة، وجرس الإنذار بعيد. ماذا تفعل؟",
            imageDefault: "assets/step2_wrong.png", imageCorrect: "assets/step2_correct.png", imageWrong: "assets/step2_wrong.png",
            options: [
                { text: "ترك كل شيء والانتقال للمريض التالي.", status: "wrong", feedback: "خطر! قد يحاول كبار السن النهوض وحدهم ويسقطون." },
                { text: "رمي منشفة على الماء وقفل عجلات الكرسي المتحرك مكانه.", status: "wrong", feedback: "غير كافٍ! المنشفة قد تنزلق والكرسي ما زال يعيق الطريق." },
                { text: "مسح الأرض وتجفيفها، تحريك الكرسي المتحرك، ووضع جرس الإنذار بجانب سارة.", status: "correct", feedback: "أبطال! أرض جافة وممر خالٍ يمنع السقوط." }
            ]
        },
        {
            id: 3, time: "09:30", badge: "الركن 3: أحذية جيدة ومرافقة عند وجود حمى",
            title: "السيد موشيه يريد المشي",
            scenario: "السيد موشيه أضعف من المعتاد بسبب حمى خفيفة، يرتدي جوارب فقط ويريد المشي بدون مشايته. ماذا تفعل؟",
            imageDefault: "assets/step3_wrong.png", imageCorrect: "assets/step3_correct.png", imageWrong: "assets/step3_wrong.png",
            options: [
                { text: "تتركه يمشي وتمسكه بقوة من تحت إبطيه.", status: "wrong", feedback: "خطر جداً! الشد من الإبط قد يؤذي كتفه والجوارب تسبب الانزلاق." },
                { text: "تشرح له أن الحمى تزيد خطر السقوط، وتساعده في انتعال حذاء وتجلب المشاية.", status: "correct", feedback: "أحسنت! الأحذية المغلقة تمنع الانزلاق والمشاية توفر الدعم." },
                { text: "تخبره أنه ممنوع من النهوض وتجلب له وعاء قضاء الحاجة.", status: "wrong", feedback: "المريض الكبير بحاجة للحركة ولكن بأمان." }
            ]
        },
        {
            id: 4, time: "12:30", badge: "الركن 4: غسل اليدين جيداً (40-60 ثانية!)",
            title: "محاربة البكتيريا",
            scenario: "أنهيت مساعدة مريض مصاب ببكتيريا معدية، وعليك الانتقال لمريض آخر. كيف تنظف يديك؟",
            imageDefault: "assets/step4_wrong.png", imageCorrect: "assets/step4_correct.png", imageWrong: "assets/step4_wrong.png",
            options: [
                { text: "تضع جل كحولي بسرعة.", status: "wrong", feedback: "خطر! البكتيريا قوية والجل لا يقضي عليها." },
                { text: "تغسل يديك جيداً بالماء الجاري والصابون لمدة 40-60 ثانية.", status: "correct", feedback: "رائع! الماء والصابون هو الحل الوحيد للقضاء على هذه البكتيريا." },
                { text: "تمسح يديك بمنديل مبلل.", status: "wrong", feedback: "المناديل لا تنظف البكتيريا الخطيرة." }
            ]
        },
        {
            id: 5, time: "14:15", badge: "الركن 5: تغيير الوضعية لمنع تقرحات الفراش",
            title: "الحفاظ على جلد صحي",
            scenario: "لاحظت احمراراً لا يزول في أسفل ظهر السيد يوسف. ماذا تفعل؟",
            imageDefault: "assets/step5_wrong.png", imageCorrect: "assets/step5_correct.png", imageWrong: "assets/step5_wrong.png",
            options: [
                { text: "تدلك المكان بقوة لتنشيط الدم.", status: "wrong", feedback: "تحذير! التدليك سيمزق الأنسجة ويخلق قرحة." },
                { text: "تدهن أي مرهم وجدته وتأمل الأفضل.", status: "wrong", feedback: "لا تدهن أي مراهم بدون أمر طبي." },
                { text: "تبلغ الممرضة فوراً وتجعله ينام على جانبه.", status: "correct", feedback: "رائع! تقليل الضغط يمنع فتح الجرح." }
            ]
        },
        {
            id: 6, time: "15:45", badge: "الركن 6: الإبلاغ للطاقم المختص",
            title: "من المسموح له إصلاح المعدات؟",
            scenario: "تشتكي السيدة حنة من أن مشايتها تهتز. زائر يريد إصلاحها بسرعة بالكماشة. ماذا تفعل؟",
            imageDefault: "assets/step6_wrong.png", imageCorrect: "assets/step6_correct.png", imageWrong: "assets/step6_wrong.png",
            options: [
                { text: "تسمح للزائر بإصلاحها ليوفر الوقت.", status: "wrong", feedback: "ممنوع الارتجال في معدات الدعم، قد تسقط وتتأذى." },
                { text: "تمنع حنة من استخدامها وتستدعي المختص.", status: "correct", feedback: "ممتاز! فقط المختص يضمن سلامة المعدات." },
                { text: "تخبرها بأن تمشي بحذر.", status: "wrong", feedback: "المعدات المعطوبة خطر كبير، لا تطلب منها الحذر بمعدات سيئة." }
            ]
        }
    ]
};

// Nepali (NE) - LTR
translations.ne = {
    dir: "ltr",
    pageTitle: "सुरक्षित सिफ्ट - हेरचाहकर्ता गाइड",
    footerText1: "अनुभवात्मक सिकाइ गाइड: बिरामीलाई सुरक्षित राख्ने!",
    footerText2: "माया स्कोलनिक गाजित द्वारा विकसित",
    footerText3: "हेरचाहकर्ताहरूको लागि विशेष रूपमा अनुकूलित",
    infoTitle: "सुरक्षित हेरचाह प्रदान गर्दै",
    infoSubtitle: "राम्रो र सुरक्षित हेरचाह - हृदय, ज्ञान र सम्मानबाट आउँछ।",
    infoDesc: "हरेक बिरामी विशेष हुन्छन्। सामान्य नियमहरूको पालना गर्नाले गल्तीहरू रोक्न र सुरक्षा प्रदान गर्न सकिन्छ।",
    infoBadge: "सुरक्षित हेरचाहका नियमहरू",
    rules: [
        { title: "व्यक्तिलाई चिन्नुहोस्", items: ["उनीहरूलाई नामले बोलाउनुहोस्।", "सुन्नुहोस् र बिस्तारै र सम्मानपूर्वक बोल्नुहोस्।", "आफूलाई जस्तो व्यवहार चाहनुहुन्छ त्यस्तै व्यवहार गर्नुहोस्।"] },
        { title: "संक्रमण रोक्नुहोस्", items: ["हात धुनुहोस्: बिरामीलाई छुनु अघि र पछि, खाना अघि र पन्जा निकालेपछि।"] },
        { title: "प्रेसर घाउ रोक्नुहोस्", items: ["हरेक दुई घण्टामा स्थिति परिवर्तन गर्नुहोस्।", "छालाको नियमित जाँच गर्नुहोस्।"] },
        { title: "सुरक्षित वातावरण", items: ["कोठा सफा राख्नुहोस्।", "लड्ने जोखिम भएको बिरामीलाई एक्लै नछोड्नुहोस्।"] },
        { title: "उपकरणको प्रयोग", items: ["वाकर, ह्वीलचेयर सही तरिकाले प्रयोग गर्नुहोस्।"] },
        { title: "सञ्चार र रिपोर्टिङ", items: ["बिरामी र परिवारको कुरा सुन्नुहोस्।", "कुनै पनि परिवर्तन तुरुन्त रिपोर्ट गर्नुहोस्।"] },
        { title: "नियमहरूको पालना", items: ["सुविधाका दिशानिर्देशहरू पालना गर्नुहोस्।", "निश्चित नभएमा सोध्नुहोस्।"] },
        { title: "हृदयदेखि हेरचाह", items: ["मुस्कान र धैर्यले ठूलो फरक पार्छ।", "राम्रो शब्द र समर्थनले शक्ति दिन्छ।"] }
    ],
    infoSummary: "<strong>सधैँ सम्झनुहोस्:</strong> तपाईं महत्त्वपूर्ण काम गर्दै हुनुहुन्छ। मुस्कान, धैर्य र ठूलो हृदय हेरचाहको अभिन्न अंग हुन्।",
    badges: [
        { title: "पहिला सुरक्षा", desc: "सधैँ सुरक्षा कायम राख्दै।" },
        { title: "टिमवर्क", desc: "हामी एक अर्काको लागि यहाँ छौं।" },
        { title: "ठूलो हृदय", desc: "राम्रो हेरचाह हृदयबाट सुरु हुन्छ।" },
        { title: "तपाईंले फरक पार्नुहुन्छ!", desc: "हरेक दिन तपाईंले गर्ने कामको लागि धन्यवाद।" }
    ],
    footerEnd: "सँगै - सबैको लागि सुरक्षित हेरचाह र सम्मान।",
    startGreeting: "स्वागत छ! यो छोटो खेलमा, हामी सिक्नेछौं कि कसरी हाम्रो बिरामीहरूको सुरक्षा र स्वास्थ्य जोगाउने।",
    startInstruction: "प्रत्येक चरणमा एउटा समस्या प्रस्तुत गरिनेछ। उत्तम उत्तर छान्नुहोस् र जित्नुहोस्! तयार हुनुहुन्छ?",
    startBtn: "सिफ्ट सुरु गरौं!",
    stepProgress: "चरण {current} / {total}",
    stepTime: "समय: {time}",
    correctTitle: "सही उत्तर!",
    wrongTitle: "गल्ती...",
    nextBtn: "अर्को चरण",
    finishBtn: "सिफ्ट समाप्त गर्नुहोस्",
    retryBtn: "फेरि प्रयास गर्नुहोस्",
    endTitle: "तपाईंले उत्कृष्टताका साथ सिफ्ट पूरा गर्नुभयो!",
    endDesc: "धेरै राम्रो! तपाईंले सुरक्षित वातावरण कायम राख्न र संक्रमण रोक्न सिक्नुभयो।<br>तपाईंको कामले हरेक दिन जीवन बचाउँछ।",
    videoBtn: "FLOW भिडियो हेर्नुहोस्",
    playAgainBtn: "फेरि खेल्नुहोस्",
    gameSteps: [
        {
            id: 1, time: "०७:१५", badge: "नियम १: आँखाको स्तरमा बोल्नुहोस्",
            title: "शुभ प्रभात, श्रीमती सारा!",
            scenario: "श्रीमती सारा डराएको देखिन्छिन्। तपाईं कसरी हेरचाह सुरु गर्नुहुन्छ?",
            imageDefault: "assets/step1_wrong.png", imageCorrect: "assets/step1_correct.png", imageWrong: "assets/step1_wrong.png",
            options: [
                { text: "छिट्टै लुगा लगाइदिन सुरु गर्नुहोस्।", status: "wrong", feedback: "अचानक छुँदा उनी डराउँछिन्!" },
                { text: "शान्त हुनुहोस्, आँखामा हेर्नुहोस्, नामले बोलाउनुहोस् र अनुमति माग्नुहोस्।", status: "correct", feedback: "उत्तम! यसरी उनी सुरक्षित महसुस गर्छिन्।" },
                { text: "ठूलो स्वरमा बोलाउनुहोस्।", status: "wrong", feedback: "यसले वृद्ध बिरामीलाई डराउँछ।" }
            ]
        },
        {
            id: 2, time: "०८:००", badge: "नियम २: कोठा सफा राख्नुहोस्",
            title: "सफा कोठाले लड्नबाट रोक्छ!",
            scenario: "भुइँमा पानी छ र वाकर बाटोमा छ। के गर्नुहुन्छ?",
            imageDefault: "assets/step2_wrong.png", imageCorrect: "assets/step2_correct.png", imageWrong: "assets/step2_wrong.png",
            options: [
                { text: "यत्तिकै छोड्नुहोस्।", status: "wrong", feedback: "खतरा! बिरामी लड्न सक्छन्।" },
                { text: "पानीमा तौलिया फाल्नुहोस्।", status: "wrong", feedback: "तौलिया चिप्लो हुन सक्छ।" },
                { text: "भुइँ सफा गर्नुहोस् र बाटो खुला राख्नुहोस्।", status: "correct", feedback: "धेरै राम्रो! यसले लड्नबाट बचाउँछ।" }
            ]
        },
        {
            id: 3, time: "०९:३०", badge: "नियम ३: सही जुत्ता लगाउनुहोस्",
            title: "मोसे हिँड्न चाहन्छन्",
            scenario: "मोसेसँग ज्वरो छ र उनले मोजा मात्र लगाएका छन्।",
            imageDefault: "assets/step3_wrong.png", imageCorrect: "assets/step3_correct.png", imageWrong: "assets/step3_wrong.png",
            options: [
                { text: "वाकर बिना हिँड्न दिनुहोस्।", status: "wrong", feedback: "खतरा! मोजा चिप्लो हुन्छ।" },
                { text: "जुत्ता लगाउन मद्दत गर्नुहोस् र वाकर दिनुहोस्।", status: "correct", feedback: "सही! यसले पूर्ण समर्थन दिन्छ।" },
                { text: "ओछ्यानमै बस्न भन्नुहोस्।", status: "wrong", feedback: "बिरामीलाई सुरक्षित रूपमा हिँड्न दिनुपर्छ।" }
            ]
        },
        {
            id: 4, time: "१२:३०", badge: "नियम ४: हात धुनुहोस् (४०-६० सेकेन्ड)",
            title: "ब्याक्टेरियासँग लड्दै",
            scenario: "तपाईंले झाडापखाला भएको बिरामीलाई मद्दत गर्नुभयो।",
            imageDefault: "assets/step4_wrong.png", imageCorrect: "assets/step4_correct.png", imageWrong: "assets/step4_wrong.png",
            options: [
                { text: "अल्कोहल जेल प्रयोग गर्नुहोस्।", status: "wrong", feedback: "खतरा! जेलले यो ब्याक्टेरिया मार्दैन।" },
                { text: "साबुन र पानीले ४०-६० सेकेन्ड धुनुहोस्।", status: "correct", feedback: "उत्तम! यसरी मात्र ब्याक्टेरिया मर्छ।" },
                { text: "वेट वाइपले पुछ्नुहोस्।", status: "wrong", feedback: "यसले काम गर्दैन।" }
            ]
        },
        {
            id: 5, time: "१४:१५", badge: "नियम ५: स्थिति परिवर्तन गर्नुहोस्",
            title: "स्वस्थ छाला",
            scenario: "तपाईंले बिरामीको ढाडमा रातो दाग देख्नुभयो।",
            imageDefault: "assets/step5_wrong.png", imageCorrect: "assets/step5_correct.png", imageWrong: "assets/step5_wrong.png",
            options: [
                { text: "रातो ठाउँमा मसाज गर्नुहोस्।", status: "wrong", feedback: "कहिल्यै मसाज नगर्नुहोस्! यसले घाउ बनाउँछ।" },
                { text: "मलम लगाउनुहोस्।", status: "wrong", feedback: "नर्सलाई नसोधी मलम नलगाउनुहोस्।" },
                { text: "नर्सलाई रिपोर्ट गर्नुहोस् र बिरामीलाई कोल्टे फेराउनुहोस्।", status: "correct", feedback: "धेरै राम्रो! यसले घाउ हुनबाट रोक्छ।" }
            ]
        },
        {
            id: 6, time: "१५:४५", badge: "नियम ६: पेशेवरलाई रिपोर्ट गर्नुहोस्",
            title: "भाँचिएको वाकर",
            scenario: "वाकर भाँचिएको छ। कोही यसलाई छिट्टै बनाउन चाहन्छ।",
            imageDefault: "assets/step6_wrong.png", imageCorrect: "assets/step6_correct.png", imageWrong: "assets/step6_wrong.png",
            options: [
                { text: "त्यसलाई बनाउन दिनुहोस्।", status: "wrong", feedback: "यसले खतरा निम्त्याउँछ।" },
                { text: "वाकर प्रयोग नगर्न भन्नुहोस् र पेशेवरलाई बोलाउनुहोस्।", status: "correct", feedback: "उत्तम! पेशेवरले मात्र सुरक्षा सुनिश्चित गर्न सक्छ।" },
                { text: "बिस्तारै हिँड्न भन्नुहोस्।", status: "wrong", feedback: "भाँचिएको उपकरण प्रयोग गर्नु हुँदैन।" }
            ]
        }
    ]
};

// Export to window
window.translations = translations;
