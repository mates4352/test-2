const buttonLang = () => {
   const btnLang = document.querySelector('.main__lang')
   const accordion = document.querySelector('.main__accordion')
   const key = document.querySelectorAll('[data-key]')
   const ea = document.querySelectorAll('.ea')
   const ru = document.querySelectorAll('.ru')

   const lang = {

      ea: {
         subtitle: '<span class="main__subtitle--block">Take a step</span> towards recovery',
         labelName: 'Your <span class="main__label--green" >name</span>',
         labelTel: 'Your phone <span class="main__label--green" >number</span>',
         btn: '<span class="main__btn--arrow">To order</span>',
      },

      ru: {
         subtitle: '<span class="main__subtitle--block">Сделай шаг</span> к выздоровлению',
         labelName: 'Ваше <span class="main__label--green" >имя</span>',
         labelTel: 'Ваш <span class="main__label--green" >телефон</span>',
         btn: '<span class="main__btn--arrow">Заказать</span>',
      }

   }

   btnLang.addEventListener('click', () => {

      accordion.classList.toggle('active')

      if (accordion.getAttribute('aria-hidden') === "true") {

         btnLang.setAttribute('aria-label', 'закрыть изменение языка')
         accordion.setAttribute('aria-hidden','false')

      } else {

         btnLang.setAttribute('aria-label','открыть изменение языка')
         accordion.setAttribute('aria-hidden','true')

      }

   })

   accordion.addEventListener('click', () => {

      if (accordion.children[0].classList.contains('ea')) {

         if ((accordion.getAttribute('id') === 'ea')) {

            key.forEach((element) => {

               const value = element.getAttribute('data-key')
               console.log(value);
               element.innerHTML = lang.ea[value]

            });

         }

         for (let i = 0; i < ea.length; i++) {

            accordion.setAttribute('id','ru')
            btnLang.append(ea[i])
            accordion.append(ru[i])

         }

      } else {

         key.forEach((element) => {

            const value = element.getAttribute('data-key')
            console.log(value);
            element.innerHTML = lang.ru[value]

         });

         for (let i = 0; i < ea.length; i++) {

            accordion.setAttribute('id','ea')
            accordion.append(ea[i])
            btnLang.append(ru[i])

         }

      }

      accordion.classList.remove('active')

   })

}

export default buttonLang;
