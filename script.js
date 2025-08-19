// Global variables
let currentSlide = 0;
let activeFilter = 'All';
let isDarkMode = false;

// Project data
const projects = [
    {
        title: "Sales Performance Dashboard",
        description: "Interactive Power BI dashboard analyzing sales performance across multiple regions with real-time KPI tracking and forecasting models.",
        category: "Power BI",
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Power BI", "DAX", "SQL Server", "Excel"],
        github: "#",
        live: "#"
    },
    {
        title: "Customer Segmentation Analysis",
        description: "Python-based customer segmentation using K-means clustering and RFM analysis to identify high-value customer groups.",
        category: "Python",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
        github: "#",
        live: "#"
    },
    {
        title: "Financial Planning Model",
        description: "Advanced Excel model for financial forecasting with scenario analysis, sensitivity testing, and automated report generation.",
        category: "Excel",
        image: "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Excel", "VBA", "Power Query", "Pivot Tables"],
        github: "#",
        live: "#"
    },
    {
        title: "E-commerce Data Pipeline",
        description: "Automated ETL pipeline processing e-commerce data from multiple sources, with data quality checks and performance optimization.",
        category: "SQL",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["SQL Server", "SSIS", "Python", "Power BI"],
        github: "#",
        live: "#"
    },
    {
        title: "Interactive Sales Analytics",
        description: "Comprehensive Tableau dashboard with advanced visualizations, parameter controls, and drill-down capabilities for sales analysis.",
        category: "Tableau",
        image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Tableau", "SQL", "Excel", "Data Blending"],
        github: "#",
        live: "#"
    },
    {
        title: "Project Portfolio Management",
        description: "Microsoft Project implementation for tracking multiple projects, resource allocation, and timeline optimization across departments.",
        category: "MS Project",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["MS Project", "Excel", "Power BI", "SharePoint"],
        github: "#",
        live: "#"
    },
    {
        title: "Marketing Campaign Automation",
        description: "End-to-end marketing automation system using Power Automate and Python to track campaign performance and generate insights.",
        category: "Automation",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Power Automate", "Python", "Excel", "SharePoint"],
        github: "#",
        live: "#"
    }
];

// Carousel images
const carouselImages = [
    "Call Centre Analysis.PNG",
    "Capture2.PNG",
    "Capture3.PNG",
    "Capture4.PNG",
    "Capture5.PNG",
    "Captur6.PNG"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    initializeHeader();
    initializeCarousel();
    initializeProjects();
    initializeDarkMode();
    initializeMobileMenu();
    initializeDropdown();
    updateDisclaimer();
    initializeSmoothScrolling();
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Header scroll effect
function initializeHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Carousel functionality
function initializeCarousel() {
    const carouselImage = document.getElementById('carouselImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!carouselImage || !prevBtn || !nextBtn) return;
    
    // Update carousel display
    function updateCarousel() {
        carouselImage.src = carouselImages[currentSlide];
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
    
    // Initialize
    updateCarousel();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    const carouselImage = document.getElementById('carouselImage');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carouselImage) {
        carouselImage.src = carouselImages[currentSlide];
    }
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

// Projects functionality
function initializeProjects() {
    renderProjects();
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-category">
                    <i data-lucide="${getCategoryIcon(project.category)}"></i>
                    <span>${project.category}</span>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link secondary">
                        <i data-lucide="github"></i>
                        Code
                    </a>
                    <a href="${project.live}" class="project-link primary">
                        <i data-lucide="external-link"></i>
                        View
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function getCategoryIcon(category) {
    const icons = {
        'Excel': 'file-spreadsheet',
        'SQL': 'database',
        'Power BI': 'bar-chart-3',
        'Tableau': 'bar-chart-3',
        'MS Project': 'bar-chart-3',
        'Python': 'code',
        'Automation': 'zap'
    };
    return icons[category] || 'bar-chart-3';
}

function setActiveFilter(button, category) {
    // Update active filter
    activeFilter = category;
    
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Re-render projects
    renderProjects();
}

function filterProjects(category) {
    // Scroll to projects section
    scrollToSection('#projects');
    
    // Set active filter after a delay to allow scrolling
    setTimeout(() => {
        const filterBtn = document.querySelector(`[data-category="${category}"]`);
        if (filterBtn) {
            setActiveFilter(filterBtn, category);
        }
    }, 500);
    
    // Close mobile menu and dropdown
    closeMobileMenu();
    closeDropdown();
}

// Dark mode functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        enableDarkMode();
    }
    
    // Desktop toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Mobile toggle
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark');
    isDarkMode = true;
    localStorage.setItem('darkMode', 'true');
    updateDarkModeIcons();
}

function disableDarkMode() {
    document.body.classList.remove('dark');
    isDarkMode = false;
    localStorage.setItem('darkMode', 'false');
    updateDarkModeIcons();
}

function updateDarkModeIcons() {
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    const mobileDarkModeIcon = document.querySelector('.mobile-dark-mode-icon');
    const mobileDarkModeText = document.querySelector('.mobile-dark-mode-text');
    
    if (darkModeIcon) {
        darkModeIcon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
    }
    
    if (mobileDarkModeIcon) {
        mobileDarkModeIcon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
    }
    
    if (mobileDarkModeText) {
        mobileDarkModeText.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('active');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    if (mobileMenu) {
        mobileMenu.classList.add('active');
    }
    
    if (mobileMenuIcon) {
        mobileMenuIcon.setAttribute('data-lucide', 'x');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
    
    if (mobileMenuIcon) {
        mobileMenuIcon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Dropdown functionality
function initializeDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    
    if (!dropdown || !dropdownBtn) return;
    
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            closeDropdown();
        }
    });
    
    // Close dropdown when clicking on items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', closeDropdown);
    });
}

function closeDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// Smooth scrolling
function initializeSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"], .mobile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Update disclaimer with current date
function updateDisclaimer() {
    const currentDateElement = document.getElementById('currentDate');
    const currentYearElement = document.getElementById('currentYear');
    
    if (currentDateElement) {
        currentDateElement.textContent = new Date().toLocaleDateString();
    }
    
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Utility functions for external use
window.scrollToSection = scrollToSection;
window.filterProjects = filterProjects;
window.setActiveFilter = setActiveFilter;
window.goToSlide = goToSlide;