$(document).ready(function(){
    let symb = [
        {   "id":"paris",
             "name":"Paříž",
            "text":"Paříž (francouzsky Paris), hlavní a zároveň největší město Francie,je správním centrem regionu Île-de-France, zahrnujícího Paříž a její předměstí, přičemž sama tvoří jeden z departementů (fr.: département de Paris). Představuje přirozené centrum Pařížské aglomerace a díky 552,7 miliardám € HDP (2008) hospodářsky nejaktivnější oblast ve Francii.V Paříži sídlí vedení téměř poloviny všech francouzských společností stejně jako kanceláře hlavních mezinárodních firem a ředitelstvímnoha mezinárodních organizací, jako jsou UNESCO, OECD nebo ICC. Paříž je proto významným světovým kulturním, obchodním i politickýmcentrem. Počet obyvatel v roce 2015 činil 2 229 621, v celé aglomeraci pak 12 142 802 (údaj z roku 2016).Město se stalo nositelem Řádu čestné legie, Válečného kříže 1914–1918 a Řádu osvobození.",
            "img1":"parisss.jpg",
            "img2":"paris_symbol.png"
        },

        { "id":"marsan",
            "name":"Mont-de-Marsan",
            "text":"Mont-de-Marsan je francouzské město v regionu Nová Akvitánie, hlavní město (prefektura) departementu Landes. V roce 2010 zde žilo 31 225 obyvatel. Je centrem arrondissementu Mont-de-Marsan.",
            "img1":"marsan.jpg",
            "img2":"marsan_symbol.png"
        },

            { "id":"vers",
            "name":"Versailles",
            "text":"Versailles je město v západní části metropolitní oblasti Paříže ve Francii v departmentu Yvelines a regionu Île-de-France, světově proslulé svým stejnojmenným zámkem a parkem, zapsanými na seznamu UNESCO. Od centra Paříže je vzdáleno 17,1 km. Jedná se o luxusní a prosperující část pařížské aglomerace a důležité administrativní a soudní centrum.",
            "img1":"vers.jpg",
            "img2":"vers_symbol.png"
        },

            { "id":"aux",
            "name":"Auxerre",
            "text":"Auxerre [vysl. osér] je historické město ve Francii (Burgundsko-Franche-Comté), asi 160 km JV od Paříže, při středním toku řeky Yonne. Ve městě je gotická konkatedrála sensko-auxerrské arcidiecéze a v blízkosti slavné vinice (Chablis).",
            "img1":"auxe.jpg",
            "img2":"aux_symbol.png"
        },
            { "id":"epinal",
            "name":"Épinal",
            "text":"Épinal je město na východě Francie, prefektura departementu Vosges, v regionu Grand Est. Leží na řece Moselle, 60 km jihovýchodně od města Nancy. V roce 2011 mělo 32 734, v roce 1925 30 042 obyvatel. Průmysl železářský a textilní je dnes už v útlumu. Důležitá silniční křižovatka.",
            "img1":"epinal.jpg",
            "img2":"epinal_symbol.png"
        },
            { "id":"poi",
            "name":"Poitiers",
            "text":"Poitiers [vysl. poatjé] je město ležící na řece Clain na západě centrální Francie, asi 320 km jihozápadně od Paříže. Jedná se o hlavní město prefektury, která je součástí departementu Vienne v regionu Nová Akvitánie. V Potiers je stará univerzita, biskupství a město je známé svými památkami a malebnými uličkami plnými středověkých domů a starobylých kostelů i velkými historickými událostmi, které se zde odehrály. Město mělo významnou strategickou polohu na návrší mezi řekami Boivre a Clain. Obyvatelé Poitiers si říkají pictaviens (mužský rod) a pictaviennes (ženský rod) a žijí na celkové rozloze 42,11 km² v průměrné nadmořské výšce 75 m n. m. Každý třetí obyvatel má pod 30 let a každý čtvrtý je studentem.",
            "img1":"poi.jpeg",
            "img2":"poi_symbol.png"
        },
            { "id":"vendee",
            "name":"La Roche-sur-Yon",
            "text":"La Roche-sur-Yon je město na západě Francie v departementu Vendée, jehož je hlavním městem. Město se nachází na břehu řeky Yon.",
            "img1":"yon.jpg",
            "img2":"yon_symbol.png"
        },
            { "id":"stras",
            "name":"Štrasburk",
            "text":"Štrasburk (francouzsky Strasbourg, německy Straßburg, alsasky Strossburi) je hlavní město regionu Grand Est ve Francii a historická metropole Alsaska na levém břehu Rýna s 237 100 obyvateli. V minulosti patřil střídavě k Německu a k Francii, což ovlivnilo i jeho vzhled. Nejznámější stavbou je katedrála Notre-Dame de Strasbourg z 12. – 15. století, postavená z červeného pískovce. Některé městské domy ze 17. století mají vnější fasády hrázděné. Ve Štrasburku sídlí Rada Evropy, Evropský parlament a Evropský soud pro lidská práva. Od roku 1988 je historické centrum Štrasburku s názvem „Grande Île“ zapsáno na Seznamu světového dědictví UNESCO. V roce 2017 byla pod ochranu UNESCO zařazena i městská část „Neustadt“ vzniklá během německé správy města (1871–1918).",
            "img1":"stras.jpg",
            "img2":"stras_symbol.png"
        },
            { "id":"bord",
            "name":"Bourdeaux",
            "text":"Bordeaux (vysl. [bordó] okcit. Bordèu vysl. [burdeu], latinsky Burdigala) je přístavní město na jihozápadě Francie, při ústí řeky Garonny do Atlantského oceánu. Živé obchodní a univerzitní město s bohatou historií je hlavním městem departementu Gironde a regionu Nová Akvitánie. Oblast Bordeaux je jednou z nejznámějších vinařských oblastí na světě s objemem asi 14,5 miliardy EUR. V oblasti je ale i významný průmysl, zejména letecký, technologický a informatický. Žije zde přibližně 254 tisíc obyvatel. Historická část města se starým přístavem byla v červnu 2007 zařazena na seznam světového dědictví UNESCO.",
            "img1":"bord.jpg",
            "img2":"bord_symbol.png"
        },
            { "id":"dome",
            "name":"Clermont-Ferrand",
            "text":"Clermont-Ferrand je město ve střední části Francie v departmentu Puy-de-Dôme a regionu Auvergne-Rhône-Alpes. Díky své výjimečné poloze ve Francouzském středohoří má Clermont-Ferrand strategickou pozici a leží na spojnici Francie a střední Evropy.",
            "img1":"cler.jpg",
            "img2":"cler_symbol.png"
        },
            { "id":"caen",
            "name":"Caen",
            "text":"Caen [kan] je město v Normandii na severozápadě Francie, historické středisko Normandského vévodství. Žije zde přibližně 105 tisíc obyvatel. Město leží na řece Orne asi 200 km severozápadně od Paříže a je pozoruhodné zejména stavbami, které zde v 11. století nechal zbudovat Vilém I. Dobyvatel. Jeho Caenský hrad patří mezi největší v západní Evropě. Mužský klášter sv. Štěpána (s hrobem Viléma Dobyvatele) a ženský klášter sv. Jiljí jsou dnes sídly magistrátu respektive regionální rady. V blízkosti města proběhlo za 2. světové války (6. června 1944) vylodění spojeneckých vojsk v Normandii a bitva o Caen. Původní plány počítaly s obsazením Caen do tří dnů, místo toho se o město bojovalo 34 dnů a město bylo z velké části zničeno. Dnes zde události vylodění v Normandii připomíná Muzeum míru.",
            "img1":"caen.jpg",
            "img2":"caen_symbol.png"
        },
            { "id":"dijon",
            "name":"Dijon",
            "text":"Dijon [dyžon] je historické město na východě Francie na řece Ouche, hlavní město departmentu Côte-d'Or a regionu Burgundsko-Franche-Comté, ve středověku sídlo mocných burgundských vévodů. Má 151 000 obyvatel, je to důležité středisko obchodu a průmyslu i dopravní uzel. Je sídlem arcibiskupství, Burgundské univerzity, ENS Dijon a dalších škol. Nedaleko města pramení řeka Seina. Je střediskem burgundské vinařské oblasti a obchodu s vínem, nejznámějším dijonským produktem je „dijonská hořčice“. Každým rokem na začátku září probíhá v Dijonu vinobraní, kterého se účastní různé folklorní soubory z celé Evropy včetně zastoupení z Moravy. Každé tři roky pořádá Dijon mezinárodní výstavu květin Florissimo. Na severozápadě města se nachází závodní dráha Dijon-Prenois, která je místem mnoha motoristických událostí. V minulosti se zde jezdila i Grand Prix Francie vozů Formule 1.",
            "img1":"dijon.jpg",
            "img2":"dijon_symbol.png"
        },
            { "id":"rennes",
            "name":"Rennes",
            "text":"Rennes (bretonsky Roazhon) je město v severozápadní Francii, nejdůležitější město v Bretani a sídlo prefektury departementu Ille-et-Vilaine. Rennes bylo dříve hlavní město Bretaňského knížectví. Rozkládá se na pahorku na soutoku řek Ille a Vilaine. Rennes je desátá největší francouzská městská oblast s 700 000 obyvateli. Město má více než 64 000 studentů.",
            "img1":"rennes.jpg",
            "img2":"rennes_symbol.png"
        },
            { "id":"orleans",
            "name":"Orleáns",
            "text":"Orléans (do češtiny někdy překládáno jako Orleán) je město ve Francii, od jehož názvu a názvu celé oblasti se v minulosti odvozoval šlechtický titul příslušející mladším synům z královského rodu – titul vévoda orléanský.",
            "img1":"orleans.jpg",
            "img2":"orleans_symbol.png"
        },
            { "id":"champ",
            "name":"Châlons-en-Champagne",
            "text":"Châlons-en-Champagne [šálonzan šampaň], dříve Châlons-sur-Marne, je francouzské město v kraji Champagne, v departementu Marne a v regionu Grand Est. Historické jádro leží mezi řekou Marne a jejími rameny Mau a Nau v rovinaté, úrodné a převážně zemědělské krajině. Město s bohatou historií a řadou historických památek je sídlem několika vyšších škol a biskupství. Dominantou města je kostel Notre-Dame-en-Vaux.",
            "img1":"champ.jpeg",
            "img2":"champ_symbol.png"
        },
            { "id":"aja",
            "name":"Ajaccio",
            "text":"Ajaccio (francouzsky [aʒakˈsjo], korsicky Aiacciu [aˈjaʧːu], latinsky Ajax [ajaks]) je město a přístav ležící na západním pobřeží ostrova Korsika a sídlo departementu Corse-du-Sud v regionu Korsika. (Registrační značka vozidel s rozlišovacím znakem 2A na konci.) Je považováno za hlavní město ostrova. Má přes 67 000 obyvatel. Nalézá se v něm rodný dům, muzeum i památník Napoleona Bonaparta. Ve městě sídlí fotbalový klub AC Ajaccio.",
            "img1":"aja.jpg",
            "img2":"aja_symbol.png"
        },
            { "id":"mont",
            "name":"Montpellier",
            "text":"Montpellier [monpelje] je město na jihu Francie v regionu Okcitánie, správní středisko departementu Hérault. Leží 10 km od pobřeží Středozemního moře, asi 130 km západně od Marseille a 570 km jižně od Paříže. S 281 tisíci obyvatel (z toho asi třetinu tvoří studenti) představuje osmé největší město Francie. V městské aglomeraci žije téměř 608 tisíc osob. Montpellier je nejen průmyslovým městem, ale především sídlem starobylé univerzity, která byla ve středověku kulturním centrem jižní Francie. Ve městě se narodili svatý Roch, zakladatel sociologie Auguste Comte či malíř Frédéric Bazille. Vznikl zde Řád sv. Ducha z Montpellier a sídlí zde také montpellierské arcibiskupství.",
            "img1":"mont.jpeg",
            "img2":"mont_symbol.png"
        },
            { "id":"toulouse",
            "name":"Toulouse",
            "text":"Toulouse (okcitánsky Tolosa) je město v jihozápadní Francii na řece Garonně, 580 km jižně od Paříže. Aglomerace Toulouse s 1 117 000 obyvateli tvoří jednu z nejrychleji rostoucích aglomerací v Evropě a čtvrtou největší ve Francii. Toulouse je jedno z hlavních evropských center leteckého a kosmického průmyslu. Nachází se zde ústředí společnosti Airbus, navigačního systému Galileo, satelitního systému SPOT, nebo vesmírné centrum pod záštitou CNES (francouzsky Centre National d'Études Spatiales, Národní středisko pro kosmický výzkum), jež je největším evropským kosmickým centrem. Místní univerzita patří mezi nejstarší v Evropě (založena r. 1229) a s 97 000 studenty jde o třetí největší univerzitu ve Francii po Paříži a Lyonu. Do roku 1790 bylo Toulouse střediskem provincie Languedoc, dnes se jedná o hlavní město regionu Okcitánie, druhého nejrozlehlejšího regionu kontinentální Francie. Je také správním střediskem departementu Haute-Garonne.",
            "img1":"toul.jpg",
            "img2":"toul_symbol.png"
        },
            { "id":"lille",
            "name":"Lille",
            "text":"Lille (nizozemsky Rijsel) je město v severní Francii na řece Deûle. Je hlavním městem regionu Hauts-de-France a také préfecture (hlavní město) departementu Nord. Ve městě rovněž sídlí arcibiskupství Lille, hlava Církevní provincie Lille. Leží poblíž hranic s Belgií. V únoru 2000 se k městu Lille připojilo město Lomme. Populace vnitřního města čítá 225 597 obyvatel. Na celém území města žije odhadem 1 260 000 obyvatel, čímž se řadí mezi nejvíce osídlené oblasti v Evropě; je čtvrtým největším městem země. Ve městě se nacházejí tři univerzity.",
            "img1":"lille.jpg",
            "img2":"lille_symbol.png"
        },
            { "id":"amiens",
            "name":"Amiens",
            "text":"Amiens [amján ] je historické město v severní Francii v departmentu Somme. Leží asi 120 km severně od Paříže na řece Sommě v oblasti historické Pikardii a má asi 132 727 obyvatel. Katedrála ze 13. století je zapsána na Seznamu světového dědictví a je největší ve Francii.",
            "img1":"amiens.jpg",
            "img2":"amiens_symbol.png"
        },
            { "id":"mars",
            "name":"Marseille",
            "text":"Marseille (výslovnost [marsej], francouzská [maʁ.sɛj] IPA), hlavní město Provence, je po Paříži druhé největší město Francie. Leží v jihovýchodní části země, na pobřeží Středozemního moře, ve Lvím zálivu. V roce 2012 mělo Marseille 852 516 obyvatel (v roce 1999 jako aglomerace 1 350 000, resp. 1 516 000 obyvatel). Jde o nejvýznamnější francouzský obchodní přístav. Nachází se zde sídlo marseilleského arcibiskupství. Dnes je městem téměř všech národů žijících okolo Středozemního moře včetně mnoha Arabů.",
            "img1":"mars.jpg",
            "img2":"mars_symbol.png"
        },
            { "id":"lyon",
            "name":"Lyon",
            "text":"Lyon [lijon] je historické město ve středovýchodní Francii, hlavní město regionu Auvergne-Rhône-Alpes a hlavní město metropole Lyonu. Dohromady se svými příměstskými částmi a satelitními městečky tvoří po Paříži druhou největší aglomerací ve Francii s 1 757 180 obyvateli a je přibližně 20. až 25. v Evropě. Leží na soutoku řek Rhôny a Saôny, které je dělí na tři části, spojené 22 mosty. Město je významné průmyslové, obchodní a finanční centrum s mnoha vysokými školami, vědeckými ústavy, je kulturním a náboženským střediskem a je proslulé svou zvláštní kuchyní. Městem prochází nejdůležitější francouzská železniční trať Paříž – Lyon – Marseille, setkává se zde několik dálnic a východně od města je mezinárodní letiště. V Lyonu sídlí mezinárodní centrála Interpolu, televize Euronews a Mezinárodní institut pro výzkum rakoviny (IARC). Historické centrum je součástí Světového dědictví UNESCO. Severně od města začíná vinařská oblast Beaujolais a jižně Côtes du Rhône. Na západ od města začíná Francouzské středohoří, na východ předhůří Alp. Podle města se jmenovala provincie Lyonnais, jíž byl Lyon hlavním městem. Le Lyonnais i dnes označuje oblast kolem města, která je však mnohem menší než region Rhône-Alpes.",
            "img1":"lyon.jpg",
            "img2":"lyon_symbol.png"
        },
            { "id":"cahors",
            "name":"Cahors",
            "text":"Cahors je francouzské město v departementu Lot v regionu Midi-Pyrénées. V roce 2009 zde žilo 19 948 obyvatel. Je centrem arrondissementu Cahors.",
            "img1":"cahors.jpg",
            "img2":"cahors_symbol.png"
        },

    // UNESCO
    //
            { "id":"arles",
            "name":"Arles",
            "text":"Arles je historické francouzské město v departementu Bouches-du-Rhône, v regionu Provence-Alpes-Côte d'Azur na řece Rhône, asi 25 km od mořského pobřeží. Žije zde asi 52 600 obyvatel.",
            "img1":"arles1.jpg",
            "img2":"arles2.jpg"
        },
            { "id":"dugard",
            "name":"Pont du Gard",
            "text":"Pont du Gard [pon dy gár] (česky též Gardský most) je akvadukt v jižní Francii, asi 25 km severovýchodně od města Nîmes. Je 49 metrů vysoký a až 275 metrů dlouhý a byl postaven v 1. století př. n. l., kdy jižní Francie tvořila provincii (srv. současné označení Provence) starověkého Říma. Skládá se ze tří na sobě stojících arkád a byl součástí kanálu, který přiváděl vodu do města. Pro svou mimořádnou hodnotu byl v roce 1985 zařazen na Seznam světového dědictví UNESCO. Pont du Gard (neboli most přes řeku Gard) je mistrovské dílo římského stavitelství. Postaven byl patrně roku 19 př. n. l. za dob císaře Augusta. Ve století devátém přestal dlouho neudržovaný vodovod fungovat, protože na některých místech zarostl vápennou usazeninou. V 18. století byly pilíře druhého patra zúženy a osekány, aby se po nejnižší řadě oblouků dalo chodit jako po mostě. V 19. století byl výrazně rekonstruován.",
            "img1":"gard1.jpg",
            "img2":"gard2.jpg"
        },
            { "id":"midi",
            "name":"Canal du Midi",
            "text":"Canal du Midi [kanal dymidy] je 240 km dlouhý průplav mezi Toulouse a Sète ve Francii, vybudovaný v letech 1666-1682. Technicky náročné vodní dílo, které muselo překonat výškové rozdíly 57 a téměř 190 m, spojilo Atlantský oceán se Středozemním mořem; odtud označení canal des Deux Mers, „Kanál dvou moří“. Na něj později navázal paralelní průplav podél řeky Garonny a další díla, která významně ovlivnila hospodářství celé oblasti. Průkopnické technické dílo dnes slouží hlavně turistice. Canal du Midi byl v roce 1996 zapsán na Seznam světového dědictví UNESCO.",
            "img1":"canal1.jpg",
            "img2":"canal2.jpg"
        },
            { "id":"carca",
            "name":"Carcassonne",
            "text":"Carcassonne je město v jižní Francii v departementu Aude a regionu Languedoc-Roussillon, asi 70 km severozápadně od Perpignanu. Protéká jím řeka Aude a prochází jím Canal du Midi. Původní opevněné město, středověká městská pevnost Carcassonne, vypínající se na pahorku na pravém břehu Aude, patří k nejzachovalejším středověkým pevnostním městům v celé Evropě a byla roku 1997 zařazena na seznam kulturních památek organizace UNESCO.",
            "img1":"carca1.jpg",
            "img2":"carca2.jpg"
        },
            { "id":"michel",
            "name":"Mont-Saint-Michel",
            "text":"Le Mont-Saint-Michel (výslovnost: mon sen mišel; IPA: mɔ̃ sɛ̃ mi.ʃɛl), česky Hora sv. Michaela, je žulový, 80 metrů vysoký, přílivový ostrov (s pevninou byl od r. 1879 spojen náspem,který byl následně zrušen,protože docházelo k vysychání zátoky. Nyní spojuje ostrov s pevninou most) v někdejším regionu Dolní Normandie (Basse-Normandie) v severozápadní Francii ve stejnojmenném zálivu u normandského pobřeží (département Manche). Rozdíl výšky mořské hladiny při přílivu a odlivu je cca 15 m (nejvíce v Evropě), takže buď je „hora“ obklopena tekutými písky nebo „plave v moři“. Odlivem se obnažuje mořské dno do vzdálenosti 10–15 km od pobřeží. Nachází se zde četné historické památky (klášterní kostel z 11.–16. stol., gotické klášterní budovy, opevnění z 13.–15. stol.). Ostrov, záliv i klášter na území o rozloze 6,560 ha jsou od roku 1979 zapsány na Seznamu světového dědictví UNESCO.",
            "img1":"mont1.jpg",
            "img2":"mont2.jpg"
        },
            { "id":"vezelay",
            "name":"klášter Vézelay",
            "text":"Klášter Vézelay v Burgundsku ( Francie) bylo založen jako benediktinské opatství v 9. století a po požáru předchozích staveb obnoven v letech 1120-1150. Ve vrcholném středověku byl rušným poutním místem s domnělými ostatky sv. Marie Magdaleny, za reformace v 16. století byl klášter zrušen a postupně rozbořen. Zbyla velkolepá románská bazilika Sainte Madeleine se dvěma věžemi v průčelí, se západní předsíní (narthex) pro poutníky a s raně gotickým závěrem. Interiér kostela je pozoruhodně dobře zachován, zejména galerie 99 figurálních hlavic na sloupech. Pro svou mimořádnou hodnotu byla bazilika i zbytky kláštera roku 1979 zařazeny do Seznamu světového dědictví UNESCO.",
            "img1":"vez1.jpg",
            "img2":"vez2.jpg"
        },
            { "id":"nancy",
            "name":"Nancy",
            "text":"Nancy [nãsi:] (německy zastarale Nanzig) je město na východě Francie v departementu Meurthe-et-Moselle a regionu Grand Est. Žije zde přibližně 104 tisíc obyvatel, po Metách je druhým největším městem Lotrinska. Nancy je také pátým největším univerzitním městem Francie. Jeho tři náměstí jsou zapsána na Seznamu světového dědictví UNESCO.",
            "img1":"nan1.jpg",
            "img2":"nan2.jpg"
        },
            { "id":"havre",
            "name":"Le Havre",
            "text":"Le Havre je francouzská městská obec a město v departementu Seiny-Maritime v oblasti Normandie na severozápadě Francie. Nachází se na pravém břehu ústí řeky Seiny na kanálu jihozápadně od Pays de Caux. Le Havre je nejlidnatější obec Horní Normandie, i když celková populace větší aglomerace Le Havre je menší než Rouen. Po Reims je to také druhá největší subprefektura ve Francii. Jeho obyvatelé jsou známí jako Havrais nebo Havraises. Město a přístav byly založeny králem Františkem I. v roce 1517. Ekonomický vývoj v raném novověku byl brzden náboženskými válkami, konflikty s angličtinou, epidemiemi a bouřkami. To bylo od konce 18. století, že Le Havre začal růst a přístav vzlétl nejprve s obchodem s otroky pak jiným mezinárodním obchodem. Po bombových útocích v roce 1944 začala firma Auguste Perret přestavět město na konkrétní. Ropný, chemický a automobilový průmysl byl během Trente Glorieuses (poválečný boom) dynamický, ale sedmdesátá léta znamenala konec zlatého věku mořských parníků a začátek hospodářské krize: počet obyvatel klesal, nezaměstnanost vzrostla a zůstává na vysoké úrovni úroveň dnes. Změny v letech 1990–2000 byly četné. Právo vyhrálo komunální volby a zavázalo město k cestě přeměny, usilující o rozvoj sektoru služeb a nových průmyslových odvětví (letectví, větrné turbíny). Projekt Port 2000 zvýšil kapacitu kontejnerů, aby konkurovaly přístavům severní Evropy, transformovaly jižní části města a vrátily se oceánské lodě. Moderní Le Havre zůstává hluboce ovlivněna jeho zaměstnaneckými a námořními tradicemi. Její přístav je druhým největším ve Francii, po Marseille, pro celkový provoz a největším francouzským kontejnerovým přístavem.",
            "img1":"hav1.jpg",
            "img2":"hav2.jpg"
        },
            { "id":"gartempe",
            "name":"Klášter Saint-Savin-sur-Gartempe",
            "text":"Saint-Savin-sur-Gartempe [sén savén syr gartam] je název bývalého francouzského benediktinského opatství v obci Saint-Savin (Vienne), asi 40 km východně od Poitiers. Díky své mimořádné historické a umělecké hodnotě je od roku 1983 zapsáno na Seznamu světového dědictví UNESCO.",
            "img1":"gar1.jpg",
            "img2":"gar2.jpg"
        },
    ];
    let onoff1 = 0;
    let onoff2 = 0;
    let color = '';
    let errorcatcher = 0;
    $('path').mouseenter(function(){
        color = $(this).css('fill');
        $(this).css('fill','blue');
    });
    $('path').mouseleave(function(){
        $(this).css('fill',color);
    });
    $('#mesta1').click(function(){
        errorcatcher=1;
        if(onoff1==0){
            $("#mesta1").css('fill','red');
            onoff1=1;
            $("circle").toggle(500);
        } else {
            $("#mesta1").css('fill','green');
            onoff1=0;
            $("circle").toggle(500);
        }
    });
    $('#mesta2').click(function(){
       
        if(onoff1==0){
            $("#mesta1").css('fill','red');
            onoff1=1;
            $("circle").toggle(500);
        } else {
            $("#mesta1").css('fill','green');
            onoff1=0;
            $("circle").toggle(500);
        }
    });


    $('#unesco1').click(function(){
        errorcatcher=1;
        if(onoff2==0){
            $("#unesco1").css('fill','red');
            $("rect").not("#unesco1").not("#mesta1").toggle(500);
            onoff2=1;
        } else {
            $("#unesco1").css('fill','green');
            onoff2=0;
            $("rect").not("#unesco1").not("#mesta1").toggle(500);
        }
    });
    $('#unesco2').click(function(){
        if(onoff2==0){
            $("#unesco1").css('fill','red');
            $("rect").not("#unesco1").not("#mesta1").toggle(500);
            onoff2=1;
        } else {
            $("#unesco1").css('fill','green');
            onoff2=0;
            $("rect").not("#unesco1").not("#mesta1").toggle(500);
        }
    });
    $('circle').click(function(){

        $("circle").css('fill','red');
        $("rect").not("#unesco1").not("#mesta1").css('fill','black');
        $(this).css('fill','green');
        let id = $(this).attr('id');
        let elem = symb.find(item => {return item.id == id});
        $('#info').slideUp(0);
        $('#info').html(`<div style="position:relative;left:-30px;border: 1px gray solid;"><div style="background-color:#003482;color:white;padding:5px;" class="col-12"><h1>${elem.name}</h1></div><div style="margin-right:10px; margin-left:10px;" class="text-justify" style="border-top: 1px gray solid"class="col-12">${elem.text}</div>
        <div class="row">
        <img width="400" height="250" style="padding: 10px;" src="${elem.img1}" alt="00">
        <img width="250" height="250" style="padding: 10px;" src="${elem.img2}" alt="00">
    </div></div>`);
        $('#info').show(200);  
  
    });

    $('rect').click(function(){
        if(errorcatcher==0){
            $("circle").css('fill','red');
            $("rect").not("#unesco1").not("#mesta1").css('fill','black');
            $(this).css('fill','green');
            let id = $(this).attr('id');
            let elem = symb.find(item => {return item.id == id});
            $('#info').slideUp(0);
            $('#info').html(`<div style="position:relative;left:-30px;border: 1px gray solid;"><div style="background-color:#003482;color:white;padding:5px;" class="col-12"><h1>${elem.name}</h1></div><div style="margin-right:10px; margin-left:10px;" class="text-justify" style="border-top: 1px gray solid"class="col-12">${elem.text}</div>
            <div class="row">
            <img width="400" height="250" style="padding: 10px;" src="${elem.img1}" alt="00">
            <img width="250" height="250" style="padding: 10px;" src="${elem.img2}" alt="00">
        </div></div>`);
            $('#info').show(200); 
        }
        errorcatcher=0;
    });
});