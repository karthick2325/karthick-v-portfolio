document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const visibleProjectCount = document.getElementById("visibleProjectCount");
    const totalProjectCount = projectCards.length;

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
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === "all" || category === filter;

                card.classList.toggle("hidden", !shouldShow);
            });

            updateCount();
        });
    });

    updateCount();

    // Preserve the existing portfolio theme toggle if one exists.
    const themeToggle = document.querySelector(".theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const icon = themeToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }
        });
    }

    // Prevent accidental navigation for placeholder project actions.
    document.querySelectorAll(".project-btn.disabled").forEach(button => {
        button.setAttribute("aria-disabled", "true");
        button.setAttribute("tabindex", "-1");
    });

    // If the local Smart Zoo demo is missing, disable the link instead of
    // leaving a broken local path.
    document.querySelectorAll('[data-local-file="true"]').forEach(link => {
        fetch(link.href, { method: "HEAD" })
            .catch(() => {
                link.removeAttribute("href");
                link.classList.remove("primary");
                link.classList.add("disabled");
                link.textContent = "Demo File Needed";
            });
    });
});
