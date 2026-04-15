const questions = {

  tech: [
    {q:"What is HTML?", options:["Language","OS","Database","Protocol"], answer:0},
    {q:"What is CSS used for?", options:["Logic","Styling","Database","Server"], answer:1},
    {q:"JavaScript is?", options:["Language","Browser","OS","Tool"], answer:0},
    {q:"Which is frontend?", options:["HTML","Node","MongoDB","SQL"], answer:0},
    {q:"Which is backend?", options:["CSS","JS","Node.js","HTML"], answer:2},
    {q:"Full form of CPU?", options:["Central Processing Unit","Control Unit","Computer Unit","Central Program Unit"], answer:0},
    {q:"Full form of RAM?", options:["Random Access Memory","Read Memory","Run Memory","Ready Memory"], answer:0},
    {q:"Which is database?", options:["MySQL","HTML","CSS","JS"], answer:0},
    {q:"Which is OS?", options:["Windows","Chrome","HTML","Python"], answer:0},
    {q:"Python is?", options:["Language","OS","Tool","App"], answer:0},

    {q:"Full form of URL?", options:["Uniform Resource Locator","User Resource Link","Universal Link","None"], answer:0},
    {q:"Which is cloud service?", options:["AWS","HTML","CSS","C"], answer:0},
    {q:"Which is version control?", options:["Git","HTML","CSS","JS"], answer:0},
    {q:"GitHub is?", options:["Repo hosting","OS","Compiler","Editor"], answer:0},
    {q:"Which is IDE?", options:["VS Code","Chrome","Edge","Windows"], answer:0},

    {q:"Which is programming language?", options:["Java","HTML","CSS","XML"], answer:0},
    {q:"Which is NoSQL DB?", options:["MongoDB","MySQL","Oracle","SQL"], answer:0},
    {q:"Full form of API?", options:["Application Programming Interface","App Program Input","Access Program","None"], answer:0},
    {q:"Which is scripting language?", options:["JavaScript","C","C++","Java"], answer:0},
    {q:"Which is compiled language?", options:["C","HTML","CSS","JS"], answer:0},

    {q:"Binary system base?", options:["2","8","10","16"], answer:0},
    {q:"Hexadecimal base?", options:["16","10","8","2"], answer:0},
    {q:"Which is browser?", options:["Chrome","Linux","Windows","DOS"], answer:0},
    {q:"Which is mobile OS?", options:["Android","HTML","JS","CSS"], answer:0},
    {q:"Which is markup language?", options:["HTML","C","Java","Python"], answer:0},

    {q:"Which is styling language?", options:["CSS","HTML","JS","C"], answer:0},
    {q:"Which is framework?", options:["React","HTML","CSS","C"], answer:0},
    {q:"Which is library?", options:["React","C","OS","Compiler"], answer:0},
    {q:"Which is backend language?", options:["Node.js","HTML","CSS","XML"], answer:0},
    {q:"Which is database query language?", options:["SQL","HTML","CSS","JS"], answer:0},

    {q:"Which is search engine?", options:["Google","Windows","Linux","HTML"], answer:0},
    {q:"Which is OS kernel?", options:["Linux","Chrome","HTML","CSS"], answer:0},
    {q:"Which is AI tool?", options:["ChatGPT","HTML","CSS","Excel"], answer:0},
    {q:"Which is spreadsheet?", options:["Excel","Word","Paint","HTML"], answer:0},
    {q:"Which is presentation tool?", options:["PowerPoint","Excel","Word","HTML"], answer:0},

    {q:"Which is text editor?", options:["VS Code","Chrome","Windows","Linux"], answer:0},
    {q:"Which is DBMS?", options:["MySQL","HTML","CSS","JS"], answer:0},
    {q:"Which is primary memory?", options:["RAM","HDD","SSD","DVD"], answer:0},
    {q:"Which is secondary memory?", options:["HDD","RAM","Cache","Register"], answer:0},
    {q:"Which is input device?", options:["Keyboard","Monitor","Speaker","Printer"], answer:0},

    {q:"Which is output device?", options:["Monitor","Keyboard","Mouse","Scanner"], answer:0},
    {q:"Which is network?", options:["Internet","HTML","CSS","JS"], answer:0},
    {q:"Which is protocol?", options:["HTTP","HTML","CSS","JS"], answer:0},
    {q:"Which is secure protocol?", options:["HTTPS","HTTP","FTP","SMTP"], answer:0},
    {q:"Which is email protocol?", options:["SMTP","HTML","CSS","JS"], answer:0},

    {q:"Which is frontend framework?", options:["React","Node","MongoDB","SQL"], answer:0},
    {q:"Which is backend framework?", options:["Express","HTML","CSS","JS"], answer:0},
    {q:"Which is JS runtime?", options:["Node.js","Chrome","HTML","CSS"], answer:0},
    {q:"Which is package manager?", options:["npm","HTML","CSS","JS"], answer:0},
    {q:"Which is CDN?", options:["Cloudflare","HTML","CSS","JS"], answer:0}
  ],

  gk: [
    {q:"Capital of India?", options:["Delhi","Mumbai","Chennai","Kolkata"], answer:0},
    {q:"National animal?", options:["Tiger","Lion","Elephant","Dog"], answer:0},
    {q:"National bird?", options:["Peacock","Parrot","Eagle","Crow"], answer:0},
    {q:"National flower?", options:["Lotus","Rose","Lily","Sunflower"], answer:0},
    {q:"National currency?", options:["Rupee","Dollar","Euro","Yen"], answer:0},

    {q:"Largest planet?", options:["Jupiter","Earth","Mars","Venus"], answer:0},
    {q:"Smallest planet?", options:["Mercury","Earth","Mars","Venus"], answer:0},
    {q:"Sun is a?", options:["Star","Planet","Galaxy","Comet"], answer:0},
    {q:"Earth satellite?", options:["Moon","Mars","Sun","Venus"], answer:0},
    {q:"Water formula?", options:["H2O","CO2","O2","H2"], answer:0},

    {q:"Who discovered India?", options:["Columbus","Vasco da Gama","Newton","Einstein"], answer:1},
    {q:"Father of Nation?", options:["Gandhi","Nehru","Patel","Bose"], answer:0},
    {q:"First PM of India?", options:["Nehru","Gandhi","Modi","Patel"], answer:0},
    {q:"Current PM India?", options:["Narendra Modi","Rahul Gandhi","Kejriwal","Yogi"], answer:0},
    {q:"India independence?", options:["1947","1950","1945","1930"], answer:0},

    {q:"Red planet?", options:["Mars","Earth","Venus","Jupiter"], answer:0},
    {q:"Blue planet?", options:["Earth","Mars","Venus","Jupiter"], answer:0},
    {q:"Fastest animal?", options:["Cheetah","Lion","Tiger","Dog"], answer:0},
    {q:"Largest ocean?", options:["Pacific","Atlantic","Indian","Arctic"], answer:0},
    {q:"Largest continent?", options:["Asia","Africa","Europe","Australia"], answer:0},

    {q:"Smallest continent?", options:["Australia","Europe","Asia","Africa"], answer:0},
    {q:"Longest river?", options:["Nile","Ganga","Amazon","Yamuna"], answer:0},
    {q:"National sport India?", options:["Hockey","Cricket","Football","Kabaddi"], answer:0},
    {q:"Currency USA?", options:["Dollar","Euro","Rupee","Yen"], answer:0},
    {q:"Currency UK?", options:["Pound","Dollar","Euro","Rupee"], answer:0},

    {q:"Mount Everest in?", options:["Nepal","India","China","USA"], answer:0},
    {q:"Taj Mahal in?", options:["Agra","Delhi","Mumbai","Jaipur"], answer:0},
    {q:"Ganga river starts?", options:["Himalaya","Delhi","UP","MP"], answer:0},
    {q:"National tree?", options:["Banyan","Neem","Mango","Peepal"], answer:0},
    {q:"National fruit?", options:["Mango","Apple","Banana","Orange"], answer:0},

    {q:"ISRO related to?", options:["Space","Army","Police","Railway"], answer:0},
    {q:"DRDO related?", options:["Defense","Space","Bank","School"], answer:0},
    {q:"UNO full form?", options:["United Nations Organization","Union Nation","United Org","None"], answer:0},
    {q:"WHO full form?", options:["World Health Organization","Health Org","World Help","None"], answer:0},
    {q:"GDP means?", options:["Gross Domestic Product","Global Dev Product","None","Data Product"], answer:0},

    {q:"India largest state?", options:["Rajasthan","UP","MP","Bihar"], answer:0},
    {q:"India smallest state?", options:["Goa","Delhi","Sikkim","Tripura"], answer:0},
    {q:"Delhi is?", options:["Capital","State","Country","Village"], answer:0},
    {q:"India total states?", options:["28","29","30","27"], answer:0},
    {q:"India language?", options:["Hindi","English","Both","None"], answer:2},

    {q:"Festival of lights?", options:["Diwali","Holi","Eid","Christmas"], answer:0},
    {q:"Festival colors?", options:["Holi","Diwali","Eid","Christmas"], answer:0},
    {q:"Christmas date?", options:["25 Dec","1 Jan","15 Aug","2 Oct"], answer:0},
    {q:"Independence day?", options:["15 Aug","26 Jan","2 Oct","1 May"], answer:0},
    {q:"Republic day?", options:["26 Jan","15 Aug","2 Oct","1 Jan"], answer:0},

    {q:"National emblem?", options:["Lion","Tiger","Elephant","Horse"], answer:0},
    {q:"Ashoka chakra color?", options:["Blue","Red","Green","Black"], answer:0},
    {q:"Indian flag colors?", options:["3","2","4","5"], answer:0},
    {q:"Indian flag top color?", options:["Saffron","White","Green","Blue"], answer:0},
    {q:"Indian flag middle?", options:["White","Green","Blue","Red"], answer:0}
  ],

math: [
  {q:"2 + 2 = ?", options:["2","3","4","5"], answer:2},
  {q:"5 × 6 = ?", options:["11","30","25","20"], answer:1},
  {q:"10 ÷ 2 = ?", options:["2","5","10","20"], answer:1},
  {q:"Square of 5?", options:["10","20","25","15"], answer:2},
  {q:"Cube of 2?", options:["4","6","8","10"], answer:2},

  {q:"√16 = ?", options:["2","3","4","5"], answer:2},
  {q:"15 + 10 = ?", options:["20","25","30","35"], answer:1},
  {q:"20 - 5 = ?", options:["10","15","20","25"], answer:1},
  {q:"9 × 9 = ?", options:["72","81","90","99"], answer:1},
  {q:"100 ÷ 10 = ?", options:["5","10","15","20"], answer:1},

  {q:"7 + 8 = ?", options:["14","15","16","17"], answer:1},
  {q:"12 × 2 = ?", options:["20","22","24","26"], answer:2},
  {q:"25 ÷ 5 = ?", options:["4","5","6","7"], answer:1},
  {q:"Square of 9?", options:["81","72","90","99"], answer:0},
  {q:"Cube of 3?", options:["6","9","18","27"], answer:3},

  {q:"√25 = ?", options:["3","4","5","6"], answer:2},
  {q:"50 + 20 = ?", options:["60","70","80","90"], answer:1},
  {q:"60 - 30 = ?", options:["20","25","30","35"], answer:2},
  {q:"8 × 7 = ?", options:["54","56","58","60"], answer:1},
  {q:"81 ÷ 9 = ?", options:["7","8","9","10"], answer:2},

  {q:"11 + 11 = ?", options:["20","21","22","23"], answer:2},
  {q:"6 × 6 = ?", options:["30","32","36","40"], answer:2},
  {q:"144 ÷ 12 = ?", options:["10","11","12","13"], answer:2},
  {q:"Square of 7?", options:["42","49","56","64"], answer:1},
  {q:"Cube of 4?", options:["16","32","64","48"], answer:2},

  {q:"√36 = ?", options:["4","5","6","7"], answer:2},
  {q:"80 + 15 = ?", options:["90","95","100","105"], answer:1},
  {q:"90 - 45 = ?", options:["40","45","50","55"], answer:1},
  {q:"5 × 12 = ?", options:["50","55","60","65"], answer:2},
  {q:"100 ÷ 4 = ?", options:["20","25","30","35"], answer:1},

  {q:"13 + 7 = ?", options:["18","19","20","21"], answer:2},
  {q:"14 × 2 = ?", options:["26","28","30","32"], answer:1},
  {q:"49 ÷ 7 = ?", options:["5","6","7","8"], answer:2},
  {q:"Square of 6?", options:["30","36","42","48"], answer:1},
  {q:"Cube of 5?", options:["100","110","125","150"], answer:2},

  {q:"√49 = ?", options:["5","6","7","8"], answer:2},
  {q:"22 + 8 = ?", options:["28","29","30","31"], answer:2},
  {q:"40 - 15 = ?", options:["20","25","30","35"], answer:1},
  {q:"3 × 15 = ?", options:["40","45","50","55"], answer:1},
  {q:"200 ÷ 20 = ?", options:["5","10","15","20"], answer:1},

  {q:"18 + 2 = ?", options:["18","19","20","21"], answer:2},
  {q:"16 × 2 = ?", options:["30","32","34","36"], answer:1},
  {q:"64 ÷ 8 = ?", options:["6","7","8","9"], answer:2},
  {q:"Square of 8?", options:["60","64","68","72"], answer:1},
  {q:"Cube of 6?", options:["180","200","216","240"], answer:2},

  {q:"√64 = ?", options:["6","7","8","9"], answer:2},
  {q:"70 + 20 = ?", options:["80","85","90","95"], answer:2},
  {q:"100 - 60 = ?", options:["30","35","40","45"], answer:2},
  {q:"9 × 12 = ?", options:["96","100","108","110"], answer:2},
  {q:"150 ÷ 5 = ?", options:["20","25","30","35"], answer:2}
],

physics: [
  {q:"Unit of force?", options:["Newton","Joule","Watt","Volt"], answer:0},
  {q:"Speed formula?", options:["Distance/Time","Time/Distance","Mass/Force","None"], answer:0},
  {q:"Unit of energy?", options:["Joule","Newton","Watt","Volt"], answer:0},
  {q:"Gravity value?", options:["9.8","10","8","12"], answer:0},
  {q:"Unit of power?", options:["Watt","Joule","Volt","Ampere"], answer:0},

  {q:"Unit of current?", options:["Ampere","Volt","Ohm","Watt"], answer:0},
  {q:"Unit of voltage?", options:["Volt","Ampere","Ohm","Watt"], answer:0},
  {q:"Ohm law?", options:["V=IR","I=VR","R=VI","None"], answer:0},
  {q:"Unit of resistance?", options:["Ohm","Volt","Ampere","Watt"], answer:0},
  {q:"Work formula?", options:["Force×Distance","Mass×Speed","Time×Force","None"], answer:0},

  {q:"Light speed?", options:["3×10^8","3×10^6","3×10^5","3×10^7"], answer:0},
  {q:"SI unit of mass?", options:["kg","g","mg","ton"], answer:0},
  {q:"SI unit of time?", options:["Second","Minute","Hour","Day"], answer:0},
  {q:"Energy source?", options:["Sun","Moon","Earth","Mars"], answer:0},
  {q:"Motion means?", options:["Change position","Rest","Stop","None"], answer:0},

  {q:"Unit of frequency?", options:["Hertz","Volt","Ampere","Ohm"], answer:0},
  {q:"Wave unit?", options:["Hertz","Meter","Second","None"], answer:0},
  {q:"Lens type?", options:["Convex","Flat","Sharp","None"], answer:0},
  {q:"Mirror type?", options:["Plane","Round","Sharp","None"], answer:0},
  {q:"Unit of pressure?", options:["Pascal","Newton","Joule","Volt"], answer:0},

  {q:"Pressure formula?", options:["Force/Area","Area/Force","Mass/Time","None"], answer:0},
  {q:"Heat unit?", options:["Joule","Watt","Volt","Ampere"], answer:0},
  {q:"SI unit of length?", options:["Meter","Cm","Km","Mm"], answer:0},
  {q:"Acceleration formula?", options:["Change velocity/time","Speed×Time","Mass/Force","None"], answer:0},
  {q:"Force formula?", options:["Mass×Acceleration","Speed×Time","Distance×Time","None"], answer:0},

  {q:"Energy type?", options:["Kinetic","Speed","Time","None"], answer:0},
  {q:"Potential energy depends?", options:["Height","Speed","Time","None"], answer:0},
  {q:"Work unit?", options:["Joule","Watt","Volt","Ampere"], answer:0},
  {q:"Speed unit?", options:["m/s","km","m","s"], answer:0},
  {q:"Electric charge unit?", options:["Coulomb","Volt","Ohm","Ampere"], answer:0},

  {q:"Magnet has?", options:["2 poles","3 poles","4 poles","None"], answer:0},
  {q:"Gravity acts?", options:["Downward","Upward","Side","None"], answer:0},
  {q:"Energy cannot be?", options:["Created","Used","Stored","Transferred"], answer:0},
  {q:"Sound needs?", options:["Medium","Vacuum","Light","None"], answer:0},
  {q:"Light travels in?", options:["Straight line","Curve","Circle","None"], answer:0},

  {q:"Temperature unit?", options:["Kelvin","Meter","Second","Volt"], answer:0},
  {q:"Heat transfer?", options:["Conduction","Walking","Running","None"], answer:0},
  {q:"Electricity flow?", options:["Electrons","Protons","Neutrons","None"], answer:0},
  {q:"Battery gives?", options:["Energy","Force","Speed","None"], answer:0},
  {q:"Circuit means?", options:["Closed path","Open path","Wire","None"], answer:0},

  {q:"SI unit of power?", options:["Watt","Volt","Ohm","Ampere"], answer:0},
  {q:"Resistance depends?", options:["Length","Color","Shape","None"], answer:0},
  {q:"Unit of work?", options:["Joule","Volt","Ampere","Watt"], answer:0},
  {q:"Lens used in?", options:["Glasses","Fan","Motor","None"], answer:0},
  {q:"Mirror used in?", options:["Seeing","Cooking","Driving","None"], answer:0},

  {q:"Heat flows from?", options:["Hot to cold","Cold to hot","Equal","None"], answer:0},
  {q:"Sun gives?", options:["Energy","Water","Air","None"], answer:0},
  {q:"Energy stored in battery?", options:["Chemical","Light","Heat","None"], answer:0},
  {q:"SI unit of frequency?", options:["Hertz","Volt","Ampere","Ohm"], answer:0},
  {q:"Unit of acceleration?", options:["m/s²","m/s","km","s"], answer:0}
]
};