/* =========================================================
   PROJECTS PAGE JAVASCRIPT
   Karthick V Portfolio
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    const visibleProjectCount =
        document.getElementById("visibleProjectCount");


    /* =====================================================
       UPDATE PROJECT COUNT
    ===================================================== */

    function updateProjectCount() {

        const visibleCards =
            [...projectCards].filter(
                card =>
                    !card.classList.contains("hidden")
            );

        if (visibleProjectCount) {

            visibleProjectCount.textContent =
                visibleCards.length;

        }

    }


    /* =====================================================
       FILTER PROJECTS
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {


            /* Remove active state from all buttons */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Add active state to clicked button */

            button.classList.add("active");


            /* Get selected category */

            const selectedFilter =
                button.dataset.filter;


            /* Show / hide project cards */

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;


                const shouldShow =
                    selectedFilter === "all" ||
                    category === selectedFilter;


                card.classList.toggle(
                    "hidden",
                    !shouldShow
                );

            });


            /* Update visible project count */

            updateProjectCount();

        });

    });


    /* =====================================================
       INITIAL PROJECT COUNT
    ===================================================== */

    updateProjectCount();



    /* =====================================================
       THEME TOGGLE
       ===================================================== */

    const themeToggle =
        document.querySelector(".theme-toggle");


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {


                /* Toggle dark mode class */

                document.body.classList.toggle(
                    "dark-mode"
                );


                /* Get icon */

                const icon =
                    themeToggle.querySelector("i");


                if (icon) {

                    const darkModeEnabled =
                        document.body.classList.contains(
                            "dark-mode"
                        );


                    /* Change moon / sun icon */

                    icon.classList.toggle(
                        "fa-moon",
                        !darkModeEnabled
                    );

                    icon.classList.toggle(
                        "fa-sun",
                        darkModeEnabled
                    );

                }

            }
        );

    }



    /* =====================================================
       PROJECT LINKS
       ===================================================== */

    /*
        Project buttons are normal <a> links.

        No fetch()
        No HEAD request
        No automatic disabling

        This allows local assets such as:

        assets/SMART-ZOO-DEMO-VIDEO.mp4
        assets/images/freshmart.png
        assets/images/trendmart.png
        assets/images/aerohome.png
        assets/images/novitech.png
        assets/images/healthplus-schema.png
        assets/images/sql-project-2.png

        to open normally.
    */


});
