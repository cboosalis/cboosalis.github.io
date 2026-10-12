/* Continuous reading: retain section content and anchors without disclosure controls. */
(() => {
  const D=window.CALTPA;
  D.readingHTML=html=>html
    .replace(/<details\b([^>]*)>/gi,(_,attributes)=>'<section'+attributes.replace(/\s+open(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi,'')+' data-reading-section>')
    .replace(/<\/details\s*>/gi,'</section>')
    .replace(/<summary\b[^>]*>/gi,'<h3 class="reading-heading">')
    .replace(/<\/summary\s*>/gi,'</h3>');
  D.contentRevision+='-continuous-reading';
})();
