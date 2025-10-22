/* Configuration for the particles system */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#8000ff" // Match your purple glow color
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c477f7", // Line color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5, // Particle speed
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Particles react when you hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Particles appear when you click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 4
            },
	    "repulse": {
	        "distance": 140,
		"duration": 2
	    },
        }
    },
    "retina_detect": true
});
