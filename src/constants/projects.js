export const projects = [
    {
        title: "MathEdu",
        tags: ["📐 Plataforma web educativa", "🔨 En construcción"],
        description: "Plataforma web educativa para docentes Educación Infantil y Primaria sobre didáctica de las matemáticas. Ofrece artículos de formación gratuitos, información sobre cursos y actividades interactivas digitales. Este prototipo está diseñado para crear fácilmente artículos con componentes personalizados atractivos, así como añadir nuevos niveles de actividades y cuentos mediante archivos JSON.",
        images: [
            "math-edu/math-edu-hero.png",
            "math-edu/math-edu-articulo.png",
            "math-edu/math-edu-cuento.png",
            "math-edu/math-edu-subitizacion.png",
            "math-edu/math-edu-cuento-completado.png",
            "math-edu/math-edu-articulo-2.png",
            "math-edu/math-edu-pildoras-seleccion.png"
        ],
        links: [
            { text: "Ver proyecto", url: "https://manu-reco.github.io/math-web/", color: "mathEdu" },
            { text: "Ver en GitHub", url: "https://github.com/manu-reco/math-web", color: "github" }
        ],
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Shadcn UI", "Responsive Design"]
    },

    {
        title: "AYS - At Your Service",
        tags: ["🎓 Proyecto de Fin de Grado DAM"],
        description: "Sistema web que permite a profesionales autónomos registrar clientes, servicios con diferentes tarifas y sesiones en un calendario visual, facilitando la gestión integral de su negocio desde un mismo entorno. Incluye CRUD dinámico, integración de librerías como FullCalendar y una arquitectura basada en el patrón Modelo-Vista-Controlador (MVC).",
        images: ["ayserv-autonomos/ayserv-calendar.png", "ayserv-autonomos/ayserv-home.png", "ayserv-autonomos/ayserv-details-parent.png", "ayserv-autonomos/ayserv-edit-service.png", "ayserv-autonomos/ayserv-new-session.png", "ayserv-autonomos/ayserv-session-list.png"],
        links: [
            { text: "Ver en GitHub", url: "https://github.com/manu-reco/ayserv-autonomos", color: "github" }
        ],
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Bootstrap"]
    },
    {
        title: "¡Este portfolio!",
        tags: ["🌟 Proyecto personal"],
        description: "Portfolio personal desarrollado con herramientas frontend modernas como React, Tailwind CSS y Vite. Con diseño responsive, modo oscuro/claro y componentes reutilizables.",
        images: ["my-portfolio-about.png"],
        links: [
            { text: "Ver en GitHub", url: "https://github.com/manu-reco/my-dev-portfolio", color: "github" }
        ],
        skills: ["React", "Tailwind CSS", "JavaScript JSX", "Vite"]
    },
    {
        title: "Telecom ERP",
        tags: ["🤝 Proyecto grupal"],
        description: "Sistema de gestión empresarial (ERP) para una empresa de telecomunicaciones. Permite gestionar clientes, productos, facturas y empleados con un enfoque en la usabilidad y prevención de pérdida de datos. Incluye funcionalidades como CRUD dinámico y generación de facturas en PDF.",
        images: ["telecom-erp/telecom-.png", "telecom-erp/telecom-editar-facturas.png", "telecom-erp/telecom-facturas.png"],
        links: [
            { text: "Ver en GitHub", url: "https://github.com/manu-reco/telecom-ERP", color: "github" }
        ],
        skills: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "MVC", "Bootstrap"]
    },
    {
        title: "Novelas Visuales",
        tags: ["🎮 Publicadas en Nintendo Switch"],
        description: "Novelas visuales infantiles desarrolladas con Unity y el plugin Naninovel. Configuración de escenas, prefabs, animaciones y scripts en C#. Uso de IA generativa (ChatGPT, Gemini e IA integrada en Krita) para creación y mejora de imágenes e historias. Proyecto grupal en prácticas DAM en Bimfloat.",
        images: ["visual-novels/secret-garden-1.png", "visual-novels/jungle-challenge-1.png", "visual-novels/mila-zug-1.png", "visual-novels/mila-zug-2.png", "visual-novels/mila-zug-3.png", "visual-novels/jungle-challenge-2.png", "visual-novels/secret-garden-2.png"],
        links: [
            { text: "Ver en Nintendo Store", url: "https://www.nintendo.com/us/store/products/the-guardians-of-the-secret-garden-switch/?srsltid=AfmBOoriptOEOtn8OD7NE-qEoRFk_yBY2FamcVmWl56VKpdB8xaVqZ5X", color: "nintendo" },
            { text: "Ver en GitHub", url: "https://github.com/manu-reco/secretgarden", color: "github" }
        ],
        skills: ["Unity", "C#", "Naninovel", "ChatGPT", "Gemini", "Krita"]
    }
];