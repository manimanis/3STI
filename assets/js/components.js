const elemsWithTypes = ['input', 'button'];
for (let idx = 0; idx < document.forms.length; idx++) {
  const form = document.forms[idx];
  const formElems = document.forms[idx].elements;
  const items = [];
  for (let idx1 = 0; idx1 < formElems.length; idx1++) {
    const formElem = formElems[idx1];
    let elemType = formElem.tagName.toLowerCase();
    if (elemsWithTypes.includes(elemType)) {
      elemType += ":" + formElem.type;
    }
    formElem.parentNode.classList.add('frm-ctrl');
    formElem.parentNode.dataset['label'] = `(${idx1 + 1})`;
    items.push('<div class="frm-ctrl-name">' +  elemType  + "</div>" +
      '<div class="frm-ctrl-id">#' + formElem.id + "</div>");
  }
  const formDiv = document.createElement('ol');
  formDiv.classList.add("frm-ctrl-details");
  form.parentNode.insertBefore(formDiv, form);
  for (let i = 0; i < items.length; i++) {
    const itemDiv = document.createElement('li');
    formDiv.appendChild(itemDiv);
    itemDiv.innerHTML = items[i];
  }
}