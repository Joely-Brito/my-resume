const projects = [
	{
		name: "api-front-end",
		description:
			"Aplicação front-end para consumo de API com foco em interface funcional e integração de dados.",
		tech: ["JavaScript", "Front-end"],
		repoUrl: "https://github.com/Joely-Brito/api-front-end",
		liveUrl: "https://api-front-end.vercel.app",
		imageUrl: "https://opengraph.githubassets.com/1/Joely-Brito/api-front-end",
	},
	{
		name: "api-backend",
		description:
			"API backend para publicação em ambiente cloud, com endpoints para integração com clientes web.",
		tech: ["Node.js", "JavaScript"],
		repoUrl: "https://github.com/Joely-Brito/api-backend",
		liveUrl: "https://back-end-j9ur.onrender.com",
		imageUrl: "https://opengraph.githubassets.com/1/Joely-Brito/api-backend",
	},
	{
		name: "API-escola-ingles",
		description:
			"API para escola de inglês utilizando Express, Sequelize e MySQL para gestão de recursos acadêmicos.",
		tech: ["Express", "MySQL"],
		repoUrl: "https://github.com/Joely-Brito/API-escola-ingles",
		liveUrl: "",
		imageUrl:
			"https://opengraph.githubassets.com/1/Joely-Brito/API-escola-ingles",
	},
	{
		name: "Pong",
		description:
			"Versão web do clássico Pong desenvolvida com JavaScript, p5.js, HTML5 e CSS3.",
		tech: ["JavaScript", "p5.js"],
		repoUrl: "https://github.com/Joely-Brito/Pong",
		liveUrl: "https://joely-brito.github.io/Pong/",
		imageUrl: "https://opengraph.githubassets.com/1/Joely-Brito/Pong",
	},
	{
		name: "Barbearia",
		description:
			"Site institucional para barbearia, aplicando fundamentos de HTML5, CSS3 e estruturação de conteúdo.",
		tech: ["HTML5", "CSS3"],
		repoUrl: "https://github.com/Joely-Brito/Barbearia",
		liveUrl: "https://joely-brito.github.io/Barbearia/",
		imageUrl: "https://opengraph.githubassets.com/1/Joely-Brito/Barbearia",
	},
	{
		name: "desafio-academia-capgemini",
		description:
			"Resolução de desafio técnico com foco em lógica de programação e boas práticas em JavaScript.",
		tech: ["JavaScript", "Algoritmos"],
		repoUrl: "https://github.com/Joely-Brito/desafio-academia-capgemini",
		liveUrl: "",
		imageUrl:
			"https://opengraph.githubassets.com/1/Joely-Brito/desafio-academia-capgemini",
	},
];

const projectsList = document.getElementById("projects-list");
const yearElement = document.getElementById("year");

function buildProjectCard(project, index) {
	const card = document.createElement("article");
	card.className = "project-card";
	card.style.animationDelay = `${0.08 * index}s`;
    
	card.innerHTML = `
		<img src="${project.imageUrl}" alt="Capa do projeto ${project.name}" loading="lazy" />
		<div class="project-body">
			<h3 class="project-title">${project.name}</h3>
			<p>${project.description}</p>
			<div class="meta">
				${project.tech.map((item) => `<span class="badge">${item}</span>`).join("")}
			</div>
			<div class="project-actions">
				<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
			</div>
		</div>
	`;

	return card;
}

function renderProjects() {
	if (!projectsList) {
		return;
	}

	projects.forEach((project, index) => {
		projectsList.appendChild(buildProjectCard(project, index));
	});
}

function setFooterYear() {
	if (yearElement) {
		yearElement.textContent = String(new Date().getFullYear());
	}
}

renderProjects();
setFooterYear();
