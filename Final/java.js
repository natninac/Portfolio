

/**
 * Project Category Enumeration
 * Defines the available categories for project organization
 * Used to maintain consistency in project classification
 */
const ProjectCategory = {
    DESIGN: 'design',
    CODING: 'coding',
    BRANDING: 'branding'
};

/**
 * Project Data Structure
 * Contains all project information displayed on the portfolio
 * Each project includes metadata, descriptions, and image paths
 */
  const projectsData = [
    {
        id: "usb-stud-finder",
        title: "USB-C Stud Finder",
        category: ProjectCategory.DESIGN,
        shortDescription: "A modern solution for construction professionals",
        fullDescription: `A comprehensive design project for a next-generation stud finder...`,
        technologies: ["Fusion 360", "Figma", "Adobe CC"],
        duration: "3 months",
        year: 2023,
        client: "BuildTech Solutions",
        role: "Lead Designer",
        images: [
            "images/side.png",
            "images/fa2bdc94-7572-42e2-a5f6-d8382a01cdfa_rw_1920.png",
            "images/d9886594-60d7-47f8-b952-b3046dbedfeb_rw_1920.png",
            "images/d2fffd07-d4ef-4f1f-ad72-e32d101d5197_rw_1920.png",
            "images/3407c43c-f8d9-4e8d-8544-c49ecc01c2be_rw_1920.png",
            "images/591f66e2-d7fe-4576-9a97-e9e0f4164d0f_rw_1920.png"

        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.DESIGN,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "L98",
        title: "L98: Game Design Document",
        category: ProjectCategory.DESIGN,
        shortDescription: "Game design document. 2023.",
        fullDescription: `I created a game design document, accompanied by a short story at the end and some imagery. I was inspired by a variety of game design documents from well-known games: (GTA, Diablo, Deus Ex).`,
        technologies: ["Blender", "Illustrator", "Photoshop"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "puffer-jacket",
        title: "Puffer Jacket",
        category: ProjectCategory.DESIGN,
        shortDescription: "Puffer vest designed on Clo3D. 2023.",
        fullDescription: `The idea of the project was originally to create the pattern, print it out, and sew the jacket using an old military sleeping bag.`,
        technologies: ["Clo3D", "Blender", "Illustrator"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    //Coding section
    {
        id: "color-field-generator",
        title: "Color Field Generator",
        category: ProjectCategory.CODING,
        shortDescription: "Generates artwork inspired by color field paintings. 2023.",
        fullDescription: `This project started off as an initiative to explore code for the first time. As someone very inspired by Mark Rothko's art and philosophy, I decided to create code that would generate layouts that roughly looked like colour field paintings.`,
        technologies: ["P5", "JavaScript", "Illustrator"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "portfolio-website",
        title: "Portfolio",
        category: ProjectCategory.CODING,
        shortDescription: "Portfolio website for me. 2024.",
        fullDescription: `A responsive portfolio website I created as an academic project...`,
        technologies: ["Javascript", "HTML", "CSS"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    
    {
        id: "photography",
        title: "Photography",
        category: ProjectCategory.BRANDING,
        shortDescription: "A few photographs I took and edited throughout the years. 2020 Onwards.",
        fullDescription: `These are all taken on a Fujifilm X100T and most are edited using Lightroom and Photoshop.
Photography is meanigful to me for it's ability to capture moments, and I enjoy changing the colours and lighting of pictures. This allows me to change the mood of the picture to reflect how I felt when I took it. In that way, I find it similar to memory, which is just as malleable by our moods.`,
        technologies: ["Adobe Lightroom", "Photoshop", "Illustrator"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "luminous-threadz",
        title: "Social Media Branding",
        category: ProjectCategory.BRANDING,
        shortDescription: "Social media content creation portfolio. 2024.",
        fullDescription: `Social media content creation portfolio.`,
        technologies: ["Photoshop", "Canva", "Illustrator"],
        images: [
            "images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    

];


/**
 * Three.js Scene Configuration
 * Sets up the 3D background animation
 * Initializes scene, camera, and renderer with specific settings for optimal visual quality
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
});

// Configure renderer settings for better visual quality
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.physicallyCorrectLights = true;

// Set up renderer and add to DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Position camera before adding objects
camera.position.z = 55;

/**
 * Lighting Configuration
 * Sets up multiple light sources for realistic 3D rendering
 * Combines ambient, directional, and point lights for depth and shadows
 */
const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 10);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight('rgb(255, 255, 255)', 10);
scene.add(directionalLight);

// Add additional point lights for extra brightness
const pointLight1 = new THREE.PointLight(0xffffff, 20.0);
pointLight1.position.set(-10, 10, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 20.0);
pointLight2.position.set(10, -10, 10);
scene.add(pointLight2)

/**
 * 3D Model Loading and Configuration
 * Handles loading and setup of 3D models used in the background
 * Includes material configuration and positioning
 */
const loader = new THREE.GLTFLoader();

// Load and configure 3D models
let model;
const models = [];
const modelPaths = [
    'slidey.glb',
    'shape2.glb',
];

const modelPositions = [
    { x: -30, y: 15, z: 0 },    // Position for first model
    { x: 30, y: -25, z: -5 },   // Position for second model
];

modelPaths.forEach((path, index) => {
    loader.load(path, 
        // Callback function when model is successfully loaded
        function(gltf) {
            const model = gltf.scene;
            
            // Apply custom materials to all meshes in the model
            model.traverse((child) => {
                if (child.isMesh) {
                    
                    // Create a new physical material with desired properties
                    const material = new THREE.MeshPhysicalMaterial({
                        color: 0xffffff,
                        metalness: 1,
                        roughness: 0.0,
                        clearcoat: 1.0,
                        clearcoatRoughness: 0.0,
                        reflectivity: 1.0,
                        opacity: 0.8,
                        emissive: 'rgb(200, 200, 255)',
                        emissiveIntensity: 0.2,
                    });
                    
                    // Apply the custom material to the mesh
                    child.material = material;
                }
            });

            // Add environment map for reflections
            const cubeTextureLoader = new THREE.CubeTextureLoader();
            const envMap = cubeTextureLoader.load([
                'px.jpg', 'nx.jpg',
                'py.jpg', 'ny.jpg',
                'pz.jpg', 'nz.jpg'
            ]);
            scene.environment = envMap;

            // Position and scale the model
            const position = modelPositions[index];
            model.position.set(position.x, position.y, position.z);
            model.scale.set(2, 2, 2);

            // Add the model to the scene and the tracking array
            scene.add(model);
            models.push(model);
        },
        undefined,
        function(error) {
            console.error('Error loading model:', error);
        }
    );
});

// Animation function that rotates the models
function animate() {
    requestAnimationFrame(animate); // Main animation loop
    
    // Rotate all models in the scene
    models.forEach(model => {
        if(model) model.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
}

/**
 * Animation Loop
 * Handles continuous animation of 3D models
 * Implements requestAnimationFrame for smooth performance
 */

animate();

/**
 * Window Resize Handler
 * Ensures responsive behavior of 3D background
 * Updates camera and renderer parameters on window resize
 */

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

/**
 * Mouse Interaction Handler
 * Implements interactive rotation of 3D models based on mouse position
 * Calculates rotation angles based on cursor coordinates
 */
document.addEventListener('mousemove', (event) => {
    models.forEach(model => {
        if(model) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            
            model.rotation.x += mouseY * 0.01;
            model.rotation.y += mouseX * 0.01;
        }
    });
});

/**
 * State Management
 * Tracks current project and image indices
 * Used for modal navigation and content display
 */
let currentProjectIndex = 0;
let currentImageIndex = 0;

/**
 * DOM Elements Cache
 * Centralizes access to frequently used DOM elements
 * Improves performance by avoiding repeated querySelector calls
 */
const elements = {
    menuButton: document.getElementById('menuButton'),
    navMenu: document.getElementById('navMenu'),
    modal: document.getElementById("projectModal"),
    modalImage: document.getElementById("modalImage"),
    modalTitle: document.getElementById("modalTitle"),
    modalDescription: document.getElementById("modalDescription"),
    prevProjectBtn: document.getElementById("prevProject"),
    nextProjectBtn: document.getElementById("nextProject"),
    prevImageBtn: document.querySelector(".nav-button.prev"),
    nextImageBtn: document.querySelector(".nav-button.next"),
    closeBtn: document.querySelector(".close"),
    imageCounter: document.querySelector(".image-counter"),
    projectCounter: document.querySelector(".project-counter")
};

/**
 * Navigation Menu Toggle
 * Handles the mobile menu open/close functionality
 */
function toggleMenu() {
    elements.navMenu.classList.toggle('active');
}

/**
 * Project Grid Population
 * Dynamically creates and populates the project grid
 * Organizes projects by category and attaches event listeners
 */
function populateProjects() {
    const designContainer = document.querySelector('.design-projects');
    const codingContainer = document.querySelector('.coding-projects');
    const brandingContainer = document.querySelector('.branding-projects');

    // Clear existing content in the project containers
    designContainer.innerHTML = '';
    codingContainer.innerHTML = '';
    brandingContainer.innerHTML = '';

    // Loop through the project data and create project items
    projectsData.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.setAttribute('data-index', index);
        projectItem.setAttribute('category', project.category);
        
        projectItem.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-title">
                ${project.title}
                <p class="project-description">${project.shortDescription}</p>
            </div>
        `;
        
        // Add click handler to open the project modal
        projectItem.addEventListener('click', () => {
            currentProjectIndex = index;
            currentImageIndex = 0;
            elements.modal.style.display = "flex";
            updateModalContent();
        });
        
        // Add the project item to the appropriate category container
        switch(project.category) {
            case ProjectCategory.DESIGN:
                designContainer.appendChild(projectItem);
                break;
            case ProjectCategory.CODING:
                codingContainer.appendChild(projectItem);
                break;
            case ProjectCategory.BRANDING:
                brandingContainer.appendChild(projectItem);
                break;
        }
    });
}

/**
 * Modal Content Update
 * Updates all modal content based on current project and image indices
 * Manages navigation button states and counter displays
 */

function updateModalContent() {
    const project = projectsData[currentProjectIndex];
    if (!project) return;

    elements.modalTitle.textContent = project.title;
    elements.modalDescription.textContent = project.fullDescription;
    
    elements.modalImage.src = project.images[currentImageIndex];
    elements.imageCounter.textContent = `Image ${currentImageIndex + 1} / ${project.images.length}`;
    elements.projectCounter.textContent = `Project ${currentProjectIndex + 1} / ${projectsData.length}`;
    
    // Disable navigation buttons based on the current position
    elements.prevProjectBtn.disabled = currentProjectIndex === 0;
    elements.nextProjectBtn.disabled = currentProjectIndex === projectsData.length - 1;
    
    elements.prevImageBtn.disabled = currentImageIndex === 0;
    elements.nextImageBtn.disabled = currentImageIndex === project.images.length - 1;
}

/**
 * Modal Display
 * Handles showing the modal with specific project content
 */

function showModal(index) {
    currentProjectIndex = index;
    currentImageIndex = 0;
    elements.modal.style.display = "flex";
    updateModalContent();
}

/**
 * Modal Close
 * Handles closing the modal and resetting state
 */
function closeModal() {
    elements.modal.style.display = "none";
}

// Event listener for the menu button
document.getElementById('menuButton').addEventListener('click', toggleMenu);

// Event listeners for project navigation buttons
elements.prevProjectBtn.addEventListener('click', () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        currentImageIndex = 0;
        updateModalContent();
    }
});

elements.nextProjectBtn.addEventListener('click', () => {
    if (currentProjectIndex < projectsData.length - 1) {
        currentProjectIndex++;
        currentImageIndex = 0;
        updateModalContent();
    }
});

// Event listeners for image navigation buttons
elements.prevImageBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalContent();
    }
});

elements.nextImageBtn.addEventListener('click', () => {
    if (currentImageIndex < projectsData[currentProjectIndex].images.length - 1) {
        currentImageIndex++;
        updateModalContent();
    }
});

// Event listener for the modal close button
elements.closeBtn.addEventListener('click', closeModal);

// Event listener to close the modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === elements.modal) {
        elements.modal.style.display = "none";
    }
});

// Event listener to close the navigation menu when clicking outside
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    const menuButton = document.getElementById('menuButton');

    if (!navMenu.contains(event.target) && event.target !== menuButton) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('navMenu').classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event listener to populate the projects when the page loads
document.addEventListener('DOMContentLoaded', populateProjects);

// Scroll animation using GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from('.project-item', {
    opacity: 100,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#work',
        start: 'top 80%',
    },
    clearProps: "all"  // Clear properties once the animation is done
});

/**
 * GSAP Animation Configuration
 * Sets up scroll-triggered animations for various page elements
 */

gsap.from('.experience-content', {
    opacity: 100,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#experience',
        start: 'top 80%',
    }
});

/**
 * Language Toggle Configuration
 * Handles switching between English and French versions of the site
 */

if (window.location.pathname.includes('indexfrench.html')) {
    langToggle.textContent = 'FR';
} else {
    langToggle.textContent = 'EN';
}

// Event listener to toggle between languages
langToggle.addEventListener('click', () => {
    if (window.location.pathname.includes('indexfrench.html')) {
        // Redirect to the English page
        window.location.href = 'index.html';
    } else {
        // Redirect to the French page
        window.location.href = 'indexfrench.html';
    }
});
