window.addEventListener('DOMContentLoaded',  function() {
    const tabsParentEl = document.querySelector('.tab-block');
    const tabsEl = document.querySelectorAll('.tabs');
    const tabsContentEl = document.querySelectorAll('.tabcontents');


    function hideContent() {
        tabsContentEl.forEach((itm) => {
            itm.classList.add('hide');
            itm.classList.remove('show');
        })
        tabsEl.forEach((itm) => itm.classList.remove('tabs-active'))
    }

    function showContent(i) {
        tabsContentEl[i].classList.add('show');
        tabsContentEl[i].classList.remove('hide');
        tabsEl[i].classList.add('tabs-active')
    }

    hideContent()
    showContent(0)

    tabsParentEl.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabs')) {
            tabsEl.forEach((item, indx) => {
                if(target == item) {
                    hideContent()
                    showContent(indx)
                }
            })
        }
    })
})