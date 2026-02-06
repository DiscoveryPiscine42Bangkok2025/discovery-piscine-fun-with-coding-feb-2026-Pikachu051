$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 400, 'swing');
        }
    });

    const sections = $('section[id]');

    $(window).on('scroll', function () {
        const scrollPos = $(this).scrollTop() + 100;

        sections.each(function () {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionHeight = section.outerHeight();
            const sectionId = section.attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                $('.nav-link').removeClass('active text-primary');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active text-primary');
            }
        });
    });
});
