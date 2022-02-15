const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(function () {
    $("#accordion").accordion({
        heightStyle: 'content',
        icons: {
            header: 'plus',
            activeHeader: 'plus plus_active'
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work-list-btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')

                document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
            })
        })
    })
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#header_burger').addEventListener('click', function () {
        document.querySelector('#header_nav_list').classList.toggle('is-active')
        document.querySelector('.burger').classList.toggle('burger_active')
    })
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#search_btn').addEventListener('click', function () {
        document.querySelector('#input_header').classList.add('input_is-active')
        document.querySelector('#close_btn').classList.add('close_btn-is_active')
        document.querySelector('#search_btn').classList.add('search-btn_hidden')
        document.querySelector('#search_btn_submit').classList.add('search-btn-submit_is-active')
    })
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#close_btn').addEventListener('click', function () {
        document.querySelector('#input_header').classList.remove('input_is-active')
        document.querySelector('#close_btn').classList.remove('close_btn-is_active')
        document.querySelector('#search_btn').classList.remove('search-btn_hidden')
        document.querySelector('#search_btn_submit').classList.remove('search-btn-submit_is-active')
    })
})