// ── EMC i18n: 다국어 번역 데이터 ──

const LANGS = {
  ko: { label: '한국어', flag: '🇰🇷' },
  en: { label: 'English', flag: '🇺🇸' },
  zh: { label: '中文',    flag: '🇨🇳' },
  ja: { label: '日本語',  flag: '🇯🇵' },
  fr: { label: 'Français',flag: '🇫🇷' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  es: { label: 'Español', flag: '🇪🇸' },
  it: { label: 'Italiano',  flag: '🇮🇹' },
};

const T = {
  // NAV
  nav_about:   { ko:'소개', en:'About', zh:'关于', ja:'概要', fr:'À propos', de:'Über uns', es:'Acerca', it:'Chi siamo' },
  nav_event:   { ko:'행사', en:'Event', zh:'活动', ja:'イベント', fr:'Événement', de:'Veranstaltung', es:'Evento', it:'Evento' },
  nav_roadmap: { ko:'로드맵', en:'Roadmap', zh:'路线图', ja:'ロードマップ', fr:'Feuille de route', de:'Fahrplan', es:'Hoja de ruta', it:'Tabella di marcia' },
  nav_founder: { ko:'설립자', en:'Founder', zh:'创始人', ja:'創設者', fr:'Fondateur', de:'Gründer', es:'Fundador', it:'Fondatore' },
  nav_cta:     { ko:'참가 신청', en:'Register', zh:'报名参加', ja:'参加申込', fr:'S\'inscrire', de:'Anmelden', es:'Registrarse', it:'Iscriviti' },

  // HERO
  hero_label:   { ko:'TECH OPEN INNOVATION · KOREA 2026', en:'TECH OPEN INNOVATION · KOREA 2026', zh:'技术开放创新 · 韩国 2026', ja:'テックオープンイノベーション · 韓国 2026', fr:'TECH OPEN INNOVATION · CORÉE 2026', de:'TECH OPEN INNOVATION · KOREA 2026', es:'TECH OPEN INNOVATION · COREA 2026' },
  hero_tagline1:{ ko:'전기자동차 시대,', en:'The Age of Electric Vehicles,', zh:'电动汽车时代，', ja:'電気自動車の時代、', fr:'À l\'ère des véhicules électriques,', de:'Das Zeitalter der Elektrofahrzeuge,', es:'La era de los vehículos eléctricos,', it:"L'era dei veicoli elettrici," },
  hero_tagline2:{ ko:'한국이 만드는 글로벌 축제', en:'Korea\'s Global Festival', zh:'韩国打造的全球盛典', ja:'韓国が作るグローバルフェスティバル', fr:'Le Festival Mondial Créé par la Corée', de:'Koreas Globales Festival', es:'El Festival Global Creado por Corea', it:'Il Festival Globale Creato dalla Corea' },
  stat1_lbl:    { ko:'대 기네스 도전', en:'Cars for Guinness', zh:'辆吉尼斯挑战', ja:'台ギネス挑戦', fr:'Voitures pour Guinness', de:'Autos für Guinness', es:'Autos para Guinness', it:'Auto per Guinness' },
  stat2_lbl:    { ko:'개국 국기 래핑', en:'Nations\' Flags', zh:'个国家国旗', ja:'カ国旗', fr:'Drapeaux Nationaux', de:'Nationalflaggen', es:'Banderas Nacionales', it:'Bandiere Nazionali' },
  stat3_lbl:    { ko:'파일럿 목표', en:'Pilot Target', zh:'试行目标', ja:'パイロット目標', fr:'Objectif Pilote', de:'Pilotprojektziel', es:'Meta Piloto', it:'Obiettivo Pilota' },
  btn_learn:    { ko:'행사 알아보기', en:'Learn More', zh:'了解更多', ja:'詳しく見る', fr:'En savoir plus', de:'Mehr erfahren', es:'Saber más', it:'Scopri di più' },
  btn_register: { ko:'참가 신청하기', en:'Register Now', zh:'立即报名', ja:'今すぐ申込', fr:'S\'inscrire', de:'Jetzt anmelden', es:'Inscríbete ya', it:'Iscriviti ora' },

  // ABOUT
  about_label:  { ko:'ABOUT EMC', en:'ABOUT EMC', zh:'关于EMC', ja:'EMCについて', fr:'À PROPOS D\'EMC', de:'ÜBER EMC', es:'SOBRE EMC', it:'CHI È EMC' },
  about_title:  { ko:'왜 EMC인가?', en:'Why EMC?', zh:'为什么选择EMC？', ja:'なぜEMCなのか？', fr:'Pourquoi EMC ?', de:'Warum EMC?', es:'¿Por qué EMC?', it:'Perché EMC?' },
  about_desc:   { ko:'F1이 한 영국인의 아이디어에서 수조 원 규모의 글로벌 스포츠로 성장한 것처럼,\nEMC는 전기차 시대의 문화 IP를 한국이 선점하는 것을 목표로 합니다.',
                  en:'Just as F1 grew from one Englishman\'s idea into a multi-billion global sport,\nEMC aims for Korea to claim the cultural IP of the electric vehicle era.',
                  zh:'就像F1从一个英国人的想法发展成价值数十亿的全球运动，\nEMC的目标是让韩国抢占电动汽车时代的文化IP。',
                  ja:'F1がひとりのイギリス人のアイデアから数兆円規模のグローバルスポーツに成長したように、\nEMCは電気自動車時代の文化IPを韓国が先占することを目指します。',
                  fr:'Tout comme la F1 est passée de l\'idée d\'un Anglais à un sport mondial de plusieurs milliards,\nEMC vise à faire de la Corée le leader culturel de l\'ère des véhicules électriques.',
                  de:'So wie die F1 aus der Idee eines Engländers zu einem globalen Milliarden-Sport wurde,\nzielt EMC darauf ab, dass Korea das kulturelle IP des Elektrofahrzeugzeitalters beansprucht.',
                  es:'Al igual que la F1 creció de la idea de un inglés hasta convertirse en un deporte global multimillonario,\nEMC aspira a que Corea lidere la IP cultural de la era del vehículo eléctrico.' },

  card1_title:  { ko:'전기차 시대의 도래', en:'Dawn of the EV Era', zh:'电动汽车时代的到来', ja:'EV時代の到来', fr:'L\'ère des VE', de:'Das EV-Zeitalter', es:'La Era del VE', it:"L'Era dei VE" },
  card1_body:   { ko:'기술 패권은 미국·중국이 가져갔지만, 전기차 문화와 축제 IP는 아직 주인이 없습니다.',
                  en:'The US and China may have claimed tech dominance, but EV culture and festival IP still has no owner.',
                  zh:'美国和中国可能占据了技术主导权，但电动汽车文化和节日IP还没有主人。',
                  ja:'技術覇権は米中が握ったかもしれないが、EV文化・フェスティバルIPはまだ主がいない。',
                  fr:'Les États-Unis et la Chine dominent la technologie, mais la culture VE et l\'IP festival n\'ont pas encore de maître.',
                  de:'USA und China dominieren die Technologie, aber EV-Kultur und Festival-IP haben noch keinen Eigentümer.',
                  es:'EE.UU. y China dominan la tecnología, pero la cultura de VE y la IP del festival aún no tienen dueño.' },

  card2_title:  { ko:'F1이 준 영감', en:'Inspired by F1', zh:'F1带来的灵感', ja:'F1からのインスピレーション', fr:'Inspiré par la F1', de:'Von der F1 Inspiriert', es:'Inspirado en la F1', it:'Ispirato dalla F1' },
  card2_body:   { ko:'F1은 한 사람의 비전에서 시작되었습니다. EMC는 전기차 세계의 F1이 될 것입니다.',
                  en:'F1 started from one person\'s vision. EMC will become the F1 of the electric vehicle world.',
                  zh:'F1从一个人的愿景开始。EMC将成为电动汽车世界的F1。',
                  ja:'F1はひとりのビジョンから始まった。EMCは電気自動車世界のF1になる。',
                  fr:'La F1 a commencé avec la vision d\'une personne. EMC deviendra la F1 du monde des VE.',
                  de:'Die F1 begann mit der Vision einer Person. EMC wird zur F1 der Elektrofahrzeugwelt.',
                  es:'La F1 comenzó con la visión de una persona. EMC se convertirá en la F1 del mundo VE.' },

  card3_title:  { ko:'한국만이 할 수 있는 것', en:'Only Korea Can Do This', zh:'只有韩国能做到', ja:'韓国だけができること', fr:'Seulement la Corée Peut', de:'Nur Korea Kann Das', es:'Solo Corea Puede Hacerlo', it:'Solo la Corea Può' },
  card3_body:   { ko:'판문점·파주라는 세계 유일의 평화 상징 공간, K-컬처 파워, 전기차 제조 강국.',
                  en:'The world\'s only peace symbol space at Panmunjom·Paju, K-Culture power, and EV manufacturing strength.',
                  zh:'板门店·坡州这一世界唯一的和平象征空间、K文化力量和电动汽车制造强国。',
                  ja:'板門店・坡州という世界唯一の平和象徴空間、K-カルチャーパワー、EV製造強国。',
                  fr:'L\'espace unique au monde de la paix à Panmunjom·Paju, la puissance K-Culture et l\'industrie VE.',
                  de:'Der weltweit einzige Friedenssymbolraum in Panmunjom·Paju, K-Culture-Macht und EV-Stärke.',
                  es:'El único espacio símbolo de paz del mundo en Panmunjom·Paju, el poder K-Culture y la industria VE.' },

  card4_title:  { ko:'E = mc² 철학', en:'E = mc² Philosophy', zh:'E = mc²哲学', ja:'E = mc²の哲学', fr:'Philosophie E = mc²', de:'E = mc² Philosophie', es:'Filosofía E = mc²', it:'Filosofia E = mc²' },
  card4_body:   { ko:'작은 아이디어(m)가 연결과 문화의 제곱(c²)을 만나 세상을 바꾸는 에너지(E)가 됩니다.',
                  en:'A small idea (m) meets the square of connection and culture (c²) to become the energy (E) that changes the world.',
                  zh:'小小的想法（m）遇上联系与文化的平方（c²），成为改变世界的能量（E）。',
                  ja:'小さなアイデア（m）が繋がりと文化の二乗（c²）に出会い、世界を変えるエネルギー（E）になる。',
                  fr:'Une petite idée (m) rencontre le carré de la connexion et de la culture (c²) pour devenir l\'énergie (E) qui change le monde.',
                  de:'Eine kleine Idee (m) trifft auf das Quadrat von Verbindung und Kultur (c²) und wird zur Energie (E), die die Welt verändert.',
                  es:'Una pequeña idea (m) se encuentra con el cuadrado de la conexión y la cultura (c²) para convertirse en la energía (E) que cambia el mundo.' },

  // EVENT
  event_label:  { ko:'FLAGSHIP EVENT', en:'FLAGSHIP EVENT', zh:'旗舰活动', ja:'フラッグシップイベント', fr:'ÉVÉNEMENT PHARE', de:'HAUPTVERANSTALTUNG', es:'EVENTO PRINCIPAL', it:'EVENTO PRINCIPALE' },
  event_title:  { ko:'기네스 도전 국제 전기차 페스티벌', en:'Guinness Record EV Festival', zh:'吉尼斯挑战国际电动车节', ja:'ギネス挑戦国際EVフェスティバル', fr:'Festival EV Défi Guinness', de:'Guinness-Rekord EV Festival', es:'Festival Internacional EV Récord Guinness', it:'Festival EV Sfida Guinness' },
  event_desc:   { ko:'전세계 전기차 오너가 한국에 모여 기네스 세계기록에 도전합니다.', en:'EV owners from around the world gather in Korea to challenge the Guinness World Record.', zh:'来自世界各地的电动车车主聚集韩国，挑战吉尼斯世界纪录。', ja:'世界中のEVオーナーが韓国に集まり、ギネス世界記録に挑戦します。', fr:'Les propriétaires de VE du monde entier se rassemblent en Corée pour défier le record mondial Guinness.', de:'EV-Besitzer aus aller Welt versammeln sich in Korea, um den Guinness-Weltrekord herauszufordern.', es:'Propietarios de VE de todo el mundo se reúnen en Corea para desafiar el Récord Mundial Guinness.', it:'I proprietari di EV di tutto il mondo si riuniscono in Corea per il record Guinness.' },

  route1_title: { ko:'인천 출발', en:'Incheon Departure', zh:'仁川出发', ja:'仁川出発', fr:'Départ Incheon', de:'Abfahrt Incheon', es:'Salida Incheon', it:'Partenza Incheon' },
  route1_body:  { ko:'국제공항 인근 집결\n200개국 국기 래핑\n개막식', en:'Assembly near Int\'l Airport\n200-nation flag wrapping\nOpening ceremony', zh:'在国际机场附近集合\n200国国旗包装\n开幕式', ja:'国際空港近くに集結\n200カ国旗ラッピング\n開幕式', fr:'Rassemblement près de l\'aéroport\nDrapeaux de 200 nations\nCérémonie d\'ouverture', de:'Treffpunkt nahe Flughafen\n200-Nationen-Flaggen\nEröffnungsfeier', es:'Reunión cerca del aeropuerto\nBanderas de 200 naciones\nCeremonia de apertura' },

  route2_title: { ko:'서울 한강', en:'Seoul Han River', zh:'首尔汉江', ja:'ソウル漢江', fr:'Han-Gang Séoul', de:'Seoul Han-Fluss', es:'Río Han, Seúl', it:'Fiume Han Seul' },
  route2_body:  { ko:'한강 드라이브 코스\n주요 미디어 구간\n글로벌 중계', en:'Han River drive route\nPrime media zone\nGlobal broadcast', zh:'汉江驾车路线\n主要媒体区域\n全球直播', ja:'漢江ドライブコース\n主要メディア区間\nグローバル中継', fr:'Parcours le long du Han\nZone médias principale\nRetransmission mondiale', de:'Han-Fluss-Strecke\nHauptmedienzone\nGlobale Übertragung', es:'Ruta por el río Han\nZona de medios principal\nTransmisión global' },

  route3_title: { ko:'파주 도착', en:'Paju Arrival', zh:'坡州到达', ja:'坡州到着', fr:'Arrivée à Paju', de:'Ankunft Paju', es:'Llegada a Paju', it:'Arrivo Paju' },
  route3_body:  { ko:'평화의 상징 지역\n기네스 공식 기록\n폐막식', en:'Symbol of peace\nOfficial Guinness record\nClosing ceremony', zh:'和平象征地区\n吉尼斯官方记录\n闭幕式', ja:'平和の象徴地域\nギネス公式記録\n閉幕式', fr:'Symbole de paix\nRecord Guinness officiel\nCérémonie de clôture', de:'Friedenssymbol\nOffizieller Guinness-Rekord\nAbschlussfeier', es:'Símbolo de paz\nRécord oficial Guinness\nCeremonia de clausura' },

  guinness_note:{ ko:'전세계 200개국 국기를 래핑한 전기차들이 한국의 평화 루트를 달립니다', en:'Electric vehicles wrapped in 200 national flags drive Korea\'s peace route', zh:'贴有200个国家国旗的电动车行驶在韩国的和平路线上', ja:'200カ国の国旗をラッピングした電気自動車が韓国の平和ルートを走ります', fr:'Des voitures électriques décorées des drapeaux de 200 nations parcourent la route de la paix en Corée', de:'Mit 200 Nationalflaggen gewrappte Elektrofahrzeuge fahren Koreas Friedensroute', es:'Vehículos eléctricos con banderas de 200 naciones recorren la ruta de paz de Corea', it:'Veicoli EV con 200 bandiere percorrono la ruta di pace della Corea' },
  dk_record:    { ko:'2016년 덴마크 기록', en:'2016 Denmark Record', zh:'2016年丹麦记录', ja:'2016年デンマーク記録', fr:'Record Danemark 2016', de:'Dänemark-Rekord 2016', es:'Récord Dinamarca 2016', it:'Record Danimarca 2016' },
  emc_target:   { ko:'EMC 목표 — 세계신기록', en:'EMC Target — World Record', zh:'EMC目标 — 世界新纪录', ja:'EMC目標 — 世界新記録', fr:'Objectif EMC — Nouveau Record', de:'EMC-Ziel — Weltrekord', es:'Meta EMC — Récord Mundial', it:'Obiettivo EMC — Record Mondiale' },

  // ROADMAP
  rm_label:     { ko:'ROADMAP', en:'ROADMAP', zh:'路线图', ja:'ロードマップ', fr:'FEUILLE DE ROUTE', de:'FAHRPLAN', es:'HOJA DE RUTA', it:'TABELLA DI MARCIA' },
  rm_title:     { ko:'단계별 추진 계획', en:'Step-by-Step Plan', zh:'分阶段推进计划', ja:'段階的推進計画', fr:'Plan par Étapes', de:'Stufenweiser Plan', es:'Plan por Etapas', it:'Piano per Fasi' },

  phase1_title: { ko:'기반 구축', en:'Foundation', zh:'基础建设', ja:'基盤構築', fr:'Fondation', de:'Grundlagenaufbau', es:'Fundación', it:'Fondazione' },
  phase1_items: { ko:['사업계획서 완성 및 법인 설립','웹사이트 오픈 (emc.city)','스폰서 접촉: 현대차·기아·LG에너지','정부 지원사업 신청','기네스 공식 접촉'],
                  en:['Complete business plan & incorporation','Website launch (emc.city)','Sponsor outreach: Hyundai·Kia·LG Energy','Government grant applications','Official Guinness contact'],
                  zh:['完成商业计划书及法人注册','网站开通（emc.city）','赞助商接触：现代·起亚·LG能源','申请政府支持项目','联系吉尼斯官方'],
                  ja:['事業計画書完成・法人設立','ウェブサイト開設（emc.city）','スポンサー接触：現代・起亜・LGエナジー','政府支援事業申請','ギネス公式接触'],
                  fr:['Finaliser le plan d\'affaires et créer la société','Lancement du site (emc.city)','Contacts sponsors : Hyundai·Kia·LG Energy','Demandes de subventions','Contact Guinness officiel'],
                  de:['Geschäftsplan & Gründung abschließen','Website-Launch (emc.city)','Sponsor-Kontakt: Hyundai·Kia·LG Energy','Förderanträge stellen','Offizieller Guinness-Kontakt'],
                  es:['Completar plan de negocio e incorporación','Lanzamiento web (emc.city)','Contacto patrocinadores: Hyundai·Kia·LG Energy','Solicitudes de subvenciones','Contacto oficial Guinness'],
                  it:['Completare il piano aziendale','Lancio sito (emc.city)','Contatto sponsor: Hyundai·Kia·LG Energy','Richieste di sovvenzione','Contatto ufficiale Guinness'] },

  phase2_title: { ko:'파일럿 행사', en:'Pilot Event', zh:'试行活动', ja:'パイロットイベント', fr:'Événement Pilote', de:'Pilotveranstaltung', es:'Evento Piloto', it:'Evento Pilota' },
  phase2_items: { ko:['100~200대 소규모 파일럿','인천 → 한강 → 파주 루트 검증','미디어·유튜브 커버리지 확보','기네스 도전 글로벌 홍보'],
                  en:['Small pilot: 100~200 vehicles','Validate Incheon → Han River → Paju route','Secure media & YouTube coverage','Global Guinness challenge promotion'],
                  zh:['小规模试行：100~200辆','验证仁川→汉江→坡州路线','获得媒体和YouTube报道','全球吉尼斯挑战宣传'],
                  ja:['小規模パイロット：100～200台','仁川→漢江→坡州ルート検証','メディア・YouTube確保','ギネス挑戦グローバル広報'],
                  fr:['Petit pilote : 100-200 véhicules','Valider Incheon → Han → Paju','Couverture médias & YouTube','Promotion mondiale Guinness'],
                  de:['Kleines Pilotprojekt: 100-200 Fahrzeuge','Route Incheon→Han→Paju validieren','Medien & YouTube-Abdeckung sichern','Globale Guinness-Promotion'],
                  es:['Piloto pequeño: 100-200 vehículos','Validar ruta Incheon→Han→Paju','Cobertura media & YouTube','Promoción global Guinness'] },

  phase3_title: { ko:'공식 1회 대회 🏆', en:'Official 1st Event 🏆', zh:'第一届正式赛事 🏆', ja:'公式第1回大会 🏆', fr:'1ère Édition Officielle 🏆', de:'Offizielle 1. Veranstaltung 🏆', es:'1er Evento Oficial 🏆', it:'1° Evento Ufficiale 🏆' },
  phase3_items: { ko:['403대+ 기네스 세계기록 도전','200개국 국기 래핑 퍼레이드','글로벌 중계 연결','타이틀 스폰서 본격 운영'],
                  en:['403+ vehicles Guinness World Record attempt','200-nation flag-wrapped parade','Global broadcast','Full title sponsor activation'],
                  zh:['403辆+吉尼斯世界纪录挑战','200国国旗游行','全球直播','正式冠名赞助商运营'],
                  ja:['403台以上ギネス世界記録挑戦','200カ国国旗ラッピングパレード','グローバル中継','タイトルスポンサー本格運営'],
                  fr:['Tentative record Guinness 403+ véhicules','Défilé 200 drapeaux nationaux','Retransmission mondiale','Sponsoring titre complet'],
                  de:['Guinness-Weltrekordversuch 403+ Fahrzeuge','Parade mit 200 Nationalflaggen','Globale Übertragung','Vollständige Titelsponsor-Aktivierung'],
                  es:['Intento récord Guinness 403+ vehículos','Desfile 200 banderas nacionales','Transmisión global','Patrocinador titular completo'],
                  it:['Tentativo record Guinness 403+ veicoli','Sfilata 200 bandiere nazionali','Trasmissione globale','Sponsor titolo completo'] },

  phase4_title: { ko:'글로벌 IP화', en:'Global IP Expansion', zh:'全球IP化', ja:'グローバルIP化', fr:'Expansion IP Mondiale', de:'Globale IP-Expansion', es:'Expansión IP Global', it:'Espansione IP Globale' },
  phase4_items: { ko:['EMC 유럽·미국·아시아 확장','OTT 다큐멘터리 시리즈화','프랜차이즈 수익화','올림픽급 글로벌 브랜드'],
                  en:['EMC Europe·US·Asia expansion','OTT documentary series','Franchise monetization','Olympic-level global brand'],
                  zh:['EMC欧洲·美国·亚洲扩张','OTT纪录片系列','特许经营收益化','奥运级全球品牌'],
                  ja:['EMC欧州・米国・アジア展開','OTTドキュメンタリーシリーズ','フランチャイズ収益化','オリンピック級グローバルブランド'],
                  fr:['Expansion EMC Europe·US·Asie','Série documentaire OTT','Monétisation franchise','Marque mondiale niveau olympique'],
                  de:['EMC Europa·USA·Asien-Expansion','OTT-Dokumentarserie','Franchise-Monetarisierung','Olympisches globales Marken-Niveau'],
                  es:['Expansión EMC Europa·EE.UU.·Asia','Serie documental OTT','Monetización de franquicia','Marca global de nivel olímpico'],
                  it:['Espansione EMC Europa·USA·Asia','Serie documentario OTT','Monetizzazione franchise','Marchio globale di livello olimpico'] },

  // WHY KOREA
  why_label:    { ko:'WHY KOREA', en:'WHY KOREA', zh:'为什么是韩国', ja:'なぜ韓国', fr:'POURQUOI LA CORÉE', de:'WARUM KOREA', es:'POR QUÉ COREA', it:'PERCHÉ LA COREA' },
  why_title:    { ko:'한국이어야 하는 이유', en:'Why Korea', zh:'为什么是韩国', ja:'韓国である理由', fr:'Pourquoi la Corée', de:'Warum Korea', es:'Por qué Corea', it:'Perché la Corea' },
  why1_title:   { ko:'전기차 제조 강국', en:'EV Manufacturing Power', zh:'电动车制造强国', ja:'EV製造強国', fr:'Puissance EV', de:'EV-Fertigungsstärke', es:'Potencia Fabricación VE' },
  why1_body:    { ko:'현대·기아·삼성SDI·SK온 등 세계 Top5 EV 생태계', en:'Hyundai·Kia·Samsung SDI·SK On — world Top5 EV ecosystem', zh:'现代·起亚·三星SDI·SK On——世界Top5 EV生态系统', ja:'現代・起亜・サムスンSDI・SK On — 世界Top5 EVエコシステム', fr:'Hyundai·Kia·Samsung SDI·SK On — top 5 mondial des VE', de:'Hyundai·Kia·Samsung SDI·SK On — weltweites Top5-EV-Ökosystem', es:'Hyundai·Kia·Samsung SDI·SK On — ecosistema EV Top5 mundial' },
  why2_title:   { ko:'K-컬처 글로벌 파워', en:'K-Culture Global Power', zh:'K文化全球力量', ja:'K-カルチャーのグローバルパワー', fr:'Puissance K-Culture', de:'K-Culture Globale Macht', es:'Poder Global K-Cultura' },
  why2_body:    { ko:'K-팝·K-드라마로 구축된 전세계 미디어 네트워크', en:'Global media network built by K-Pop & K-Drama', zh:'K-Pop和K-Drama建立的全球媒体网络', ja:'K-Pop・K-ドラマが構築したグローバルメディアネットワーク', fr:'Réseau mondial construit par K-Pop & K-Drama', de:'Globales Mediennetzwerk durch K-Pop & K-Drama', es:'Red global construida por K-Pop y K-Drama' },
  why3_title:   { ko:'판문점·파주 루트', en:'Panmunjom·Paju Route', zh:'板门店·坡州路线', ja:'板門店・坡州ルート', fr:'Route Panmunjom·Paju', de:'Panmunjom·Paju-Route', es:'Ruta Panmunjom·Paju' },
  why3_body:    { ko:'세계 어느 나라도 따라올 수 없는 평화+미래의 상징', en:'A symbol of peace + future no other country can replicate', zh:'任何国家都无法复制的和平+未来象征', ja:'どの国も真似できない平和＋未来の象徴', fr:'Un symbole de paix + futur qu\'aucun pays ne peut reproduire', de:'Ein Symbol für Frieden + Zukunft, das kein anderes Land replizieren kann', es:'Un símbolo de paz + futuro que ningún otro país puede replicar' },
  why4_title:   { ko:'IT 인프라 세계 1위', en:'World\'s #1 IT Infrastructure', zh:'世界第一IT基础设施', ja:'IT基盤世界1位', fr:'Infrastructure IT n°1 mondial', de:'Welt-Nr.-1 IT-Infrastruktur', es:'Infraestructura IT #1 Mundial' },
  why4_body:    { ko:'5G·AI·스마트시티로 최첨단 페스티벌 운영 가능', en:'5G·AI·Smart City enables cutting-edge festival operations', zh:'5G·AI·智慧城市使最先进的节日运营成为可能', ja:'5G・AI・スマートシティで最先端フェスティバル運営可能', fr:'5G·IA·Ville intelligente permet des opérations de festival de pointe', de:'5G·KI·Smart City ermöglicht hochmoderne Festival-Betrieb', es:'5G·IA·Ciudad Inteligente permite operaciones de festival de vanguardia' },
  why5_title:   { ko:'골든타임', en:'Golden Moment', zh:'黄金时机', ja:'ゴールデンタイム', fr:'Moment Doré', de:'Goldener Moment', es:'Momento de Oro' },
  why5_body:    { ko:'EV 대중화 완성, 문화 IP 선점 경쟁 시작 전', en:'EV mass adoption complete, before cultural IP competition begins', zh:'EV大众化完成，文化IP竞争开始前', ja:'EV大衆化完成、文化IP先占競争開始前', fr:'Adoption massive VE complète, avant la concurrence IP culturelle', de:'EV-Massenadoption abgeschlossen, vor Kulturell-IP-Wettbewerb', es:'Adopción masiva VE completa, antes de la competencia IP cultural' },
  why6_title:   { ko:'선점 효과', en:'First-Mover Advantage', zh:'先发优势', ja:'先占効果', fr:'Avantage du Pionnier', de:'First-Mover-Vorteil', es:'Ventaja de Pionero' },
  why6_body:    { ko:'F1처럼 최초가 곧 영구적 표준이 됩니다', en:'Like F1, the first becomes the permanent standard', zh:'就像F1一样，第一个成为永久标准', ja:'F1のように、最初が永久的な標準になる', fr:'Comme la F1, le premier devient le standard permanent', de:'Wie die F1 wird der Erste zum dauerhaften Standard', es:'Como la F1, el primero se convierte en el estándar permanente' },

  // FOUNDER
  founder_label:{ ko:'FOUNDER', en:'FOUNDER', zh:'创始人', ja:'創設者', fr:'FONDATEUR', de:'GRÜNDER', es:'FUNDADOR', it:'FONDATORE' },
  founder_title:{ ko:'설립자', en:'Founder', zh:'创始人', ja:'設立者', fr:'Fondateur', de:'Gründer', es:'Fundador' },
  founder_role: { ko:'Founder & Chairman, EMC International', en:'Founder & Chairman, EMC International', zh:'创始人兼主席，EMC国际', ja:'創設者・会長、EMCインターナショナル', fr:'Fondateur et Président, EMC International', de:'Gründer & Vorsitzender, EMC International', es:'Fundador y Presidente, EMC International', it:'Fondatore e Presidente, EMC International' },
  cred1:        { ko:'Harvard University, Economics', en:'Harvard University, Economics', zh:'哈佛大学，经济学', ja:'ハーバード大学、経済学', fr:'Harvard University, Économie', de:'Harvard University, Wirtschaftswissenschaften', es:'Universidad Harvard, Economía', it:'Università Harvard, Economia' },
  cred2:        { ko:'21권의 저서', en:'Author of 21 Books', zh:'21本著作', ja:'21冊の著書', fr:'Auteur de 21 livres', de:'Autor von 21 Büchern', es:'Autor de 21 libros', it:'Autore di 21 libri' },
  cred3:        { ko:'미국 국적 · 글로벌 네트워크', en:'US Citizen · Global Network', zh:'美国国籍·全球网络', ja:'米国籍・グローバルネットワーク', fr:'Citoyen américain · Réseau mondial', de:'US-Staatsbürger · Globales Netzwerk', es:'Ciudadano estadounidense · Red global', it:'Cittadino USA · Rete globale' },
  cred4:        { ko:'2020년부터 EMC 아이디어 구상', en:'EMC concept since 2020', zh:'2020年起构思EMC理念', ja:'2020年からEMCアイデア構想', fr:'Concept EMC depuis 2020', de:'EMC-Konzept seit 2020', es:'Concepto EMC desde 2020', it:'Concetto EMC dal 2020' },
  quote:        { ko:'"전기차 산업의 패권은 이미 정해졌지만,<br>전기차 문화의 주인은 아직 정해지지 않았습니다."',
                  en:'"The dominance of the EV industry has been decided,<br>but the owner of EV culture has not yet been determined."',
                  zh:'"电动汽车产业的主导权已经确定，<br>但电动汽车文化的主人还没有确定。"',
                  ja:'"EV産業の覇権はすでに決まっているが、<br>EV文化の主はまだ決まっていない。"',
                  fr:'"La domination de l\'industrie VE est décidée,<br>mais le propriétaire de la culture VE n\'est pas encore déterminé."',
                  de:'"Die Vorherrschaft der EV-Industrie ist entschieden,<br>aber der Eigentümer der EV-Kultur ist noch nicht bestimmt."',
                  es:'"El dominio de la industria VE ya está decidido,<br>pero el dueño de la cultura VE aún no ha sido determinado."',
                  it:'"Il dominio dell\'industria EV \u00e8 stato deciso,<br>ma il proprietario della cultura EV non \u00e8 ancora stato determinato."' },

  // CONTACT
  contact_label:{ ko:'JOIN US', en:'JOIN US', zh:'加入我们', ja:'参加する', fr:'REJOIGNEZ-NOUS', de:'MITMACHEN', es:'ÚNETE', it:'UNISCITI A NOI' },
  contact_title:{ ko:'함께 만들어 가세요', en:'Build It With Us', zh:'一起共建', ja:'一緒に作りましょう', fr:'Construisons Ensemble', de:'Gemeinsam Aufbauen', es:'Construyámoslo Juntos', it:'Costruiamolo Insieme' },
  contact_desc: { ko:'스폰서십, 파트너십, 참가 신청 등 문의를 환영합니다', en:'We welcome inquiries for sponsorship, partnerships, and registration', zh:'欢迎赞助商、合作伙伴和报名咨询', ja:'スポンサーシップ、パートナーシップ、参加申込などのお問い合わせを歓迎します', fr:'Nous accueillons les demandes de parrainage, partenariat et inscription', de:'Wir begrüßen Anfragen zu Sponsoring, Partnerschaften und Anmeldungen', es:'Damos la bienvenida a consultas de patrocinio, asociaciones e inscripción',
    it:'Siamo lieti di ricevere richieste di sponsorizzazione, partnership e registrazione' },
  ct1_title:    { ko:'스폰서십', en:'Sponsorship', zh:'赞助', ja:'スポンサーシップ', fr:'Parrainage', de:'Sponsoring', es:'Patrocinio', it:'Sponsorizzazione' },
  ct1_body:     { ko:'타이틀 스폰서·공식 파트너 문의', en:'Title sponsor & official partner inquiry', zh:'冠名赞助商和官方合作伙伴咨询', ja:'タイトルスポンサー・公式パートナー問い合わせ', fr:'Sponsor titre et partenaire officiel', de:'Titelsponsor & offizieller Partner', es:'Patrocinador titular y socio oficial' },
  ct2_title:    { ko:'참가 신청', en:'Registration', zh:'报名参加', ja:'参加申込', fr:'Inscription', de:'Anmeldung', es:'Registro', it:'Registrazione' },
  ct2_body:     { ko:'전기차 오너 개인·팀 참가 등록', en:'Individual & team EV owner registration', zh:'电动车车主个人及团队注册', ja:'EVオーナー個人・チーム参加登録', fr:'Inscription individuelle & équipe VE', de:'Einzelperson & Team EV-Anmeldung', es:'Registro individual y de equipo VE' },
  ct3_title:    { ko:'미디어 협력', en:'Media Partnership', zh:'媒体合作', ja:'メディア協力', fr:'Partenariat Médias', de:'Medienpartnerschaft', es:'Asociación de Medios', it:'Partnership Media' },
  ct3_body:     { ko:'취재·중계·콘텐츠 파트너십', en:'Coverage, broadcast & content partnership', zh:'采访、直播和内容合作', ja:'取材・中継・コンテンツパートナーシップ', fr:'Couverture, diffusion & contenu', de:'Berichterstattung, Übertragung & Inhalte', es:'Cobertura, transmisión y contenido' },
  ct4_title:    { ko:'기관 협력', en:'Institutional Partnership', zh:'机构合作', ja:'機関協力', fr:'Partenariat Institutionnel', de:'Institutionelle Partnerschaft', es:'Asociación Institucional', it:'Partnership Istituzionale' },
  ct4_body:     { ko:'지자체·정부기관 MOU 문의', en:'Local government & public agency MOU inquiry', zh:'地方政府及政府机构MOU咨询', ja:'自治体・政府機関MOU問い合わせ', fr:'MOU avec collectivités et agences', de:'Kommunal- & Behörden-MOU-Anfrage', es:'MOU con gobierno local y agencias' },
  form_name:    { ko:'성함', en:'Name', zh:'姓名', ja:'お名前', fr:'Nom', de:'Name', es:'Nombre', it:'Nome' },
  form_email:   { ko:'이메일', en:'Email', zh:'电子邮件', ja:'メール', fr:'E-mail', de:'E-Mail', es:'Correo', it:'Email' },
  form_select:  { ko:'문의 유형 선택', en:'Select inquiry type', zh:'选择咨询类型', ja:'お問い合わせの種類', fr:'Type de demande', de:'Anfragetyp wählen', es:'Tipo de consulta', it:'Tipo di richiesta' },
  form_msg:     { ko:'메시지를 입력해주세요', en:'Enter your message', zh:'请输入您的留言', ja:'メッセージを入力してください', fr:'Votre message', de:'Ihre Nachricht', es:'Su mensaje', it:'Il tuo messaggio' },
  form_submit:  { ko:'문의하기 →', en:'Send Message →', zh:'发送消息 →', ja:'送信する →', fr:'Envoyer →', de:'Senden →', es:'Enviar →', it:'Invia →' },
  form_done:    { ko:'전송 완료! ✓', en:'Sent! ✓', zh:'已发送！✓', ja:'送信完了！✓', fr:'Envoyé ! ✓', de:'Gesendet! ✓', es:'¡Enviado! ✓', it:'Inviato! ✓' },

  // FOOTER
  footer_copy:  { ko:'© 2026 EMC — Electric Mobility Competition. All rights reserved.\nFounder: Kent Kim (김형섭) · www.emc.city',
                  en:'© 2026 EMC — Electric Mobility Competition. All rights reserved.\nFounder: Kent Kim · www.emc.city',
                  zh:'© 2026 EMC — 电动出行竞赛. 版权所有.\n创始人: Kent Kim (김형섭) · www.emc.city',
                  ja:'© 2026 EMC — Electric Mobility Competition. 全著作権所有.\n創設者: Kent Kim (김형섭) · www.emc.city',
                  fr:'© 2026 EMC — Electric Mobility Competition. Tous droits réservés.\nFondateur: Kent Kim (김형섭) · www.emc.city',
                  de:'© 2026 EMC — Electric Mobility Competition. Alle Rechte vorbehalten.\nGründer: Kent Kim (김형섭) · www.emc.city',
                  es:'© 2026 EMC — Electric Mobility Competition. Todos los derechos reservados.\nFundador: Kent Kim (김형섭) · www.emc.city' },
};

// ── Language detection & apply ──
function detectLang() {
  const saved = localStorage.getItem('emc_lang');
  if (saved && T.nav_about[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  const map = { ko:'ko', en:'en', zh:'zh', ja:'ja', fr:'fr', de:'de', es:'es' };
  return map[browser] || 'en';
}

function t(key, lang) {
  return (T[key] && T[key][lang]) || (T[key] && T[key]['en']) || key;
}

function applyLang(lang) {
  localStorage.setItem('emc_lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Roadmap list items
  ['phase1','phase2','phase3','phase4'].forEach(ph => {
    const list = document.getElementById(`${ph}_list`);
    if (!list) return;
    const items = t(`${ph}_items`, lang);
    list.innerHTML = items.map(i => `<li>${i}</li>`).join('');
  });

  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

window.EMC_I18N = { LANGS, applyLang, detectLang, t };
