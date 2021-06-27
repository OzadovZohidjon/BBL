$('.header_slider').slick({
    dots: true,
    arrows: true,
    speed: 300,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>'
});




// HIDE TEXT START

const hideLink = document.querySelectorAll('.content_link');
const hideTexts = document.querySelectorAll('.hide_text');

hideLink.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            hideTexts.forEach(element => {
                element.classList.remove('active');
            });

            el.innerHTML = 'Читать подробнее';
        } else {
            el.classList.add('active');
            hideTexts.forEach(element => {
                element.classList.add('active');
            });

            el.innerHTML = 'Свернуть';

        }
    })
})



// HIDE TEXT END

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// Accardion start


const acc = document.querySelectorAll('.item_head');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('acc_active');
        console.log(this)
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginTop = '0px';

        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.marginTop = '35px';

        }

        var icon = this.children[0].children[0];
        var icon2 = this.children[2].children[0];

        if (this.classList.contains('acc_active')) {
            icon.style.transform = 'rotate(90deg)';
            icon2.style.transform = 'rotate(90deg)';
        }
        else {
            icon.style.transform = 'rotate(360deg)';
            icon2.style.transform = 'rotate(360deg)';
        }
    })
}

// Accordion end

// Img Settings start

const imgContainers = document.querySelectorAll('#img_container');

imgContainers.forEach((el) => {
    $(function () {
        $(el).twentytwenty({
            no_overlay: true,
        });
    });
})



// Img Settings end

// Slider two start

$('.section_three-slider').slick({
    arrows: true,
    speed: 300,
    draggable: false,
    swipe: false,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>',

});

// Slider two end


// Slider three start

$('.section_four-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});


$('.stages_slider').slick({
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.stages_slider-prev'),
    nextArrow: $('.stages_slider-next')


})

if (window.screen.width <= 567) {
    document.querySelector('.section_three-boxes').classList.remove('section_three-slider--two');
} else {
    document.querySelector('.section_three-boxes').classList.add('section_three-slider--two');
}


$('.section_three-slider--two').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: false,
    speed: 300,
    arrows: true,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>',
    responsive: [
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        }
    ]
});

// Slider three end

// Slider four start

$('.block_slider').slick({
    arrows: true,
    speed: 300,
    prevArrow: $('.section_six-arrow-prev'),
    nextArrow: $('.section_six-arrow-next')
});

// $('.plazma_section-six').slick({
//     arrows: true,
//     speed: 300,
//     prevArrow: $('.plazma_section-six-arrow-prev'),
//     nextArrow: $('.plazma_section-six-arrow-next')
// });

// Slider four end

// Slider five start

$('.slider_block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>',
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});

// Slider five end

// Slider six start

$('.section_eight-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-prev icon-arrow-left"></span>',
    nextArrow: '<span class="slick-next icon-arrow-right"></span>',
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});

// Slider six end

// Slider seven start

$('.section_nine-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.section_nine-blocks .arrow_prev'),
    nextArrow: $('.section_nine-blocks .arrow_next')
});

// Slider seven end

$('.img_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.images_slider-prev'),
    nextArrow: $('.images_slider-next')
});

$('.advantages_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.advantages_slider-arrow-prev'),
    nextArrow: $('.advantages_slider-arrow-next'),
    responsive: [
        {
            breakpoint: 760,
            settings: "unslick"
        }
    ]
});

$('.features_sliderr').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.features_sliderr-arrow-prev'),
    nextArrow: $('.features_sliderr-arrow-next')
});


// Modals Start

const bioModalOpenBtn = document.querySelectorAll('.slider_item-btn');
const bioModal = document.querySelector('.modal-three');
const formModal = document.querySelector('.modal');
const bioModalCloseBtn = document.querySelector('.bio-modal-close-btn');
const formModalCloseBtn = document.querySelectorAll('.form-modal-close-btn');
const formModalOpenBtn = document.querySelectorAll('.form-modal-open-btn');
const secondModalOpenBtn = document.querySelectorAll('.second-modal-open-btn');
const secondModalCloseBtn = document.querySelectorAll('.second-modal-close-btn');
const secondModal = document.querySelector('.modal-two');
const doctorInfoOpenBtn = document.querySelectorAll('.doctor-info-open-btn');
const reviewsModalOpenBtn = document.querySelectorAll('.reviews-modal-open-btn');
const reviewsModalCloseBtn = document.querySelector('.reviews-modal-close-btn');
const reviewsModal = document.querySelector('.modal-four');

const modalThree = document.querySelectorAll('.modal-three');

modalThree.forEach((el) => {
    el.querySelector('.form-modal-open-btn').addEventListener('click', () => {
        el.classList.remove('active');

        formModal.classList.add('active');
    })

    el.querySelector('.second-modal-open-btn').addEventListener('click', () => {
        el.classList.remove('active');

        secondModal.classList.add('active');
    })
})

if (window.screen.width > 576) {
    bioModalOpenBtn.forEach(el => {
        el.addEventListener('click', () => {
            bioModal.classList.add('active');
        })
    })
};

if (window.screen.width < 576) {
    doctorInfoOpenBtn.forEach((el) => {
        el.addEventListener('click', () => {

            if (!el.classList.contains('active')) {
                el.classList.add('active');
                el.nextElementSibling.classList.add('active');

                document.querySelector('.section_seven-blocks .slider_block .slick-next').style.top = '-3%';
                document.querySelector('.section_seven-blocks .slider_block .slick-prev').style.top = '-3%';
            } else {
                el.classList.remove('active');
                el.nextElementSibling.classList.remove('active');

                document.querySelector('.section_seven-blocks .slider_block .slick-next').style.top = '-12%';
                document.querySelector('.section_seven-blocks .slider_block .slick-prev').style.top = '-12%';
            }

        })
    })
}




bioModalCloseBtn.addEventListener('click', () => {
    bioModal.classList.remove('active');
})

formModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        bioModal.classList.remove('active');
        formModal.classList.add('active');

    })
})



formModalCloseBtn.forEach(el => {
    el.addEventListener('click', () => {
        formModal.classList.remove('active');
    })
})

secondModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        secondModal.classList.add('active');
        bioModal.classList.remove('active');
    })
})


secondModalCloseBtn.forEach(el => {
    el.addEventListener('click', () => {
        secondModal.classList.remove('active');
    })
})

reviewsModalOpenBtn.forEach(el => {
    el.addEventListener('click', () => {
        reviewsModal.classList.add('active');
    })
})


reviewsModalCloseBtn.addEventListener('click', () => {
    reviewsModal.classList.remove('active');
})


if (window.screen.width < 576) {
    document.querySelectorAll('.section_nine-blocks .block_left-item .item_text p').forEach(el => {
        el.innerHTML = 'Я долго мучилась проблемой сосудистой сетки на щеках и крыльях носа. Оказалось, что избавиться от неё очень просто. Врач Панчук Инна Николаевна, объяснила мне разницу между ними и рассказала оптимальные методы устранения этих недостатков. Мы использовали BBL, и за 2 коротких сеанса удалили все патологически расширенные сосуды. Теперь сосуды на лице не нужно замазывать, идеально!'
    })
}

// Modals End
$('.modal-three .close_btn').click(function () {
    $('.modal-three').removeClass('active');
});
//urchenko 
$('.slider_item-btn.urchenko').click(function () {
    $('.modal-three').removeClass('active');
    $('.modal-three.urchenko').addClass('active');
});
$('.modal-three.urchenko .second-modal-open-btn ').click(function () {
    $('.modal-three.urchenko').removeClass('active');
});
$('.modal-three.urchenko .form-modal-open-btn ').click(function () {
    $('.modal-three.urchenko').removeClass('active');
});

//lihtinova
$('.slider_item-btn.lihtinova').click(function () {
    $('.modal-three').removeClass('active');
    $('.modal-three.lihtinova').addClass('active');
});
$('.modal-three.lihtinova .second-modal-open-btn ').click(function () {
    $('.modal-three.lihtinova').removeClass('active');
});
$('.modal-three.lihtinova .form-modal-open-btn ').click(function () {
    $('.modal-three.lihtinova').removeClass('active');
});
//basovaya
$('.slider_item-btn.basovaya').click(function () {
    $('.modal-three').removeClass('active');
    $('.modal-three.basovaya').addClass('active');
});
$('.modal-three.basovaya .second-modal-open-btn ').click(function () {
    $('.modal-three.basovaya').removeClass('active');
});
$('.modal-three.basovaya .form-modal-open-btn ').click(function () {
    $('.modal-three.basovaya').removeClass('active');
});
//grigoreva
$('.slider_item-btn.grigoryeva').click(function () {
    $('.modal-three').removeClass('active');
    $('.modal-three.grigoryeva').addClass('active');
});
$('.modal-three.basovaya .second-modal-open-btn ').click(function () {
    $('.modal-three.grigoryeva').removeClass('active');
});
$('.modal-three.basovaya .form-modal-open-btn ').click(function () {
    $('.modal-three.grigoryeva').removeClass('active');
});
// buttons
$('.close_btn').click(function () {
    $('.btn_circle').css("left", "");
})

$(document).click(function (e) {
});
$('.btn').click(function () {
    $('.btn_circle').css("left", "");
    $(this).addClass('act');
    $(this).find('.btn_circle').css("left", $(this).width() + 10);
});


$(document).ready(function () {
    $('.item_head .item_head_icon').click(function () {
        $(this).toggleClass('shadow');
    })
})