
// Project Categories Enum
const ProjectCategory = {
    DESIGN: 'design',
    CODING: 'coding',
    BRANDING: 'branding'
};


  // Project Data Structure
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
            "images/side.PNG",
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
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.DESIGN,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
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
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    //Coding section
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.CODING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.CODING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.CODING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.BRANDING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.BRANDING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },
    {
        id: "shower-seat",
        title: "TORI Shower Seat",
        category: ProjectCategory.BRANDING,
        shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
        fullDescription: `A responsive portfolio website...`,
        technologies: ["Solidworks", "Keyshot", "Illustrator"],
        images: [
            "/images/seat/seat3.png",
            "/images/portfolio/image2.jpg",
            "/images/portfolio/image3.jpg"
        ]
    },


];



//Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.physicallyCorrectLights = true;

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

//Position camera before adding objects
camera.position.z = 55;

//Add lights
const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 10);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight('rgb(255, 255, 255)', 10);
scene.add(directionalLight);

// Add point lights for extra brightness
const pointLight1 = new THREE.PointLight(0xffffff, 20.0);
pointLight1.position.set(-10, 10, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 20.0);
pointLight2.position.set(10, -10, 10);
scene.add(pointLight2)

// Initialize loader
const loader = new THREE.GLTFLoader();



// Load models
let model; // Define model variable
const models = [];
const modelPaths = [
    'slidey.glb',
    'shape2.glb',
];

// Define specific positions for each model
const modelPositions = [
    { x: -30, y: 15, z: 0 },    // Position for first model
    { x: 30, y: -25, z: -5 },   // Position for second model
];

modelPaths.forEach((path, index) => {
    loader.load(path, 

            function(gltf) {
                const model = gltf.scene;
                
                // Apply materials to all meshes in the model
                model.traverse((child) => {
                    if (child.isMesh) {
                        // Create new material
                        const material = new THREE.MeshPhysicalMaterial({
                            color: 0xffffff,
                            metalness: 1,
                            roughness: 0.0,
                            clearcoat: 1.0,
                            clearcoatRoughness: 0.0,
                            reflectivity: 1.0,
                            opacity: 0.8,
                            emissive: 'rgb(200, 200, 255)',       // Light emission color
                            emissiveIntensity: 0.2,   // Emission strength
                        });
                        
                        // Apply material
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
                
                const position = modelPositions[index];
            model.position.set(position.x, position.y, position.z);
                
                model.scale.set(2, 2, 2);

            scene.add(model);
            models.push(model);
        },
        undefined,
        function(error) {
            console.error('Error loading model:', error);
        }
    );
});

// Animation function
function animate() {
    requestAnimationFrame(animate);
    
    
    // Rotate models if they exist
    models.forEach(model => {
        if(model) model.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
}

// Start animation
animate();

// Window resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Mouse interaction
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

// State Variables
let currentProjectIndex = 0;
let currentImageIndex = 0;

// DOM Elements
const elements = {
    // Navigation Elements
    menuButton: document.getElementById('menuButton'),
    navMenu: document.getElementById('navMenu'),
    langToggle: document.getElementById('langToggle'),
    langOptions: document.getElementById('langOptions'),
    
    // Modal Elements
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
// Navigation Functions
function toggleMenu() {
    elements.navMenu.classList.toggle('active');
}

function toggleLanguage() {
    elements.langOptions.classList.toggle('active');
}

function handleLanguageChange(e) {
    if (e.target.tagName === 'BUTTON') {
        elements.langToggle.textContent = e.target.textContent;
        elements.langOptions.classList.remove('active');
        // Add language change logic here
    }
}

function populateProjects() {
    // Get containers for each category
    const designContainer = document.querySelector('.design-projects');
    const codingContainer = document.querySelector('.coding-projects');
    const brandingContainer = document.querySelector('.branding-projects');

// Clear existing content
designContainer.innerHTML = '';
codingContainer.innerHTML = '';
brandingContainer.innerHTML = '';

    // Loop through projects and create elements
    projectsData.forEach((project, index) => {
        // Create project item
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.setAttribute('data-index', index);
        projectItem.setAttribute('category', project.category);
        
        // Set inner HTML using project data
        projectItem.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-title">
                ${project.title}
                <p class="project-description">${project.shortDescription}</p>
            </div>
        `;
        
        // Add click handler
        projectItem.addEventListener('click', () => {
            currentProjectIndex = index;
            currentImageIndex = 0;
            elements.modal.style.display = "flex";
            updateModalContent();
        });
        
        // Add to appropriate container
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



// Modal Functions
function updateModalContent() {
    const project = projectsData[currentProjectIndex];
    if (!project) return;

    elements.modalTitle.textContent = project.title;
    elements.modalDescription.textContent = project.fullDescription; // Changed from description to fullDescription
    
    elements.modalImage.src = project.images[currentImageIndex];
    elements.imageCounter.textContent = `Image ${currentImageIndex + 1} / ${project.images.length}`;
    elements.projectCounter.textContent = `Project ${currentProjectIndex + 1} / ${projectsData.length}`;
    
    elements.prevProjectBtn.disabled = currentProjectIndex === 0;
    elements.nextProjectBtn.disabled = currentProjectIndex === projectsData.length - 1;
    
    elements.prevImageBtn.disabled = currentImageIndex === 0;
    elements.nextImageBtn.disabled = currentImageIndex === project.images.length - 1;
}



function showModal(index) {
    currentProjectIndex = index;
    currentImageIndex = 0;
    elements.modal.style.display = "flex";
    updateModalContent();
}

function closeModal() {
    elements.modal.style.display = "none";
}

// Menu Functionality
document.getElementById('menuButton').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});

// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    document.getElementById('langOptions').classList.toggle('active');
});


// Navigation Event Listeners
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

// Modal Close Handlers
elements.closeBtn.addEventListener('click', () => {
    elements.modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === elements.modal) {
        elements.modal.style.display = "none";
    }
});

// Close menus when clicking outside
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    const menuButton = document.getElementById('menuButton');
    const langOptions = document.getElementById('langOptions');
    const langToggle = document.getElementById('langToggle');

    if (!navMenu.contains(event.target) && event.target !== menuButton) {
        navMenu.classList.remove('active');
    }
    if (!langOptions.contains(event.target) && event.target !== langToggle) {
        langOptions.classList.remove('active');
    }
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('navMenu').classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Adds event when the page loads
document.addEventListener('DOMContentLoaded', populateProjects);

// Scroll Animations
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
    clearProps: "all"  //Clears properties once animation is done
});

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

