
        /* SLIDE CONTROL */

        // let current = 0;
        // const slides = document.querySelectorAll('.slide');
        // let lock = false;
        // function show(i) {
        //     slides[current].classList.remove('active');
        //     slides[current].scrollTop = 0;
        //     current = (i + slides.length) % slides.length;
        //     slides[current].classList.add('active');
        // }

        // function goTo(i) {
        //     show(i);
        // }


        /* SMART SCROLL + SLIDE */

        window.addEventListener('wheel', e => {
            const slide = slides[current];
            const atTop = slide.scrollTop === 0;
            const atBottom = Math.ceil(slide.scrollTop + slide.clientHeight) >= slide.scrollHeight;
            if (lock) return;
            if (e.deltaY > 0 && atBottom) {
                lock = true;
                show(current + 1);
                setTimeout(() => lock = false, 900);
            }
            else if (e.deltaY < 0 && atTop) {
                lock = true;
                show(current - 1);
                setTimeout(() => lock = false, 900);
            }
        }

            , {
                passive: true
            }

        );

        /* TYPING EFFECT */

        const nameText = "Vishal Kumar";
        let i = 0;
        const target = document.getElementById("typingName");
        (function type() {
            if (i < nameText.length) {
                target.textContent += nameText.charAt(i++);
                setTimeout(type, 120);
            }
        }

        )();
