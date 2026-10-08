document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PROJECT FILTER
    ========================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const visibleProjectCount =
        document.getElementById("visibleProjectCount");

    function updateCount() {

        const visible = [...projectCards].filter(
            card => !card.classList.contains("hidden")
        ).length;

        if (visibleProjectCount) {
            visibleProjectCount.textContent = visible;
        }
    }

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /* Remove active state */
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Add active state */
            button.classList.add("active");

            const filter = button.dataset.filter;

            /* Show / hide projects */
            projectCards.forEach(card => {

                const category = card.dataset.category;

                const shouldShow =
                    filter === "all" ||
                    category === filter;

                card.classList.toggle(
                    "hidden",
                    !shouldShow
                );
            });

            updateCount();
        });
    });

    /* Initial count */
    updateCount();


    /* =========================================
       THEME TOGGLE
    ========================================= */

    const themeToggle =
        document.querySelector(".theme-toggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const icon =
                themeToggle.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");

            }

        });
    }


    /* =========================================
       PROJECT LINKS
    ========================================= */

    /*
       All project buttons are real <a> links.
       No automatic disabling is performed here.

       This is important because local assets such as:
       assets/images/freshmart.png
       assets/images/trendmart.png
       etc.
       may be opened directly from a local file.
    */

});
