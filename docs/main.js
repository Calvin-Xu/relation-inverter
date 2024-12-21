function getInverse() {
    const relation = document.getElementById('relation').value.trim();
    if (!relation) return;
    
    const result = relationInverter.getInverseRelation(relation);
    document.getElementById('forward').innerHTML = `<li>${relation}: B</li>`;
    document.getElementById('inverse').innerHTML = `<li>${result}: A</li>`;
}

document.getElementById('relation').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getInverse();
    }
}); 