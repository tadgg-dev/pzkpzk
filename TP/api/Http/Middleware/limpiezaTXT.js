function escapeHTML(texto) {
    var mapa = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };

    return texto.replace(/[&<>"'/`=]/g, function(m) { return mapa[m]; });
}

module.exports={escapeHTML}