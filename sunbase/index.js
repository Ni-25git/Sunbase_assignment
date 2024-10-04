document.addEventListener('DOMContentLoaded', () => {
    const centerContent = document.querySelector('.center-content');
    const addButtons = document.querySelectorAll('.btn');
    const saveButton = document.querySelector('.button');
    let formElements = [];
  
  
    const addFormElement = (type) => {
      const elementId = generateUUID();
      const formContainer = document.createElement('div');
      formContainer.className = 'form-container';
      formContainer.setAttribute('data-id', elementId);
  
      const label = document.createElement('label');
      label.innerText = `Sample Label:`;
      
      let formElement;
      let placeholder = '';
  
      
      if (type === 'select') {
        formElement = document.createElement('select');
        const option1 = document.createElement('option');
        option1.value = 'Option 1';
        option1.innerText = 'Sample Option 1';
        const option2 = document.createElement('option');
        option2.value = 'Option 2';
        option2.innerText = 'Sample Option 2';
        const option3 = document.createElement('option');
        option3.value = 'Option 3';
        option3.innerText = 'Sample Option 3';
        
        formElement.appendChild(option1);
        formElement.appendChild(option2);
        formElement.appendChild(option3);
        placeholder = 'Sample select';
      } else if (type === 'textarea') {
        formElement = document.createElement('textarea');
        placeholder = 'Sample textarea';
      } else {
        formElement = document.createElement('input');
        formElement.type = type;
        placeholder = 'Sample placeholder';
      }
      
      formElement.placeholder = placeholder;
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'delete';
      deleteButton.className = 'delete-button';
  
      
      formContainer.appendChild(label);
      formContainer.appendChild(formElement);
      formContainer.appendChild(deleteButton);
      centerContent.appendChild(formContainer);
  
      
      formElements.push({
        id: elementId,
        type: type,
        label: 'Sample Label',
        placeholder: placeholder,
        options: type === 'select' ? ['Sample Option 1', 'Sample Option 2', 'Sample Option 3'] : undefined
      });
  
    
      deleteButton.addEventListener('click', () => {
        formContainer.remove();
        formElements = formElements.filter(element => element.id !== elementId);
      });
    };
  
    
    const generateUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };
  
    
    addButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        let formType = 'text'; 
        
        if (index === 1) formType = 'select'; 
        if (index === 2) formType = 'textarea'; 
        
    
        addFormElement(formType);
      });
    });
  
    saveButton.addEventListener('click', () => {
      console.log(JSON.stringify(formElements, null, 2));
    });
  });
  