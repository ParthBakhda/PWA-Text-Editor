const editor = document.getElementById('editor');


function saveContent() {
  const content = editor.value;
  localStorage.setItem('editorContent', content);
}

// Call the saveContent function when the save button is clicked
const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', saveContent);


function retrieveContent() {
  const content = localStorage.getItem('editorContent');
  editor.value = content;
}

// Call the retrieveContent function when the page loads
window.addEventListener('load', retrieveContent);


function clearContent() {
  editor.value = '';
}

// Call the clearContent function when the clear button is clicked
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearContent);


const boldBtn = document.getElementById('bold-btn');
boldBtn.addEventListener('click', () => {
  document.execCommand('bold');
});

const italicBtn = document.getElementById('italic-btn');
italicBtn.addEventListener('click', () => {
  document.execCommand('italic');
});

const underlineBtn = document.getElementById('underline-btn');
underlineBtn.addEventListener('click', () => {
  document.execCommand('underline');
});

const fontSizeSelect = document.getElementById('font-size-select');
fontSizeSelect.addEventListener('change', () => {
  const selectedFontSize = fontSizeSelect.value;
  editor.style.fontSize = selectedFontSize + 'px';
});


const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  document.execCommand('foreColor', false, selectedColor);
});


function updateOutput() {
    const processedContent = processContent(editor.value); // Process the content as needed
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = processedContent;
  }
  
  // Call the updateOutput function whenever the text input area content changes
  editor.addEventListener('input', updateOutput);
  
