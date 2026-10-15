(function () {
    "use strict";

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("sidebarOverlay");
    var toggle = document.getElementById("menuToggle");
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll(".section");

    function showSection(id) {
        sections.forEach(function (sec) {
            if (sec.id === id) {
                sec.classList.add("active-section");
            } else {
                sec.classList.remove("active-section");
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
            }
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openMenu() {
        sidebar.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function () {
        if (sidebar.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", closeMenu);

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            if (!document.getElementById(targetId)) return;
            closeMenu();
            showSection(targetId);
            history.pushState(null, "", "#" + targetId);
        });
    });

    window.addEventListener("popstate", function () {
        var id = window.location.hash.substring(1);
        if (id && document.getElementById(id)) {
            showSection(id);
        } else {
            showSection("about");
        }
    });

    var initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
        showSection(initialHash);
    } else {
        showSection("about");
    }
})();
