  const btn = document.querySelector('#magic-btn');

  btn.addEventListener('click', () => {
      const clonedBtn = btn.cloneNode(true);
      clonedBtn.id = 'magic-btn-2';
      clonedBtn.innerText = 'Я изменю тебя';
      clonedBtn.className = 'second-btn';
      document.body.appendChild(clonedBtn);
      clonedBtn.addEventListener('click', () => {
          btn.style.backgroundColor = '#9c4a1a';
          btn.style.color = 'black';
      });
  });
