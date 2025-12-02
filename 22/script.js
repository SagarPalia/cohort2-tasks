const users = [
	{
		fullname: "Priya Sharma",
		profession: "Frontend Developer",
		description:
			"Based in Bangalore, Priya specializes in React and Vue.js, creating responsive e-commerce interfaces for startups. She contributes to open-source UI libraries and mentors women in tech through local meetups.",
	},
	{
		fullname: "Raj Patel",
		profession: "Full-Stack Developer",
		description:
			"From Mumbai, Raj builds scalable web apps using Node.js and MongoDB, focusing on fintech solutions. He has experience with microservices and shares tutorials on JavaScript best practices on his blog.",
	},
	{
		fullname: "Aisha Khan",
		profession: "UI/UX Designer & Developer",
		description:
			"Hyderabad-based Aisha combines design tools like Figma with HTML/CSS/JS to craft user-centric websites for edtech platforms. Her work emphasizes accessibility and has won awards at national design conferences.",
	},
	{
		fullname: "Vikram Singh",
		profession: "Backend Developer",
		description:
			"In Delhi, Vikram develops APIs with Express.js and Python, optimizing performance for social media apps. He is passionate about clean code principles and participates in hackathons for sustainable tech.",
	},
	{
		fullname: "Neha Gupta",
		profession: "Web Application Architect",
		description:
			"Chennai resident Neha designs cloud-based architectures using AWS and Angular, for enterprise-level projects. She advocates for progressive web apps and writes about refactoring JavaScript code for maintainability.",
	},
	{
		fullname: "Arjun Reddy",
		profession: "Mobile Web Specialist",
		description:
			"Pune developer Arjun focuses on Progressive Web Apps (PWAs) with React Native and JavaScript, targeting cross-platform e-commerce. He explores offline functionality and contributes to mobile-first design communities.",
	},
	{
		fullname: "Sita Menon",
		profession: "DevOps Engineer",
		description:
			"Kolkata-based Sita automates web deployment pipelines using Docker and Jenkins, ensuring CI/CD for SaaS platforms. Her expertise in Kubernetes helps scale web services, and she blogs on infrastructure as code.",
	},
	{
		fullname: "Karan Joshi",
		profession: "JavaScript Educator",
		description:
			"Ahmedabad's Karan teaches advanced ES6+ concepts and TypeScript through online courses, helping beginners build dynamic web apps. He develops interactive tutorials and speaks at regional tech conferences.",
	},
	{
		fullname: "Lakshmi Iyer",
		profession: "E-commerce Developer",
		description:
			"Coimbatore specialist Lakshmi integrates Shopify and custom JS frameworks for online stores, optimizing for SEO and speed. She focuses on user personalization and shares case studies on performance tuning.",
	},
	{
		fullname: "Dev Anand",
		profession: "API Developer",
		description:
			"Jaipur resident Dev crafts RESTful and GraphQL APIs with Node.js, supporting real-time features in chat applications. He emphasizes security protocols and collaborates on open-source API tools.",
	},
	{
		fullname: "Riya Bose",
		profession: "Frontend Architect",
		description:
			"Lucknow's Riya leads teams in building component libraries with Next.js, ensuring modular and reusable code for media sites. Her approach to state management with Redux promotes scalable designs.",
	},
	{
		fullname: "Amit Nair",
		profession: "Full-Stack Consultant",
		description:
			"Indore consultant Amit advises on MERN stack implementations for healthcare web portals, integrating databases like PostgreSQL. He conducts workshops on agile web development methodologies.",
	},
	{
		fullname: "Tara Desai",
		profession: "Web Security Specialist",
		description:
			"Surat-based Tara secures web applications against vulnerabilities using OWASP guidelines and JS security libraries. She audits code for startups and promotes ethical hacking in developer forums.",
	},
	{
		fullname: "Rohan Kapoor",
		profession: "Data Visualization Developer",
		description:
			"Chandigarh's Rohan creates interactive dashboards with D3.js and web charts for analytics platforms. His work visualizes big data trends and includes custom animations for engaging user experiences.",
	},
	{
		fullname: "Meera Pillai",
		profession: "Jamstack Developer",
		description:
			"Thiruvananthapuram expert Meera builds static sites with Gatsby and headless CMS, ideal for content-heavy blogs. She optimizes for performance and SEO, sharing insights on serverless architectures.",
	},
];

let main = document.querySelector("main");

let html = "";

users.forEach((user) => {
	let initials = user.fullname.charAt(0);
	html += `
		<div class="card">
			<img
				src="https://placehold.co/200x200/1a6d94/white?text=${initials}"
				alt="image"
			/>
			<h2>${user.fullname}</h2>
			<h3>${user.profession}</h3>
			<p>${user.description}</p>
		</div>

	`;
});

main.innerHTML = html;
