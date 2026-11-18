import crypto from 'node:crypto';


const TICKETS = 'https://www.to-mix.co.il/product/%D7%98%D7%A0%D7%99%D7%94-%D7%95%D7%99%D7%A0%D7%95%D7%A7%D7%95%D7%A8/?eventbuzz=true';
const id = () => crypto.randomBytes(5).toString('hex');

export default function content() {
  const tour = { titleHe: 'סיבוב הופעות לחגיגות 20 שנות יצירה', titleEn: 'Celebrating 20 years of Artistic career tour' };
  const gypsy = { titleHe: 'ג׳יפסי', titleEn: 'Gypsy' };
  const band = { notesHe: 'מופע להקה עם 10 נגנים ורקדנים', notesEn: 'Full band show with 10 musicians and dancers' };
  const show = (o) => ({ id: id(), published: true, ticketUrl: TICKETS, status: 'tickets', ...o });
  return {
    settings: {
      heroSubtitle: 'Violinist, Composer, Producer, Vocalist, Dancer',
      ticketsUrl: TICKETS,
      introTitleHe: 'אלבום חדש ״בקצב הלב״ - אלבום ראשון בעברית!',
      introTitleEn: 'New album "B\'Ketzev HaLev" – the first album in Hebrew!',
      introHe: 'טניה וינוקור – אמנית רב־תחומית בינלאומית, כנרת וירטואוזית, זמרת, רקדנית ומלחינה – יוצרת חוויה בימתית ייחודית המשלבת מוזיקה, תנועה וסיפור אישי. ביצירתה נשזרים צלילים מהעולם הקלאסי עם קצבים מלהיבים מהבלקן, הפלמנקו, הלטין והפיוז׳ן, לכדי שפה מוזיקלית חוצת גבולות ותרבויות. על הבמה, טניה עוברת בחן ובטבעיות מנגינה על כינור לשירה, מריקוד סוחף לנגינה מלאת תשוקה, ומזמינה את הקהל למסע מרגש, אנרגטי ואותנטי.\n\nייחודה של טניה הוא ביכולת להפוך כל מופע לחגיגה חיה של תרבויות, צבעים ורגשות. הכינור – כלי שמזוהה עם מסורת ומורשת – מקבל תחת ידיה פרשנות מודרנית ונועזת, ההופכת אותו לגשר בין עבר להווה, בין קלאסי לעכשווי. הקהל חווה מפגש בלתי אמצעי עם אמנית מלאת נוכחות, שמביאה לבמה לא רק טכניקה עילאית, אלא גם לב ונשמה, ומותירה אחריה חותם עמוק ובלתי נשכח.',
      introEn: '',
      aboutHe: 'טניה וינוקור היא כנרת וירטואוזית, זמרת, רקדנית ומלחינה, שיצרה במהלך השנים סאונד ייחודי המשלב בין מזרח למערב באמצעות מוזיקה ותנועה.\n\nבמרכז המופעים שלה עומד הכינור – כלי הנגינה המזוהה ביותר עם התרבות היהודית לדורותיה – אשר מקבל חיים חדשים במופע עוצר נשימה שמחבר בין מוזיקה יהודית, צוענית, בלקנית, ספרדית ונגיעות ים-תיכוניות. טניה שוזרת במיומנות יוצאת דופן בין נגינה, שירה וריקוד ויוצרת מופע מולטי-תחומי נדיר בעוצמתו.\n\nהמיזוג בין הסגנונות השונים הוא ביטוי לשורשיה האישיים של וינוקור, אך גם בבואה לתרבות הישראלית העכשווית – תרבות שבה מזרח ומערב לא רק חיים זה לצד זה, אלא נטמעים זה בזה ויוצרים שפה מוזיקלית חדשה ומקורית בזירה הבינלאומית. וינוקור נולדה בקישינב למשפחה מוזיקלית ונשמה אמנות מגיל צעיר. היא החלה לנגן בכינור ולרקוד בלט כבר בגיל ארבע, ועמדה על במה זמן קצר לאחר מכן. בגיל שמונה עלתה לישראל, ומאז הופיעה בארץ ובעולם עם מיטב האמנים – ביניהם להקת מיומנה, דיוויד ברוזה, מוש בן ארי, גליקריה, ריטה – וכיכבה בפרויקטים רבים, כולל "מטבוחה פרוג\'קט", לצד מופעים מקוריים פרי יצירתה.\n\nבכל הופעה יוצרת טניה חיבור ייחודי עם הקהל – היא מנגנת, שרה, מספרת את סיפור המוזיקה ולוקחת את הצופים למסע מוזיקלי חובק עולם, דרך מקצבים וצלילים יהודיים, צועניים, ספרדיים ולדינו – מעין ציור חי של תרבויות ונופים. כאמנית בינלאומית, הופיעה וינוקור בארצות הברית, קובה, אירופה, תאילנד ובבמת TEDxJaffa, הקליטה שמונה אלבומים, העלתה שבעה מופעים רפרטואריים, ושיתפה פעולה עם יוצרים מובילים מתחומי מוזיקה מגוונים – בהם הפסנתרנית מירים מנדס, היוצר הקובני פבל אורקיצה, הזמרת היווניה גליקריה, להקת "ג׳יפסי קינגס", ודי ג׳ייז מהארץ ובעולם. מהצליל הראשון, טניה ממריאה עם הקהל למסע אנרגטי ומסחרר. בנגינת כינור וירטואוזית, קצב מדויק ונוכחות בימתית סוחפת – היא יוצרת חוויה מוזיקלית בלתי נשכחת שלא דומה לשום דבר אחר.',
      aboutEn: '',
      email: 'Office@taniav.com',
      phone: '+972-545816469',
      whatsapp: 'https://api.whatsapp.com/send/?phone=972545816469&text&type=phone_number&app_absent=0',
      whatsappGroup: 'https://chat.whatsapp.com/Db5IShfSYxAE3ZuZnBNZeM',
      spotify: 'https://open.spotify.com/artist/5LXSS53hivDk7iEFCf1lRm',
      apple: 'https://music.apple.com/us/artist/tania-vinokur/613589348',
      amazon: 'https://www.amazon.com/s?k=Tania+Vinokur&i=digital-music&search-type=ss',
      facebook: 'https://www.facebook.com/tania.vinokur/',
      instagram: 'https://www.instagram.com/taniavinokur/',
      youtube: 'https://www.youtube.com/user/tanvino',
      tiktok: 'https://www.tiktok.com/@tania_violin?lang=en',
      wikipedia: 'https://en.wikipedia.org/wiki/Tania_Vinokur',
      supportUrl: '',
      footer: '© Tania Vinokur Music',
      seoTitle: 'Tania Vinokur Violin | טניה וינוקור – כינור',
      seoDescription: 'טניה וינוקור – כנרת וירטואוזית, זמרת, רקדנית ומלחינה. לוח הופעות, מוזיקה וסרטונים.',
    },
    shows: [
      show({ ...tour, date: '2026-11-25', time: '20:30', venueHe: 'אולם קריגר, חיפה', venueEn: 'Krigerl, Haifa', notesHe: 'אורחים: ליאוניד פטשקה, ג׳וש בלאק (גאנה, אפריקה)', notesEn: 'Special guests: Leonid Ptashka, Josh Blakk (Ghana, Africa)' }),
      show({ ...tour, date: '2026-11-26', time: '20:30', venueHe: 'היכל התרבות תל אביב, תל אביב', venueEn: 'Concert Hall, Tel Aviv', notesHe: 'אורחים: להקת ״מיומנה״, ג׳וש בלאק (גאנה, אפריקה)', notesEn: 'Special guests: "Mayumana", Josh Blakk (Ghana, Africa)' }),
      show({ ...tour, date: '2026-12-04', time: '20:30', venueHe: 'קיוב, זכרון יעקב', venueEn: 'The Cube, Zichron Yaacov', notesHe: '', notesEn: '' }),
      show({ ...gypsy, ...band, date: '2026-12-22', time: '19:00', venueHe: 'קיוב, זכרון יעקב', venueEn: 'The Cube, Zichron Yaacov' }),
      show({ ...gypsy, ...band, date: '2027-02-11', time: '20:30', venueHe: 'פרינדס, ירושלים', venueEn: 'Friends, Jerusalem', status: 'soon' }),
      show({ ...gypsy, date: '2027-03-06', time: '20:30', venueHe: 'פרינדס, ראשל״צ', venueEn: 'Friends, Rishon Le Zion', status: 'soon', notesHe: 'מופע להקה · אורח - ליאוניד פטשקה', notesEn: 'Full band show · Special guest - Leonid Ptashka' }),
    ],
    videos: [
      { id: id(), youtubeId: '_Ih7HeWzRkw', title: 'אש, תשוקה ונשמה - The Violin Show', section: 'featured' },
      { id: id(), youtubeId: 'szMRszxOlRA', title: 'טניה וינוקור - תן לי עוד יום אחד', section: 'main' },
      { id: id(), youtubeId: 'xESL51D46wo', title: 'Asturias (Leyenda) by Albeniz – Violin and Dance', section: 'main' },
      { id: id(), youtubeId: '4cT1njfkclM', title: 'Morenika, Sheharhoret (Ladino Violin)', section: 'main' },
      { id: id(), youtubeId: 'Lg6kirrvI7E', title: 'Historia De Un Amor – Live', section: 'main' },
      { id: id(), youtubeId: 'YOQCmtlN2SE', title: 'Pampa – TEDxJaffa', section: 'main' },
      { id: id(), youtubeId: 'UNfIBZB47m0', title: "Sweet Child of Mine – Guns N' Roses (Violin Version)", section: 'main' },
      { id: id(), youtubeId: 'XILM8ZaHyzI', title: 'Wind – משב רוח', section: 'main' },
      { id: id(), youtubeId: 'YOQCmtlN2SE', title: 'Pampa by Tania Vinokur | TEDxJaffa', section: 'special' },
      { id: id(), youtubeId: 'TxQT8hv1BNE', title: 'טניה וינוקור כינור חשמלי – Electric Violin', section: 'special' },
    ],
    gallery: [
      { id: id(), image: '/img/g1.jpg', caption: 'גמר הישרדות עונה 5 – אייטם פתיחה', credit: 'צילום: אלון הדר' },
      { id: id(), image: '/img/g2.jpg', caption: 'TEDxJaffa – הופעה בטד, כינור וריקוד', credit: 'צילום: צלמים בקליק' },
      { id: id(), image: '/img/g3.jpeg', caption: 'כינור חשמלי', credit: 'צילום: אופיר הראל' },
      { id: id(), image: '/img/g4.jpg', caption: 'פארק הירקון', credit: 'צילום: אלון הדר' },
      { id: id(), image: '/img/g5.jpg', caption: 'ג׳יפסי – מופע כינור חובק עולם', credit: 'צילום: עודד לבנט' },
      { id: id(), image: '/img/g6.jpg', caption: 'שילוב של נגינה בכינור וריקוד', credit: 'צילום: אולפני רחובות' },
    ],
  };
}

