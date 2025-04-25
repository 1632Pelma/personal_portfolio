// Projects data
const projects = [
  {
        title: "Movie Database Website",
        description: "A comprehensive movie database with search functionality, ratings, and user reviews.",
        technologies: ["React", "Node.js", "MongoDB", "TMDB API"],
        image: "images/movie.png",
        liveLink: "https://movie-database1-ktsv.onrender.com/",
        codeLink: "https://github.com/404Found-CapaCITI/movie-database1"
    },
    {
        title: "Bank Management System",
        description: "A secure banking application with transaction processing and account management.",
        technologies: ["JavaScript", "Firebase", "CSS3", "Authentication"],
        image:  "images/bank.png",
        liveLink: "https://bank-management-system-z5b3.onrender.com/login.html",
        codeLink: "https://github.com/404Found-CapaCITI/Bank-Management-System"
    },
    {
        title: "Portfolio Website",
        description: "A responsive personal portfolio showcasing my projects and skills.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        image:  "images/portfolio.png",
        liveLink: "#",
        codeLink: "https://github.com/1632Pelma/personal_portfolio"
    },
    {
        title: "To-Do List Application",
        description: "A task management app with CRUD operations and local storage persistence.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
        image:  "images/todolist.png",
        liveLink: "https://1632pelma.github.io/Todo_List/",
        codeLink: "https://github.com/1632Pelma/Todo_List"
    },
    {
        title: "Weather Application",
        description: "Real-time weather forecast app with location detection and 5-day predictions.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
        image:  "images/weather.png",
        liveLink: "https://courageous-sorbet-9e3375.netlify.app/",
        codeLink: "https://github.com/1632Pelma/weather_forecast"
    }



];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const contactForm = document.getElementById('contactForm');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.getElementById('year');

document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setCurrentYear();
    initMobileMenu();
});


function loadProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="btn btn-primary">Live Demo</a>
                    <a href="${project.codeLink}" class="btn btn-secondary">Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}


function initMobileMenu() {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
  
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
   
    console.log('Form submitted:', formData);
    
   
    alert('Thank you for your message! I will get back to you soon.');
    
    
    contactForm.reset();
});


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    
    if (scrollPosition > 50) {
        document.querySelector('nav').classList.add('scrolled');
    } else {
        document.querySelector('nav').classList.remove('scrolled');
    }
});


function initCertificates() {
    const filterButtons = document.querySelectorAll('.cert-filter-btn');
    const certItems = document.querySelectorAll('.cert-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            
            certItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    
    certItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

   
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}


document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setCurrentYear();
    initMobileMenu();
    initCertificates(); 
});
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const description = item.getAttribute('data-description');
            if (description) {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = description;
                item.appendChild(tooltip);
            }
        });

        item.addEventListener('mouseleave', () => {
            const tooltip = item.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});