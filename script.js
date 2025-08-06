// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Demo Tabs
function showDemo(type) {
    // Hide all demo content
    document.querySelectorAll('.demo-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected demo content
    document.getElementById(type + '-demo').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Event Functions
function startHunt() {
    // In production, replace with your actual app URL
    const appUrl = 'https://your-treasure-hunt-app.com';
    
    if (confirm('This will open the treasure hunt app. Make sure you have your team code ready!')) {
        window.open(appUrl, '_blank');
    }
}

function openAdmin() {
    // In production, replace with your actual admin URL
    const adminUrl = 'https://your-treasure-hunt-app.com/admin';
    
    if (confirm('This will open the admin dashboard. Admin access only.')) {
        window.open(adminUrl, '_blank');
    }
}

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationDuration = '0.6s';
            entry.target.style.animationFillMode = 'both';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.instruction-card, .detail-card').forEach(el => {
    observer.observe(el);
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Event countdown or timer (optional)
function updateEventStatus() {
    const statusElement = document.querySelector('.status-indicator');
    if (statusElement) {
        const now = new Date();
        const eventTime = now.getHours();
        
        if (eventTime >= 9 && eventTime < 17) {
            statusElement.textContent = '● Event Live';
            statusElement.style.color = '#10b981';
        } else {
            statusElement.textContent = '● Event Scheduled';
            statusElement.style.color = '#f59e0b';
        }
    }
}

// Update status on page load
document.addEventListener('DOMContentLoaded', updateEventStatus);
