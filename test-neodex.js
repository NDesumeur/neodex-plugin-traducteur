// lancé par le test « local » de NeoDex : les deux zones de texte (assez grandes, à la hauteur de la fenêtre), le bouton d'inversion des langues ; aucune traduction en ligne
module.exports = async ({ pj, sleep }) => {
  await sleep(600);
  const r = await pj(`(() => { const i = document.getElementById('trIn'), o = document.getElementById('trOut'), a = i.getBoundingClientRect(), b = o.getBoundingClientRect();
    const f = document.getElementById('trFrom'), t = document.getElementById('trTo'), was = [f.value, t.value]; document.getElementById('trSwap').click();
    return { h: Math.round(a.height), w: Math.round(a.width), same: Math.abs(a.height - b.height) < 2, font: parseFloat(getComputedStyle(i).fontSize), bottom: Math.round(a.bottom), ih: innerHeight, swapped: f.value === was[1] && t.value === was[0], was };
  })()`);
  if (r.h < 230 || r.font < 17 || !r.same) throw new Error('zones trop petites : ' + JSON.stringify(r));
  if (r.bottom > r.ih) throw new Error('la zone de texte sort de la fenêtre : ' + JSON.stringify(r));
  if (!r.swapped && r.was[0] !== 'auto') throw new Error('inverser les langues : ' + JSON.stringify(r));
  const over = await pj(`[...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length`);
  if (over) throw new Error(over + ' élément(s) débordent à droite');
  await pj(`document.getElementById('trSwap').click(), 0`);
  // le texte copié arrive dans la zone (sans traduire en ligne) ; les boutons Coller et Écouter sont là
  const f = await pj(`(() => { const t = [...document.querySelectorAll('.appWrap')].map(w => w.parentElement).find(v => v.__tr).__tr; t.trFill('Bonjour tout le monde', false);
    return { v: document.getElementById('trIn').value, n: document.getElementById('trCount').textContent, b: ['trPaste', 'trSayIn', 'trSayOut'].every(id => document.getElementById(id)) }; })()`);
  if (f.v !== 'Bonjour tout le monde' || !/21/.test(f.n) || !f.b) throw new Error('texte copié : ' + JSON.stringify(f));
  await pj(`(() => { const i = document.getElementById('trIn'); i.value = ''; document.getElementById('trCount').textContent = ''; return 0; })()`);
  return 'texte copié repris, boutons Coller et Écouter · zones de ' + r.w + '×' + r.h + ' px, texte ' + r.font + ' px';
};
