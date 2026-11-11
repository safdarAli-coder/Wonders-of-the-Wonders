/* ======= DATA ======= */
const wdata=[
  {n:'Taj Mahal',co:'India',b:'01/07',l:'📍 Agra, India',
   img:'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=90',
   d:"An ivory-white marble mausoleum on the right bank of the Yamuna — Emperor Shah Jahan's eternal tribute to his beloved wife Mumtaz Mahal.",
   h:"Constructed over 22 years by approximately 20,000 artisans, the Taj Mahal is the finest example of Mughal architecture, blending Persian, Islamic, and Indian styles. Its perfectly symmetrical design and precious-stone inlay work captivate millions each year. The complex covers 42 acres and includes a mosque, a guest house, and elaborate gardens laid out in a grid pattern. The mausoleum's exterior is adorned with calligraphy, geometric patterns, and floral motifs made from precious and semi-precious stones. Designated a UNESCO World Heritage Site in 1983, it is considered one of the greatest architectural achievements in human history.",
   t:['17th Century','Mughal','UNESCO'],f:[['Built','1631–1653'],['Style','Mughal'],['Height','73m'],['UNESCO','1983']]},
  {n:'Machu Picchu',co:'Peru',b:'02/07',l:'📍 Cusco, Peru',
   img:'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1920&q=90',
   d:"A breathtaking 15th-century Inca citadel perched 2,430m above sea level in the Andes — the most recognizable icon of the Inca Empire.",
   h:"Built around 1450 at the height of the Inca Empire, this sacred estate was abandoned during the Spanish conquest and largely unknown until Hiram Bingham's 1911 expedition revealed it to the world. The site consists of over 200 structures including temples, terraces, and residences. The Inca built it without mortar, using a technique called ashlar where stones are cut to fit tightly together. The site's astronomical alignments and agricultural terracing demonstrate remarkable engineering sophistication for its era. Its rediscovery remains one of the 20th century's most celebrated archaeological events.",
   t:['15th Century','Inca','UNESCO'],f:[['Built','c. 1450 AD'],['Elevation','2,430m'],['Structures','200+'],['UNESCO','1983']]},
  {n:'Great Wall of China',co:'China',b:'03/07',l:'📍 Northern China',
   img:'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=1920&q=90',
   d:"A series of fortifications stretching over 21,000 km across historical northern China — the longest wall ever built by humanity.",
   h:"Construction began in the 7th century BC when separate kingdoms built walls to defend their territories. The walls were connected and extended by Emperor Qin Shi Huang around 221 BC. The most iconic sections were built during the Ming Dynasty (1368–1644). The wall served multiple purposes: protection against nomadic invasions, border control, imposition of duties on goods along the Silk Road, and communication. Over a million workers contributed to its construction across many centuries. The wall is not a single continuous structure but a network of walls, with watchtowers positioned every few hundred metres for signalling and defence.",
   t:['7th C BC','Ming Dynasty','UNESCO'],f:[['Length','21,196 km'],['Built','7th C BC'],['Width','4–5m'],['UNESCO','1987']]},
  {n:'The Colosseum',co:'Italy',b:'04/07',l:'📍 Rome, Italy',
   img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=90',
   d:"The largest ancient amphitheatre ever built — an enduring symbol of Roman engineering brilliance capable of holding up to 80,000 spectators.",
   h:"Built between 72–80 AD under Emperors Vespasian and Titus, the Colosseum hosted gladiatorial contests, animal hunts, public executions, and dramas based on Classical mythology. The Romans even flooded it for mock naval battles. The elliptical structure is 188 metres long, 156 metres wide, and 48 metres tall. Its ingenious system of vaults, arches, and corridors allowed 50,000–80,000 spectators to enter and exit quickly through 80 entrances. After the fall of Rome, it was repurposed as housing, workshops, and a Christian shrine before becoming the iconic ruin it is today. It remains one of the greatest works of Roman architecture and engineering.",
   t:['1st Century AD','Roman','UNESCO'],f:[['Built','72–80 AD'],['Capacity','80,000'],['Length','188m'],['UNESCO','1980']]},
  {n:'Petra',co:'Jordan',b:'05/07',l:"📍 Ma'an, Jordan",
   /* FIX 1: New Petra background image for hero slideshow */
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_i4J3oK4dGIhiueA2u0VRtM7lM2rtdmqsFhsCDC6WHfyH5DIvJcWGY6s&s=10',
   d:'The legendary "Rose City" — a magnificent archaeological city carved directly into vibrant rose-red sandstone cliffs by the ancient Nabataean civilization.',
   h:"Founded as early as the 4th century BC, Petra served as the thriving capital of the Nabataean Kingdom — skilled traders who controlled the spice, incense, and silk trade routes. The city's most famous structure, Al-Khazneh (The Treasury), is 40 metres wide and 43 metres tall, carved directly from living rock. Petra was largely unknown to the Western world until Swiss explorer Johann Ludwig Burckhardt rediscovered it in 1812. The city's sophisticated water management system — dams, channels, and cisterns — supported a population of 20,000 in an arid desert environment. Today it is Jordan's most-visited attraction and one of the most photogenic sites on Earth.",
   t:['4th C BC','Nabataean','UNESCO'],f:[['Founded','4th C BC'],['Style','Rock-cut'],['Elevation','1,000m'],['UNESCO','1985']]},
  {n:'Christ the Redeemer',co:'Brazil',b:'06/07',l:'📍 Rio de Janeiro, Brazil',
   img:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=90',
   d:"A magnificent Art Deco statue of Jesus Christ standing 30m tall atop Mount Corcovado, overlooking the vibrant city of Rio de Janeiro.",
   h:"Designed by Polish-French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, the statue was unveiled on October 12, 1931 after nine years of construction at a cost equivalent to millions of modern dollars. Made from reinforced concrete and covered in 6 million soapstone tiles, it stands on an 8-metre pedestal with arms stretching 28 metres wide. Located within Tijuca National Park, the statue is struck by lightning approximately 3–6 times per year. It has become not only a symbol of Christianity but of Brazil's culture and of Rio de Janeiro itself — one of the most recognisable silhouettes in the world.",
   t:['1931','Art Deco','Catholic'],f:[['Completed','1931'],['Height','30m'],['Style','Art Deco'],['Arm Span','28m']]},
  {n:'Chichen Itza',co:'Mexico',b:'07/07',l:'📍 Yucatán, Mexico',
   img:'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1920&q=90',
   d:"A magnificent pre-Columbian Maya city featuring El Castillo pyramid — a marvel of astronomical precision built to align perfectly with solar equinoxes.",
   h:"Founded around 600 AD, Chichen Itza was one of the largest Maya cities and a major political and economic centre. El Castillo (the Temple of Kukulcan) is a step pyramid demonstrating the Maya's sophisticated astronomy and mathematics. It has 91 steps on each of its four sides plus the top platform — totalling 365 to represent the solar year. On the spring and autumn equinoxes, triangular shadows create the illusion of a feathered serpent crawling down the pyramid, merging with a serpent head at the base. The site was occupied by both Maya and Toltec peoples at different periods, and its Ball Court is the largest in the pre-Columbian Americas.",
   t:['600 AD','Maya','UNESCO'],f:[['Founded','c. 600 AD'],['Style','Maya'],['El Castillo','30m'],['UNESCO','1988']]}
];

/* ======= FIX 2: GALLERY DATA — 10 unique images per wonder ======= */
const galData={
  'Taj Mahal':[
    {url:'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=85',cap:'Taj Mahal at Dawn, Agra'},
    {url:'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=85',cap:'Taj Mahal — Reflection in Pool'},
    {url:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85',cap:'Taj Mahal — Lush Gardens'},
    {url:'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=85',cap:'Taj Mahal — Side Perspective'},
    {url:'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85',cap:'Taj Mahal — Sunset Golden Hour'},
    {url:'https://images.unsplash.com/photo-1615798132405-b14c06d9d4a2?w=1200&q=85',cap:'Taj Mahal — Blue Hour'},
    {url:'https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?w=1200&q=85',cap:'Taj Mahal — Aerial View'},
    {url:'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=1200&q=85',cap:'Taj Mahal — Main Gateway'},
    {url:'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=85',cap:'Taj Mahal — Misty Morning'},
    {url:'https://images.unsplash.com/photo-1643639008244-f11f93c31a2e?w=1200&q=85',cap:'Taj Mahal — Minaret Close-up'}
  ],
  'Machu Picchu':[
    {url:'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85',cap:'Machu Picchu — Classic View'},
    {url:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85',cap:'Machu Picchu — Above the Clouds'},
    {url:'https://images.unsplash.com/photo-1567473165923-f2b2e5b0d21f?w=1200&q=85',cap:'Machu Picchu — Sunrise Glow'},
    {url:'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85',cap:'Huayna Picchu Peak'},
    {url:'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85',cap:'Machu Picchu — Stone Terraces'},
    {url:'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=85',cap:'Machu Picchu — Inca Stonework'},
    {url:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85',cap:'Machu Picchu — Valley Mist'},
    {url:'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200&q=85',cap:'Llama at the Ruins'},
    {url:'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=1200&q=85',cap:'Machu Picchu — Wide Panorama'},
    {url:'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=1200&q=85',cap:'Inca Trail Journey'}
  ],
  'Great Wall':[
    {url:'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=1200&q=85',cap:'Great Wall — Classic View'},
    {url:'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=85',cap:'Great Wall — Ancient Watchtower'},
    {url:'https://images.unsplash.com/photo-1563639879688-f58a1b36a3c5?w=1200&q=85',cap:'Great Wall — Autumn Colors'},
    {url:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85',cap:'Great Wall — Jinshanling Section'},
    {url:'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=1200&q=85',cap:'Great Wall — Mountain Mist'},
    {url:'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200&q=85',cap:'Great Wall — Sunset Silhouette'},
    {url:'https://images.unsplash.com/photo-1532185335803-0213e0a67b96?w=1200&q=85',cap:'Great Wall — Aerial Drone View'},
    {url:'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=85',cap:'Great Wall — Winter Snow'},
    {url:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=85',cap:'Great Wall — Steps Detail'},
    {url:'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1200&q=85',cap:'Great Wall — Mutianyu Section'}
  ],
  'Colosseum':[
    {url:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85',cap:'Colosseum — Iconic Facade'},
    {url:'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=85',cap:'Colosseum — Interior Arena'},
    {url:'https://images.unsplash.com/photo-1548285586-fdbc13e2c1e2?w=1200&q=85',cap:'Colosseum — Night Illumination'},
    {url:'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=85',cap:'Roman Forum — Ancient Ruins'},
    {url:'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=85',cap:'Colosseum — Aerial View'},
    {url:'https://images.unsplash.com/photo-1560099494-a9c96c78f3dd?w=1200&q=85',cap:'Colosseum — Arch Detail'},
    {url:'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85',cap:'Colosseum — Dawn Mist'},
    {url:'https://images.unsplash.com/photo-1543429776-2782fc8e3b08?w=1200&q=85',cap:'Colosseum — Corridor Interior'},
    {url:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=85',cap:'Colosseum — Golden Dusk'},
    {url:'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=85',cap:'Colosseum — Ruins Panorama'}
  ],
  /* FIX 2: Petra now has 10 distinct gallery images */
  'Petra':[
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_i4J3oK4dGIhiueA2u0VRtM7lM2rtdmqsFhsCDC6WHfyH5DIvJcWGY6s&s=10',cap:'Petra — Treasury Facade (Al-Khazneh)'},
    {url:'https://images.unsplash.com/photo-1533681475364-326b6803d677?w=1200&q=85',cap:'Petra — The Siq Gorge Entrance'},
    {url:'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&q=85',cap:'Petra — By Candlelight at Night'},
    {url:'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=85',cap:'Petra — Rose Red Sandstone Cliffs'},
    {url:'https://images.unsplash.com/photo-1549486405-25de6c5db7e3?w=1200&q=85',cap:'Petra — The Monastery Ad Deir'},
    {url:'https://images.unsplash.com/photo-1596627116790-af6f46dddbad?w=1200&q=85',cap:'Petra — Carved Desert Columns'},
    {url:'https://images.unsplash.com/photo-1579033385971-a7bc8c8a5b35?w=1200&q=85',cap:'Petra — Sunset Desert View'},
    {url:'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=1200&q=85',cap:'Petra — Jordan Valley Panorama'},
    {url:'https://images.unsplash.com/photo-1532402163669-3cfcf3ce0e38?w=1200&q=85',cap:'Petra — Carved Rock Architecture'},
    {url:'https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?w=1200&q=85',cap:'Petra — High Place of Sacrifice'}
  ],
  'Christ the Redeemer':[
    {url:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85',cap:'Christ the Redeemer — Classic View'},
    {url:'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85',cap:'Christ the Redeemer — Close Up'},
    {url:'https://images.unsplash.com/photo-1548963670-5486ddbb2c93?w=1200&q=85',cap:'Christ the Redeemer — Aerial'},
    {url:'https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?w=1200&q=85',cap:'Christ the Redeemer — Sunset'},
    {url:'https://images.unsplash.com/photo-1553342385-111fd3bc7ef7?w=1200&q=85',cap:'Rio de Janeiro Panorama'},
    {url:'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200&q=85',cap:'Christ the Redeemer — Night Lights'},
    {url:'https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?w=1200&q=85',cap:'Christ the Redeemer — Cloud Mist'},
    {url:'https://images.unsplash.com/photo-1614872286922-89e28898a4ac?w=1200&q=85',cap:'Sugarloaf Mountain — Rio'},
    {url:'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=1200&q=85',cap:'Corcovado Mountain View'},
    {url:'https://images.unsplash.com/photo-1568041487541-6bec9543da07?w=1200&q=85',cap:'Christ the Redeemer — Dawn'}
  ],
  'Chichen Itza':[
    {url:'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85',cap:'Chichen Itza — El Castillo Pyramid'},
    {url:'https://images.unsplash.com/photo-1553346455-11c33a8f6a34?w=1200&q=85',cap:'Chichen Itza — Temple of Warriors'},
    {url:'https://images.unsplash.com/photo-1595983168615-47b92e69a6d7?w=1200&q=85',cap:'Chichen Itza — The Ball Court'},
    {url:'https://images.unsplash.com/photo-1501952476817-b7f2f22b0bc4?w=1200&q=85',cap:'Chichen Itza — Stone Columns'},
    {url:'https://images.unsplash.com/photo-1508761369431-f58a1b36a3c5?w=1200&q=85',cap:'Chichen Itza — Pyramid Stairs'},
    {url:'https://images.unsplash.com/photo-1555991891-38e47a91bb52?w=1200&q=85',cap:'Chichen Itza — Serpent Head'},
    {url:'https://images.unsplash.com/photo-1547040935-bc0026fd9c27?w=1200&q=85',cap:'Chichen Itza — Equinox Shadow'},
    {url:'https://images.unsplash.com/photo-1591785996735-2c5e20fd4e25?w=1200&q=85',cap:'Chichen Itza — Aerial View'},
    {url:'https://images.unsplash.com/photo-1534350617540-e6bd7a2f3b6f?w=1200&q=85',cap:'Chichen Itza — Sunset Silhouette'},
    {url:'https://images.unsplash.com/photo-1504598318550-17ded0173ef3?w=1200&q=85',cap:'Chichen Itza — Observatory El Caracol'}
  ]
};

/* ======= HERO SLIDESHOW ======= */
let curSlide=0,slideTimer;
function buildSlideshow(){
  const cont=document.getElementById('heroSlides');
  const dotsEl=document.getElementById('slideDots');
  const counterEl=document.getElementById('slideCounter');
  wdata.forEach((w,i)=>{
    const s=document.createElement('div');
    s.className='slide'+(i===0?' active':'');
    s.style.backgroundImage=`url('${w.img}')`;
    cont.appendChild(s);
    const d=document.createElement('button');
    d.className='sdot'+(i===0?' active':'');
    d.onclick=()=>goSlide(i);
    dotsEl.appendChild(d);
    const t=document.createElement('div');
    t.className='scthumb'+(i===0?' active':'');
    t.style.backgroundImage=`url('${w.img}')`;
    t.onclick=()=>goSlide(i);
    counterEl.appendChild(t);
  });
  updateLabel();
  startTimer();
}
function goSlide(n){
  const sl=document.querySelectorAll('.slide'),
        dt=document.querySelectorAll('.sdot'),
        th=document.querySelectorAll('.scthumb');
  sl[curSlide].classList.remove('active');
  dt[curSlide].classList.remove('active');
  th[curSlide].classList.remove('active');
  curSlide=n;
  sl[curSlide].classList.add('active');
  dt[curSlide].classList.add('active');
  th[curSlide].classList.add('active');
  updateLabel();
  restartTimer();
}
function updateLabel(){document.getElementById('slideLabel').textContent=wdata[curSlide].n+' — '+wdata[curSlide].co;}
function nextSlide(){goSlide((curSlide+1)%wdata.length);}
function startTimer(){slideTimer=setInterval(nextSlide,2000);}
function restartTimer(){clearInterval(slideTimer);startTimer();}
buildSlideshow();

/* ======= WONDER CARDS ======= */
const wg=document.getElementById('wgrid');
wdata.forEach((w,i)=>{
  const dly=['d1','d2','d3','d1','d2','d3','d1'][i];
  wg.innerHTML+=`<div class="wcard reveal ${dly}" onclick="openMod(${i})">
    <div class="wimg"><img src="${w.img.replace('w=1920','w=700')}" alt="${w.n}" loading="lazy"><div class="wimg-ov"></div><div class="wbadge">${w.b}</div><div class="wcountry">📍 ${w.co}</div></div>
    <div class="wbody"><div class="wname">${w.n}</div><div class="wloc">${w.l}</div><p class="wdesc">${w.d}</p>
    <div class="wfoot"><div class="wtags">${w.t.map(t=>`<span class="wtag">${t}</span>`).join('')}</div><div class="warrow">→</div></div></div>
  </div>`;
});

/* ======= GALLERY ======= */
const cats=Object.keys(galData);
let activeCat=cats[0],lbImages=[],lbIdx=0;
function buildGalCats(){
  const el=document.getElementById('galCats');
  cats.forEach((c,i)=>{
    const btn=document.createElement('button');
    btn.className='gcat-btn'+(i===0?' active':'');
    btn.textContent=c;
    btn.onclick=()=>{activeCat=c;document.querySelectorAll('.gcat-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderGallery();};
    el.appendChild(btn);
  });
}
function renderGallery(){
  const imgs=galData[activeCat];
  lbImages=imgs;
  const grid=document.getElementById('galGrid');
  const show=imgs.slice(0,5);
  grid.innerHTML=show.map((img,i)=>`<div class="gitem" onclick="openLightbox(${i})"><img src="${img.url.replace('w=1200','w=700')}" alt="${img.cap}" loading="lazy"><div class="gov"></div><div class="glbl">${img.cap}</div><div class="gzoom">🔍</div></div>`).join('');
  const items=grid.querySelectorAll('.gitem');
  if(items[0])items[0].style.gridRow='span 2';
  if(items[3])items[3].style.gridColumn='span 2';
  document.getElementById('galMoreBtn').textContent=`View All 10 ${activeCat} Photos →`;
}
/* FIX 2: openAllPhotos now opens lightbox at index 0 to browse all 10 */
function openAllPhotos(){openLightbox(0);}
buildGalCats();
renderGallery();

/* Lightbox */
function openLightbox(idx){
  lbIdx=idx;
  const img=document.getElementById('lbImg');
  img.src=lbImages[lbIdx].url;
  img.style.opacity=1;
  document.getElementById('lbCap').textContent=lbImages[lbIdx].cap;
  document.getElementById('lbIdx').textContent=(lbIdx+1)+' / '+lbImages.length+' photos';
  document.getElementById('glightbox').classList.add('open');
}
function closeLightbox(){document.getElementById('glightbox').classList.remove('open');}
function lbNav(dir){
  lbIdx=(lbIdx+dir+lbImages.length)%lbImages.length;
  const img=document.getElementById('lbImg');
  img.style.opacity=0;
  setTimeout(()=>{
    img.src=lbImages[lbIdx].url;
    document.getElementById('lbCap').textContent=lbImages[lbIdx].cap;
    document.getElementById('lbIdx').textContent=(lbIdx+1)+' / '+lbImages.length+' photos';
    img.style.opacity=1;
  },200);
}
document.getElementById('glightbox').addEventListener('click',function(e){if(e.target===this)closeLightbox();});
document.addEventListener('keydown',e=>{
  if(document.getElementById('glightbox').classList.contains('open')){
    if(e.key==='ArrowRight')lbNav(1);
    if(e.key==='ArrowLeft')lbNav(-1);
    if(e.key==='Escape')closeLightbox();
  }
});

/* ======= FIX 3: HISTORY — fully vertical, image LEFT, text RIGHT, alternating ======= */
const histEl=document.getElementById('historyList');
wdata.forEach((w,i)=>{
  const isRev=i%2===1;
  const numLabel=['I','II','III','IV','V','VI','VII'][i];
  histEl.innerHTML+=`
  <div class="wh-item reveal${isRev?' rev':''}">
    <div class="wh-img-wrap">
      <img src="${w.img.replace('w=1920','w=900')}" alt="${w.n}" loading="lazy">
      <div class="wh-num">${w.b}</div>
      <div class="wh-country">📍 ${w.co}</div>
    </div>
    <div class="wh-text">
      <div class="wh-wonder-num">${numLabel}</div>
      <div class="wh-name">${w.n}</div>
      <div class="wh-loc">${w.l}</div>
      <div class="wh-divider"></div>
      <p class="wh-desc">${w.d}</p>
      <p class="wh-hist">${w.h}</p>
      <div class="wh-facts">
        ${w.f.map(f=>`<div class="wh-fact"><small>${f[0]}</small><span>${f[1]}</span></div>`).join('')}
      </div>
    </div>
  </div>`;
});

/* ======= MODAL ======= */
function openMod(i){
  const w=wdata[i];
  document.getElementById('mimg').src=w.img.replace('w=1920','w=800');
  document.getElementById('mbadge').textContent=w.b+' — Wonder';
  document.getElementById('mname').textContent=w.n;
  document.getElementById('mloc').textContent=w.l;
  document.getElementById('mdesc').textContent=w.d;
  document.getElementById('mhist').textContent=w.h;
  document.getElementById('mfacts').innerHTML=w.f.map(f=>`<div class="mfact"><small>${f[0]}</small><span>${f[1]}</span></div>`).join('');
  document.getElementById('modalBg').classList.add('open');
}
function closeMod(e){if(e.target.id==='modalBg')document.getElementById('modalBg').classList.remove('open');}

/* ======= FIX 5: DOWNLOAD — fully working PDF, DOC, and Map generation ======= */
function triggerDownload(type,title,icon){
  const overlay=document.getElementById('pdfOverlay');
  document.getElementById('pdfIcon').textContent=icon;
  document.getElementById('pdfTitle').textContent='Preparing: '+title;
  document.getElementById('pdfDesc').textContent='Compiling data from all seven wonders. This will only take a moment...';
  document.getElementById('pdfStatus').textContent='Initialising...';
  document.getElementById('pdfCloseBtn').style.display='none';
  const bar=document.getElementById('pdfBar');
  bar.style.transition='none';bar.style.width='0';
  overlay.classList.add('open');
  setTimeout(()=>{bar.style.transition='width 2.6s ease-out';bar.style.width='100%';},80);
  const steps=['Gathering wonder data...','Compiling history texts...','Formatting pages...','Generating '+(type==='map'?'map':'document')+'...','Finalising...'];
  let step=0;
  const intv=setInterval(()=>{if(step<steps.length)document.getElementById('pdfStatus').textContent=steps[step++];},520);
  setTimeout(()=>{
    clearInterval(intv);
    if(type==='pdf')genPDF(title);
    else if(type==='doc')genDOC(title);
    else genMap();
    document.getElementById('pdfStatus').textContent='✓ Complete! Your download has started.';
    document.getElementById('pdfCloseBtn').style.display='inline-block';
  },2900);
}

function genPDF(title){
  const content=wdata.map(d=>`<div class="wonder-section"><h2>${d.n}</h2><div class="wonder-meta"><span class="meta-item">📍 ${d.l}</span><span class="meta-item">🏛️ ${d.f[0][0]}: ${d.f[0][1]}</span></div><p class="overview">${d.d}</p><p class="history">${d.h}</p><div class="facts-grid">${d.f.map(f=>`<div class="fact-box"><span class="fact-label">${f[0]}</span><span class="fact-value">${f[1]}</span></div>`).join('')}</div></div>`).join('');
  const w=window.open('','_blank');
  if(!w){toast('⚠️ Please allow popups to download.');return;}
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:Georgia,serif;max-width:860px;margin:0 auto;padding:2rem;color:#1a1a1a;background:#fff;}
    .cover{text-align:center;padding:3rem 0 2.5rem;border-bottom:4px solid #F59E0B;margin-bottom:2.5rem;background:linear-gradient(135deg,#0F0E17,#252347);color:#fff;border-radius:12px;margin-bottom:2.5rem;padding:3rem;}
    .cover h1{font-size:2.5rem;color:#FCD34D;margin-bottom:0.5rem;}
    .cover p{color:rgba(255,255,255,0.7);font-size:0.95rem;margin:0.3rem 0;}
    .wonder-section{margin-bottom:2.5rem;padding:1.8rem;border:1px solid #e5e7eb;border-radius:12px;border-left:5px solid #F59E0B;page-break-inside:avoid;}
    h2{font-size:1.6rem;color:#1e1b4b;margin-bottom:0.6rem;}
    .wonder-meta{display:flex;gap:1.5rem;margin-bottom:0.8rem;font-size:0.85rem;color:#6b7280;}
    .overview{font-size:1rem;line-height:1.8;color:#374151;margin-bottom:0.7rem;font-style:italic;border-left:3px solid #F59E0B;padding-left:1rem;}
    .history{font-size:0.92rem;line-height:1.85;color:#4b5563;margin-bottom:1rem;}
    .facts-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0.6rem;}
    .fact-box{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:0.6rem;text-align:center;}
    .fact-label{display:block;font-size:0.6rem;color:#9ca3af;text-transform:uppercase;letter-spacing:0.15em;font-weight:700;margin-bottom:0.2rem;}
    .fact-value{font-size:0.85rem;font-weight:700;color:#1e1b4b;}
    .footer{text-align:center;margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#9ca3af;}
    @media print{.wonder-section{break-inside:avoid;}}
  </style></head><body>
  <div class="cover"><h1>🌏 ${title}</h1><p>Wonders of the World — WOW</p><p>A comprehensive guide to the Seven New Wonders of the World</p><p style="margin-top:1rem;font-size:0.8rem;">© 2026 WOW — wondersofworld.org</p></div>
  ${content}
  <div class="footer">© 2026 Wonders of the World (WOW) · wondersofworld.org · All rights reserved</div>
  </body></html>`);
  w.document.close();
  setTimeout(()=>{w.focus();w.print();},800);
}

function genDOC(title){
  const content=wdata.map(d=>`
    <h2 style="color:#1e1b4b;border-left:5px solid #F59E0B;padding-left:12px;margin-top:24px;">${d.n}</h2>
    <p><b>Location:</b> ${d.l}</p>
    <p><i>${d.d}</i></p>
    <p>${d.h}</p>
    <p><b>Key Facts:</b> ${d.f.map(f=>f[0]+': '+f[1]).join(' | ')}</p>
    <hr style="border:1px solid #e5e7eb;margin:16px 0;">`).join('');
  const html=`\ufeff<html xmlns:w="urn:schemas-microsoft-com:office:word">
  <head><meta charset="utf-8"><title>${title}</title>
  <style>body{font-family:Georgia,serif;max-width:800px;margin:0 auto;padding:2rem;color:#1a1a1a;}
  h1{color:#92400e;font-size:2rem;border-bottom:3px solid #F59E0B;padding-bottom:8px;}
  h2{color:#1e1b4b;}p{line-height:1.8;}
  </style></head>
  <body><h1>🌏 ${title}</h1><p><b>Wonders of the World — WOW</b><br>Complete documentation of the Seven New Wonders<br>© 2026 WOW — wondersofworld.org</p><hr>${content}</body></html>`;
  const blob=new Blob([html],{type:'application/msword;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=title.replace(/\s+/g,'_')+'.doc';
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},1000);
}

function genMap(){
  const rows=wdata.map((d,i)=>`
    <tr style="background:${i%2===0?'#f9fafb':'#fff'}">
      <td style="padding:0.9rem 1rem;font-weight:700;color:#1e1b4b;">${d.n}</td>
      <td style="padding:0.9rem 1rem;color:#6b7280;">${d.l}</td>
      <td style="padding:0.9rem 1rem;color:#374151;">${d.f[0][1]}</td>
      <td style="padding:0.9rem 1rem;color:#374151;">${d.f[d.f.length-1][1]}</td>
    </tr>`).join('');
  const w=window.open('','_blank');
  if(!w){toast('⚠️ Please allow popups to download.');return;}
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>World Travel Map — Seven Wonders</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:Georgia,serif;max-width:960px;margin:0 auto;padding:2rem;color:#1a1a1a;}
    .header{background:linear-gradient(135deg,#0F0E17,#252347);color:#fff;padding:2.5rem;border-radius:12px;margin-bottom:2rem;text-align:center;}
    .header h1{font-size:2rem;color:#FCD34D;margin-bottom:0.5rem;}
    .header p{color:rgba(255,255,255,0.7);}
    .globe{font-size:5rem;display:block;margin:1rem 0;}
    table{width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);margin-bottom:2rem;}
    thead{background:linear-gradient(135deg,#1e1b4b,#4f46e5);}
    th{padding:1rem;color:#fff;text-align:left;font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase;}
    td{border-bottom:1px solid #e5e7eb;}
    .tips{background:#fffbeb;border:1px solid #F59E0B;border-radius:12px;padding:1.5rem;}
    .tips h2{color:#92400e;margin-bottom:1rem;}
    .tips li{line-height:2;color:#374151;}
    .footer{text-align:center;margin-top:2rem;font-size:0.75rem;color:#9ca3af;}
    @media print{table{break-inside:avoid;}}
  </style></head><body>
  <div class="header"><span class="globe">🗺️</span><h1>World Travel Map — Seven Wonders of the World</h1><p>Your complete guide to visiting the world's most magnificent monuments</p><p style="margin-top:0.5rem;font-size:0.8rem;">© 2026 WOW — wondersofworld.org</p></div>
  <table><thead><tr><th>Wonder</th><th>Location</th><th>Built / Founded</th><th>UNESCO / Year</th></tr></thead><tbody>${rows}</tbody></table>
  <div class="tips"><h2>🧳 Essential Travel Tips</h2><ul>
    <li>✈️ Book international flights 3–6 months ahead for best prices</li>
    <li>🌤️ Visit during shoulder season (spring/autumn) for fewer crowds</li>
    <li>📋 Always check visa requirements for each destination in advance</li>
    <li>🎫 Pre-book tickets online — all seven wonders have timed entry systems</li>
    <li>🌅 Arrive at sunrise for the best photos and smallest crowds</li>
    <li>🗣️ Local licensed guides add enormous depth to each site visit</li>
    <li>💊 Check health advisories and vaccination requirements before travelling</li>
    <li>💱 Exchange currency at banks — avoid airport exchange booths</li>
  </ul></div>
  <div class="footer">© 2026 Wonders of the World (WOW) · wondersofworld.org · All rights reserved</div>
  </body></html>`);
  w.document.close();
  setTimeout(()=>{w.focus();w.print();},800);
}

function closePdfOverlay(){document.getElementById('pdfOverlay').classList.remove('open');}

/* ======= TOAST ======= */
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200);}
function g(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

/* ======= FEEDBACK ======= */
let rating=0;
function rate(n){rating=n;document.querySelectorAll('.star').forEach((s,i)=>s.classList.toggle('on',i<n));}
function subFeed(){
  const nm=document.getElementById('fn').value,wn=document.getElementById('fw').value;
  if(!nm){toast('⚠️ Please enter your name.');return;}
  if(!wn){toast('⚠️ Please select a wonder.');return;}
  toast('✅ Thank you, '+nm+'! Feedback received. '+(rating?'⭐'.repeat(rating):''));
  ['fn','fe','fm'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fw').value='';rate(0);
}
function subContact(){
  const nm=document.getElementById('cn').value,em=document.getElementById('ce').value;
  if(!nm||!em){toast('⚠️ Please fill in name and email.');return;}
  toast("✅ Message sent! We'll reply to "+em+" soon.");
  ['cn','ce','cs','cm'].forEach(id=>document.getElementById(id).value='');
}

/* ======= SCROLL & REVEAL ======= */
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',scrollY>80);
  countUp();
});
const ro=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

let counted=false;
function countUp(){
  if(counted)return;
  const els=document.querySelectorAll('[data-target]');
  if(!els.length)return;
  if(els[0].getBoundingClientRect().top<window.innerHeight){
    counted=true;
    els.forEach(el=>{
      const target=+el.dataset.target,inc=Math.ceil(target/55);let cur=0;
      const t=setInterval(()=>{cur+=inc;if(cur>=target){cur=target;clearInterval(t);}el.textContent=cur+(target>=100?'M+':'+');},28);
    });
  }
}

/* ======= CURSOR ======= */
const cur=document.getElementById('cursor'),cdot=document.getElementById('cdot');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cdot.style.cssText=`left:${mx-2.5}px;top:${my-2.5}px;`;});
(function a(){cx+=(mx-cx)*0.13;cy+=(my-cy)*0.13;cur.style.cssText=`left:${cx-11}px;top:${cy-11}px;`;requestAnimationFrame(a);})();
document.querySelectorAll('a,button,.wcard,.gitem,.dlcard,.tcard').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.style.transform='scale(2.3)');
  el.addEventListener('mouseleave',()=>cur.style.transform='scale(1)');
});

setTimeout(()=>document.getElementById('loader').classList.add('hide'),2400);
