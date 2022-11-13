const round = document.querySelector('.toggle-round'),
      toggle = document.querySelector('.dark-mode-toggle'),
      socialBg = document.querySelector('.social-media'),
      socialHeader = document.querySelector('.social-media-header'),
      socialSubheader = document.querySelector('.social-media-subheader'),
      darkmodeTitle = document.querySelector('.dark-mode-title'),
      mainBg = document.querySelector('.main'),
      cards = document.querySelectorAll('.main-item'),
      cardName = document.querySelectorAll('.name'),
      cardFollowers = document.querySelectorAll('.main-item-followers'),
      cardDscr = document.querySelectorAll('.main-item-dscr'),
      overviewTitle = document.querySelector('.overview-title'),
      overviewCards = document.querySelectorAll('.overview-item'),
      overviewCardsTitle = document.querySelectorAll('.overview-item-title'),
      overviewAmount = document.querySelectorAll('.overview-item-amount');


function on() {
    toggle.addEventListener('click', (e) => {
        if(!toggle.classList.contains('dark-mode-active')){
            toggle.classList.add('dark-mode-active');
            round.style.backgroundColor = 'var(--white-bg)';
            toggle.style.background = 'var(--toggle-light)';
            socialBg.style.backgroundColor = 'var(--top-bg-pattern)';
            socialHeader.style.color = 'var(--very-dark-text)';
            socialSubheader.style.color = 'var(--dark-text)';
            darkmodeTitle.style.color = 'var(--dark-text)';
            mainBg.style.backgroundColor = 'var(--white-bg)';
            cards.forEach(item => {
                item.style.backgroundColor = 'var(--cards-bg)';
            });
            cardName.forEach(item => {
                item.style.color = 'var(--dark-text)';
            });
            cardFollowers.forEach(item => {
                item.style.color = 'var(--very-dark-text)';
            });
            cardDscr.forEach(item => {
                item.style.color = 'var(--dark-text)';
            });
            overviewTitle.style.color = 'var(--dark-text)';
            overviewCards.forEach(item => {
                item.style.backgroundColor = 'var(--cards-bg)';
            });
            overviewCardsTitle.forEach(item => {
                item.style.color = 'var(--dark-text)';
            });
            overviewAmount.forEach(item => {
                item.style.color = 'var(--very-dark-text)';
            });
        } else {
            toggle.classList.remove('dark-mode-active');
            toggle.style.background = 'linear-gradient(to right, var(--toggle1), var(--toggle2))';
            round.style.backgroundColor = 'var(--dark-blue-bg)';
            socialBg.style.backgroundColor = 'var(--dark-blue-top-bg)';
            socialHeader.style.color = 'var(--white)';
            socialSubheader.style.color = 'var(--text-blue)';
            darkmodeTitle.style.color = 'var(--text-blue)';
            mainBg.style.backgroundColor = 'var(--dark-blue-bg)';
            cards.forEach(item => {
                item.style.backgroundColor = 'var(--card-bg)';
            });
            cardName.forEach(item => {
                item.style.color = 'var(--text-blue)';
            });
            cardFollowers.forEach(item => {
                item.style.color = 'var(--white)';
            });
            cardDscr.forEach(item => {
                item.style.color = 'var(--text-blue)';
            });
            overviewTitle.style.color = 'var(--white)';
            overviewCards.forEach(item => {
                item.style.backgroundColor = 'var(--card-bg)';
            });
            overviewCardsTitle.forEach(item => {
                item.style.color = 'var(--text-blue)';
            });
            overviewAmount.forEach(item => {
                item.style.color = 'var(--white)';
            });
        }
    });
}
on();

function hover() {
    cards.forEach(item => {
        item.addEventListener('mousemove', () => {
            item.classList.add('card-hover-on');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('card-hover-on');  
        });
    });

    overviewCards.forEach(item => {
        item.addEventListener('mousemove', () => {
            item.classList.add('card-hover-on');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('card-hover-on');  
        });
    });      
}
hover();

 





