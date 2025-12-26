// Portfolio Modal Data and Functions
const portfolioData = {
    'battle-of-apes': {
        title: 'Battle of Apes',
        image: 'images/icons/battle-of-apes/boa.png',
        screenshots: [
            'images/screenshots/battle-of-apes/boa_r1.webp',
            'images/screenshots/battle-of-apes/boa_r2.webp',
            'images/screenshots/battle-of-apes/boa_r3.webp'
        ],
        category: 'Action, Strategy',
        organization: 'Flick Game Studios',
        date: 'September, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.battle.of.apes',
        description: 'Battle of Apes is a strategic action game where players command troops of primates in intense battles. Featuring tactical gameplay, unit management, and strategic resource allocation in epic primate warfare.',
        rolesContributions: 'Developed AI systems for enemy troops and strategic decision-making algorithms. Implemented the battle system including unit interactions, damage calculations, and formation mechanics. Created the progression system for unit upgrades and player advancement.\n\nDesigning intelligent AI that provided engaging challenges without being overpowered. Balancing unit stats and abilities to create meaningful strategic choices. Optimizing battle calculations and animations for smooth performance during large-scale conflicts.'
    },
    'botster-brawl': {
        title: 'Botster Brawl',
        image: 'images/icons/botster-brawl/BB.jpg',
        screenshots: [
            'images/screenshots/botster-brawl/BB_Banner.png',
            'images/screenshots/botster-brawl/BB_1.png',
            'images/screenshots/botster-brawl/BB_2.png'
        ],
        category: 'Multiplayer, Shooter',
        organization: 'Independent Project',
        date: 'Re-work in Progress',
        url: '#',
        description: 'Botster Brawl is an ambitious multiplayer top-down shooter currently undergoing a complete rework. The game features intense robot combat with customizable mechs and strategic team-based gameplay in various arena environments.',
        rolesContributions: 'Leading the complete redesign and development of multiplayer networking systems. Implementing new combat mechanics, robot customization systems, and arena design tools. Focusing on creating balanced competitive gameplay and smooth online experiences.\n\nRebuilding the entire networking architecture for improved stability and reduced latency. Balancing robot abilities and weapons for competitive fairness. Creating engaging progression systems that maintain long-term player interest in the reworked version.'
    },
    'cube-survivor': {
        title: 'Cube Survivor',
        image: 'images/icons/cube-survivor/cs.png',
        screenshots: [
            'images/screenshots/cube-survivor/cst_p3.webp',
            'images/screenshots/cube-survivor/cst_p2.webp',
            'images/screenshots/cube-survivor/cst_p1.webp'
        ],
        category: 'Action, Survival',
        organization: 'Flick Game Studios',
        date: 'January, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.cube.survivor',
        description: 'Cube Survivor is a fast-paced action game where players fend off waves of monsters using a magical cube with a range of powerups. With strategic combat and dynamic gameplay, players must survive against relentless hordes while mastering unique abilities to emerge victorious.',
        rolesContributions: 'Collaborated with the designer to implement diverse power-ups and optimized monster models for performance. Recreated the Horde system for enemies and contributed to sound engineering and UI development.\n\nCreating diverse power-ups, refining player movement mechanics, and implementing an auto-throw feature. Designed various enemy horde systems and learned sound design to enhance the game atmosphere.'
    },
    'deliver3d': {
        title: 'Deliver 3D',
        image: 'images/icons/deliver3d/d3d.webp',
        screenshots: [
            'images/screenshots/deliver3d/d3_f.webp',
            'images/screenshots/deliver3d/d3_r1.webp',
            'images/screenshots/deliver3d/d3_r2.webp'
        ],
        category: 'Simulation, Delivery',
        organization: 'Flick Game Studios',
        date: 'March, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.deliver3d',
        description: 'Deliver 3D is an engaging delivery simulation game where players navigate through challenging routes to complete deliveries on time. With realistic physics and intuitive controls, players must manage their delivery truck while avoiding obstacles and optimizing routes for maximum efficiency.',
        rolesContributions: 'Led the development of core gameplay mechanics including vehicle physics, delivery system implementation, and route optimization algorithms. Collaborated with designers to create intuitive UI/UX for delivery management and progress tracking.\n\nBalancing realistic physics simulation with engaging gameplay mechanics. Optimizing performance while maintaining visual quality across various mobile devices. Creating an intuitive delivery management system that remained engaging throughout extended play sessions.'
    },
    'lets-deliver': {
        title: 'Lets Deliver',
        image: 'images/icons/lets-deliver/ld.png',
        screenshots: [
            'images/screenshots/lets-deliver/ld_f.webp',
            'images/screenshots/lets-deliver/ld_r1.webp',
            'images/screenshots/lets-deliver/ld_r2.webp'
        ],
        category: 'Management, Strategy',
        organization: 'Flick Game Studios',
        date: 'May, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.letsdeliver',
        description: 'Lets Deliver is a package delivery management game where players run their own delivery service. Features include route planning, package sorting, and time management challenges that test players\' organizational and strategic thinking skills.',
        rolesContributions: 'Designed and implemented the delivery management system, including package sorting algorithms and route optimization features. Developed the progression system and unlock mechanics to maintain player engagement.\n\nCreating a balanced difficulty curve that challenged players without becoming overwhelming. Implementing efficient algorithms for route calculation and package management while maintaining smooth performance.'
    },
    'mega-suv': {
        title: 'Mega SUV Car Ramp',
        image: 'images/icons/mega-suv/msuv.webp',
        screenshots: [
            'images/screenshots/mega-suv/mr_r3.webp',
            'images/screenshots/mega-suv/mr_r2.webp',
            'images/screenshots/mega-suv/mr_r1.webp'
        ],
        category: 'Racing, Stunt',
        organization: 'Flick Game Studios',
        date: 'October, 2022',
        url: 'https://play.google.com/store/apps/details?id=com.mega.suv.car.ramp',
        description: 'Mega SUV Car Ramp is an adrenaline-fueled experience where players control an SUV through challenging ramps, loops, and obstacles. Perform daring stunts and complete levels in dynamic environments with customizable vehicles.',
        rolesContributions: 'Programmed gameplay mechanics such as vehicle controls, physics simulations, and scoring systems. Collaborated with designers and artists for asset integration and UI development.\n\nCoordinating with designers and artists for level design and asset integration. Balancing aesthetics with performance and managing workflow among team members.'
    },
    'mototrail': {
        title: 'Mototrail',
        image: 'images/icons/mototrail/moto.png',
        screenshots: [
            'images/screenshots/mototrail/moto_1.webp',
            'images/screenshots/mototrail/moto_2.webp',
            'images/screenshots/mototrail/moto_3.webp'
        ],
        category: 'Racing, Physics',
        organization: 'Flick Game Studios',
        date: 'July, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.mototrial',
        description: 'Mototrail delivers heart-pounding motorcycle action with realistic physics and challenging terrain. Players navigate through extreme landscapes, performing stunts and overcoming obstacles in this adrenaline-pumping racing experience.',
        rolesContributions: 'Programmed advanced motorcycle physics, dynamic terrain generation, and scoring systems. Developed stunt and race completion mechanics.\n\nAchieving realistic motorcycle physics while maintaining responsive controls. Optimizing terrain rendering and balancing stunt mechanics for all skill levels.'
    },
    'candy-world-sol': {
        title: 'Candy World Solitaire',
        image: 'images/icons/candy-world-sol/Solitaire_Candyland_1024.png',
        screenshots: [
            'images/screenshots/candy-world-sol/sol-1.webp',
            'images/screenshots/candy-world-sol/Gameplay_Harvest.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Backpack.mp4',
            'images/screenshots/candy-world-sol/Gameplay_SeasonPass.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Powerups.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Album.mp4'
        ],
        category: 'Casual, Tripeaks',
        organization: 'Super Huge Studio',
        date: '2024',
        url: 'https://play.google.com/store/apps/details?id=com.superhugestudios.candyworld.free.harvest&hl=en_IN',
        description: 'Candy World Solitaire is a vibrant card adventure blending classic solitaire with delightful candy-themed puzzles. Journey through hundreds of handcrafted levels, unlock power-ups, and meet charming characters in a relaxing, visually rich world.',
        rolesContributions: 'Developed progression systems (WinStreak, Season Pass, Powerups, Albums) using MVC architecture and reactive UI. Engineered a universal particle attractor system with DOTween, object pooling, and Observer pattern, boosting performance by 70%. Integrated Amplitude SDK for analytics and push notification APIs with adaptive rescheduling.\n\nKey challenges included optimizing performance, creating reusable frameworks, and ensuring robust analytics and push notifications.',
    },
    'cat-wool': {
        title: 'Cat Wool',
        image: 'images/icons/cat-wool/App-Icon_1024.png',
        screenshots: [
            'images/screenshots/cat-wool/cw_1.webp',
            'images/screenshots/cat-wool/cw_2.webp',
            // 'images/screenshots/cat-wool/cw_3.webp'
        ],
        category: 'Puzzle, Hyper-Casual',
        organization: 'Super Huge Studio',
        date: '2025',
        url: 'https://play.google.com/store/apps/details?id=com.superhuge.catwool&hl=en_IN',
        description: 'Cat Wool is a cozy puzzle game where you sort colorful wool onto adorable cats. Enjoy handcrafted levels, soothing visuals, and satisfying gameplay designed for relaxation and fun—perfect for cat lovers and puzzle fans alike.',
        rolesContributions: 'Developed the complete game from prototype to production in 3-4 weeks. Created a level generation toolkit and bot view simulation to double level creation speed. Implemented procedural level generation, data parsing, and seamless animations/VFX.\n\nKey challenges included rapid prototyping, optimizing for fast production, and ensuring engaging gameplay with smooth visuals.',
    }
};

// Portfolio Modal Functions
function initializePortfolioModal() {
    console.log('Initializing portfolio modal...');
    const modal = document.getElementById('portfolio-modal');
    const closeBtn = document.querySelector('.close-modal');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    console.log('Found modal:', modal);
    console.log('Found portfolio items:', portfolioItems.length);
    
    // Add click events to portfolio items
    portfolioItems.forEach((item, index) => {
        console.log(`Adding event to portfolio item ${index}:`, item);
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            // Don't trigger modal if clicking on a link
            if (e.target.closest('a')) {
                return;
            }
            e.preventDefault();
            const projectId = item.getAttribute('data-project');
            if (projectId) {
                showProjectDetails(projectId);
            }
        });
    });

    // Also add delegation for dynamically loaded content
    document.addEventListener('click', (e) => {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem && portfolioItem.hasAttribute('data-project')) {
            // Don't trigger modal if clicking on a link
            if (e.target.closest('a')) {
                return;
            }
            e.preventDefault();
            const projectId = portfolioItem.getAttribute('data-project');
            if (projectId) {
                showProjectDetails(projectId);
            }
        }
    });
    
    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showProjectDetails(projectId) {
        // Remove any old 'Role, Challenges' title if present
        const oldRoleChallengesTitle = Array.from(document.querySelectorAll('h3, h2, h4')).find(el => el.textContent && el.textContent.trim().toLowerCase().replace(/[^a-z]/g, '') === 'rolechallenges');
        if (oldRoleChallengesTitle && oldRoleChallengesTitle.parentElement) {
            oldRoleChallengesTitle.parentElement.removeChild(oldRoleChallengesTitle);
        }
    console.log('Showing project details for:', projectId);
    const project = portfolioData[projectId];
    if (!project) {
        console.log('Project not found:', projectId);
        return;
    }

    console.log('Project data:', project);

    // Update modal content
    const modalTitle = document.getElementById('modal-title');
    const mainScreenshot = document.getElementById('main-screenshot');
    const thumbnailsContainer = document.getElementById('screenshot-thumbnails');
    const modalCategory = document.getElementById('modal-category');
    const modalOrganization = document.getElementById('modal-organization');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');

    // Set title
    if (modalTitle) modalTitle.textContent = project.title;

    // Set main screenshot (support MP4)
    if (mainScreenshot && project.screenshots && project.screenshots.length > 0) {
        const first = project.screenshots[0];
        // Clear previous content
        mainScreenshot.style.display = 'none';
        if (mainScreenshot.nextElementSibling && mainScreenshot.nextElementSibling.classList.contains('main-video')) {
            mainScreenshot.nextElementSibling.remove();
        }
        if (first.toLowerCase().endsWith('.mp4')) {
            // Create video element
            const video = document.createElement('video');
            video.src = first;
            video.controls = true;
            video.className = 'main-video';
            video.style.width = '100%';
            video.style.borderRadius = getComputedStyle(mainScreenshot).borderRadius;
            mainScreenshot.parentNode.insertBefore(video, mainScreenshot.nextSibling);
        } else {
            mainScreenshot.src = first;
            mainScreenshot.alt = project.title;
            mainScreenshot.style.display = '';
        }
    }

    // Create thumbnail gallery (support MP4)
    if (thumbnailsContainer && project.screenshots) {
        thumbnailsContainer.innerHTML = '';
        project.screenshots.forEach((screenshot, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            if (screenshot.toLowerCase().endsWith('.mp4')) {
                thumbnail.innerHTML = `<video src="${screenshot}" muted playsinline style="width:100%;height:100%;object-fit:cover;border-radius:8px;"></video>`;
            } else {
                thumbnail.innerHTML = `<img src="${screenshot}" alt="${project.title} Screenshot ${index + 1}">`;
            }

            thumbnail.addEventListener('click', () => {
                // Remove any existing video in main screenshot
                if (mainScreenshot.nextElementSibling && mainScreenshot.nextElementSibling.classList.contains('main-video')) {
                    mainScreenshot.nextElementSibling.remove();
                }
                if (screenshot.toLowerCase().endsWith('.mp4')) {
                    mainScreenshot.style.display = 'none';
                    const video = document.createElement('video');
                    video.src = screenshot;
                    video.controls = true;
                    video.className = 'main-video';
                    video.style.width = '100%';
                    video.style.borderRadius = getComputedStyle(mainScreenshot).borderRadius;
                    mainScreenshot.parentNode.insertBefore(video, mainScreenshot.nextSibling);
                } else {
                    mainScreenshot.src = screenshot;
                    mainScreenshot.alt = project.title + ' Screenshot ' + (index + 1);
                    mainScreenshot.style.display = '';
                }
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    // Set project info
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalOrganization) modalOrganization.textContent = project.organization;
    if (modalDate) modalDate.textContent = project.date;

    // Set project URL
    const urlElement = document.getElementById('modal-url');
    if (urlElement) {
        if (project.url === '#') {
            urlElement.textContent = 'Coming Soon';
            urlElement.removeAttribute('href');
            urlElement.style.color = '#999';
            urlElement.style.cursor = 'default';
        } else {
            urlElement.textContent = 'Playstore';
            urlElement.href = project.url;
            urlElement.style.color = '';
            urlElement.style.cursor = '';
        }
    }

    // Set description
    if (modalDescription) modalDescription.textContent = project.description;

        // Set Roles and Contributions section in the static modal
        const rolesContribution = document.getElementById('modal-role-contribution');
        const rolesContributionSection = rolesContribution && rolesContribution.closest('.role-section');
        if (rolesContribution) {
            if (project.rolesContributions) {
                rolesContribution.textContent = project.rolesContributions;
                if (rolesContributionSection) rolesContributionSection.style.display = '';
            } else {
                rolesContribution.textContent = '';
                if (rolesContributionSection) rolesContributionSection.style.display = 'none';
            }
        }

    // Show modal
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('Modal should be visible now');
    } else {
        console.log('Modal element not found');
    }
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initializePortfolioModal, 100);
    });
} else {
    setTimeout(initializePortfolioModal, 100);
}