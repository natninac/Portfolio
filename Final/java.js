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
    
            technologies: ["Solidworks", "Keyshot", "Adobe Suite"],
    
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
    
            ],

    imageCaptions: [
    
                    "USB-C chargeable stud finder designed featuring a tall profile for wrist comfort.",
        "The concept was inspired by the comfort of vertical computer mice.",
        "The recycled plastic texture was created on Keyshot and placed on a Solidworks model.",
        "",
        "Environment render",
        "Exploded view"
        
                ]
    
        },
    
        {
    
            id: "shower-seat",
    
            title: "TORI Shower Seat",
    
            category: ProjectCategory.DESIGN,
    
            shortDescription: "Shower seat for individuals with reduced mobility. 2023.",
    
            fullDescription: `During my last year studying industrial design, I was assigned a folding shower seat to design. I worked on this project for a whole school year.`,
    
            technologies: ["Solidworks", "Keyshot", "Adobe Suite"],
    imageCaptions: [
    
                    "I named it 'Tori' because of the grab bar's resemblance to Japanese Torii gates.",
        "My priorities with this design were to create a seat that was visually appealing, comfortable, durable and ergonomic for the target user.",
        "The shower being a vulnerable environment, I emphasized the curves in the seat, making sure that there were no sharp corners that could hurt or intimidate the user. ",
        
        
                ],
    
            images: [
    
                "images/seat/seat3.png",
    "images/seat/seat.mp4",
    
                "images/seat/image2.jpg",
    
                "images/seat/image3.jpg",
    "images/seat/image5.jpg",
    "images/seat/image6.jpg",
    "images/seat/image7.jpg",
    "images/seat/image8.jpg",
    "images/seat/image9.jpg",
    
    
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
    
                "images/game/title.png",
    "images/game/animation.mp4",
    
                "images/game/back.png",
    
                "images/game/character.png"
    
            ],

    imageCaptions: [
        "Cover page, designed using Adobe Suite to create an atmospheric design.",
        "Animation, made using Blender and Adobe Premiere Pro. I wanted to show the character in his desolated home, looking out.",
        "Introduction page",
        "Character design"
        

    ]
    
        },

    
        {
    
            id: "puffer-jacket",
    
            title: "Puffer Jacket",
    
            category: ProjectCategory.DESIGN,
    
            shortDescription: "Puffer vest designed on Clo3D. 2023.",
    
            fullDescription: `This is an animation I created using a puffer vest model I designed on Clo3d.`,
    
            technologies: ["Clo3D", "Blender", "Illustrator"],
    
            coverImage: "images/jacket/puffer.png",
    
            images: [
    
                "images/jacket/jacket.mp4"
    
            ],
    
            imageCaptions: [
    
                "3D animation of the puffer jacket design showing fabric draping and material properties"
    
            ]
    
        },
    
        //Coding section
    
        {
    
            id: "color-field-generator",
    
            title: "Color Field Generator",
    
            category: ProjectCategory.CODING,
    
            shortDescription: "Generates artwork inspired by color field paintings. 2023.",
    
            fullDescription: `This project started off as an initiative to explore code for the first time. As someone very inspired by Mark Rothko's art and philosophy, I decided to create code that would generate layouts that roughly looked like colour field paintings. Try it here: https://natninac.github.io/Color_Field_Generator/`,
    
            technologies: ["P5", "JavaScript"],
    
            images: [
    
                "images/game/generator.png",
    
                "images/game/generator2.png",
    
                "images/game/generator3.png"
    
            ],
    imageCaptions: [
"",
"",
""
    ]
    
        },
    
        {
    
            id: "durvo-website",
    
            title: "Website Design",
    
            category: ProjectCategory.CODING,
    
            shortDescription: "Product website. 2024.",
    
            fullDescription: `A product website concept made on figma. `,
    
            technologies: ["Figma"],
    
            images: [
    
                "images/durvo/Landingpage.jpg",
    
                "images/durvo/Productpage.jpg",
    
                "images/durvo/Aboutus.jpg",
    
                "images/durvo/Desktop.jpg"
    
            ],
    imageCaptions: [
"Landing page",
"Product page",
"'About us' section",
""
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
    
                "images/photo/bridge.edit.jpg",
    
                "images/photo/drink.jpg",
    
                "images/photo/metro.jpg",
    
                "images/photo/house.jpg",
    
                "images/photo/tower.jpg",
    
                "images/photo/van.jpg",
    
                "images/photo/mirra.jpg",
    
                "images/photo/butterfly.jpg",
    
                "images/photo/sun.jpg",
    
                "images/photo/islandhouse.jpg",
    
            ],
    imageCaptions: [
        "2021",
        "2024",
        "2024",
        "2021",
        "2021",
        "2023",
        "2022",
        "2022",
        "2023",
        "2022"
    ]
    
        },
    
        {
    
            id: "luminous-threadz",
    
            title: "Social Media Branding",
    
            category: ProjectCategory.BRANDING,
    
            shortDescription: "Social media content creation portfolio. 2024.",
    
            fullDescription: `I have been in charge of content creation and branding for a local apparel brand called Luminous Threadz. This is some of our work.`,
    
            technologies: [ "After Effects", "Adobe Suite"],
    
            images: [
    
                "images/branding/logo.jpg",
    
                "images/branding/sketches.jpg",
    
                "images/branding/monochrome.jpg",
    "images/branding/lumi.png",
    "images/branding/reel.mp4",
   
    "images/branding/ecom1.jpg",
    "images/branding/ecom2.jpg",
    "images/branding/ecom3.jpg",

                
    
            ],

    imageCaptions: [
        "Final logo",
        "Logo sketches",
        "Monochrome logo",
        "Typography created by local artist Boogalo Jones",
        "Animation created on Adobe After Effects.",
        "E-commerce photo",
        "E-commerce photo, detail",
        "E-commerce photo"
    ]
    
        },
    
        {
    
            id: "Audiovisual",
    
            title: "Audiovisual work",
    
            category: ProjectCategory.BRANDING,
    
            shortDescription: "Audio-visual projects featuring original tracks and imagery. 2025.",
    
            fullDescription: `These are some projects I created in my Digital Media Studio I class, which delves into audiovisual work.`,
    
            technologies: ["Adobe Suite", "Reaper"],
    
            coverImage: "images/colors/audiovis.png",
    
            images: [
    
                "images/photo/project1.mp4",
    
                "images/photo/NatColors.mp4"
    
            ],
    imageCaptions: [
        "Soundscape project centering my car as the main location.",
        "Audio-visual project featuring various neighborhood scenes and their color palettes."
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
    
        { x: -30, y: 15, z: 0 },    // Position for first model
    
        { x: 30, y: -25, z: -5 },   // Position for second model
    
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
    
        modalContent: document.querySelector(".modal-content"),
    
        modalTitle: document.getElementById("modalTitle"),
    
        modalDescription: document.getElementById("modalDescription"),
    
        prevProjectBtn: document.getElementById("prevProject"),
    
        nextProjectBtn: document.getElementById("nextProject"),
    
        closeBtn: document.querySelector(".close")
    
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
    
            let coverSrc;
    
      
    
            if (project.coverImage) {
    
                // Use the specified cover image if available
    
                coverSrc = project.coverImage;
    
            } else {
    
                // Otherwise use the first image in the array
    
                coverSrc = project.images[0];
    
            }
    
      
    
            projectItem.innerHTML = `
    
                <img src="${coverSrc}" alt="${project.title}">
    
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
    
     * Creates a scrollable gallery with full-size images
    
     * Maintains original top/bottom project navigation style
    
     */
    
    /**
    
     * Modal Content Update
    
     * Creates a scrollable gallery with full-size images
    
     * Places navigation arrows outside the modal content box
    
     */
    
    function updateModalContent() {
    
        const project = projectsData[currentProjectIndex];
    
        if (!project) return;
    
      
    
        // Clear the modal content
    
        elements.modalContent.innerHTML = '';
    
        // Create the inner scrollable container
    
        const modalInner = document.createElement('div');
    
        modalInner.className = 'modal-inner';
    
        elements.modalContent.appendChild(modalInner);
    
        // Create close button
    
        const closeButton = document.createElement('span');
    
        closeButton.className = 'close';
    
        closeButton.innerHTML = '&times;';
    
        closeButton.addEventListener('click', closeModal);
    
        modalInner.appendChild(closeButton);
    
        // Add title
    
        const titleElement = document.createElement('h4');
    
        titleElement.id = 'modalTitle';
    
        titleElement.textContent = project.title;
    
        modalInner.appendChild(titleElement);
    
      
    
        // Add tech tags if available
    
        if (project.technologies && project.technologies.length > 0) {
    
            const techContainer = document.createElement('div');
    
            techContainer.className = 'tech-tags';
    
            project.technologies.forEach(tech => {
    
                const tag = document.createElement('span');
    
                tag.className = 'tech-tag';
    
                tag.textContent = tech;
    
                techContainer.appendChild(tag);
    
            });
    
            modalInner.appendChild(techContainer);
    
        }
    
        // Add description
    
        const descriptionElement = document.createElement('p');
    
        descriptionElement.id = 'modalDescription';
    
        descriptionElement.textContent = project.fullDescription;
    
        modalInner.appendChild(descriptionElement);
    
        // Create gallery container
    
        const galleryContainer = document.createElement('div');
    
        galleryContainer.className = 'gallery-container';
    
        // Process each media item
    
        project.images.forEach((mediaPath, index) => {
    
            // Create media item container
    
            const mediaItem = document.createElement('div');
    
            mediaItem.className = 'media-item';
    
            // Create media content container
    
            const mediaContent = document.createElement('div');
    
            mediaContent.className = 'media-content';
    
            // Check if the media is a video
    
            const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaPath);
    
            if (isVideo) {
    
                // Create video element
    
                const videoElement = document.createElement('video');
    
                videoElement.src = mediaPath;
    
                videoElement.controls = true;
    
                videoElement.autoplay = false;
    
                videoElement.style.width = '100%';
    
                // Add video to container
    
                mediaContent.appendChild(videoElement);
    
            } else {
    
                // Create image element with full size
    
                const imageElement = document.createElement('img');
    
                imageElement.src = mediaPath;
    
                imageElement.alt = `${project.title} - Image ${index + 1}`;
    
                imageElement.style.width = '100%';
    
                imageElement.style.height = 'auto';
    
                imageElement.style.maxWidth = 'none';
    
                // Add image to container
    
                mediaContent.appendChild(imageElement);
    
            }
    
            // Add media content to item
    
            mediaItem.appendChild(mediaContent);
    
            // Create and add caption
    
            const caption = document.createElement('div');
    
            caption.className = 'media-caption';
    
        
    
         if (project.imageCaptions && project.imageCaptions[index] !== undefined) {
        // If there's a defined caption and it's not an empty string
        if (project.imageCaptions[index] !== "") {
            const caption = document.createElement('div');
            caption.className = 'media-caption';
            caption.textContent = project.imageCaptions[index];
            mediaItem.appendChild(caption);
        }
        // If it's an empty string, don't add a caption at all
    } else if (project.imageCaptions !== undefined) {
        // If the project has imageCaptions but none for this specific image, don't add caption
        // This allows partial caption arrays
    } else {
        // Legacy behavior - add a generic caption if no imageCaptions array exists
        const caption = document.createElement('div');
        caption.className = 'media-caption';
        caption.textContent = isVideo ?
            `${project.title} - Video ${index + 1}` :
            `${project.title} - Image ${index + 1}`;
        mediaItem.appendChild(caption);
    }
    
            // Add the complete media item to gallery
    
            galleryContainer.appendChild(mediaItem);
    
        });
    
        // Add gallery to modal inner container
    
        modalInner.appendChild(galleryContainer);
    
        // Create previous project button (outside the modal content)
    
        if (!document.getElementById('prevProject')) {
    
            const prevProjectBtn = document.createElement('button');
    
            prevProjectBtn.id = 'prevProject';
    
            prevProjectBtn.className = 'project-nav-button prev-project';
    
            prevProjectBtn.innerHTML = `
    
                <span class="nav-arrow">↑</span>
    
                <span class="nav-project-title">Previous Project</span>
    
            `;
    
            // Add click event listener
    
            prevProjectBtn.addEventListener('click', () => {
    
                if (currentProjectIndex > 0) {
    
                    currentProjectIndex--;
    
                    updateModalContent();
    
                }
    
            });
    
            // Add to modal but before modal-content
    
            elements.modal.insertBefore(prevProjectBtn, elements.modalContent);
    
        }
    
        // Create next project button (outside the modal content)
    
        if (!document.getElementById('nextProject')) {
    
            const nextProjectBtn = document.createElement('button');
    
            nextProjectBtn.id = 'nextProject';
    
            nextProjectBtn.className = 'project-nav-button next-project';
    
            nextProjectBtn.innerHTML = `
    
                <span class="nav-project-title">Next Project</span>
    
                <span class="nav-arrow">↓</span>
    
            `;
    
            // Add click event listener
    
            nextProjectBtn.addEventListener('click', () => {
    
                if (currentProjectIndex < projectsData.length - 1) {
    
                    currentProjectIndex++;
    
                    updateModalContent();
    
                }
    
            });
    
            // Add to modal after modal-content
    
            elements.modal.appendChild(nextProjectBtn);
    
        }
    
        // Update navigation button states
    
        const prevProjectBtn = document.getElementById('prevProject');
    
        const nextProjectBtn = document.getElementById('nextProject');
    
        if (prevProjectBtn) {
    
            prevProjectBtn.disabled = currentProjectIndex === 0;
    
        }
    
        if (nextProjectBtn) {
    
            nextProjectBtn.disabled = currentProjectIndex === projectsData.length - 1;
    
        }
    
        // Scroll to top of modal content
    
        modalInner.scrollTop = 0;
    
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
    
        clearProps: "all"  // Clear properties once the animation is done
    
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