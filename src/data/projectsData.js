import one from '../assets/svg/projects/one.jpg'
import two from '../assets/svg/projects/two.png'
import pet from '../assets/svg/projects/pet.png'
import invoice from '../assets/svg/projects/invoice.png'
export const projectsData = [
    {
        id: 1,
        projectName: 'BillFlow - Invoice Management',
        projectDesc: 'Fully functional invoice management platform with role-based dashboards for admins and users, allowing secure operations',
        tags: ['Spring Boot','React.js','REST APIs','MySQL'],
        code: 'https://invoice-xi-bice.vercel.app/',
        demo: 'https://invoice-xi-bice.vercel.app/',
        image: invoice
    },
    
    {
        id: 2,
        projectName: 'Pet Mart',
        projectDesc: 'Developed a full-stack pet adoption platform to connect prospective pet owners with adoptable pets',
        tags: ['Spring Boot','React.js','REST APIs','MySQL'],
        code: 'https://pet-mart-frontend.vercel.app/',
        demo: 'https://pet-mart-frontend.vercel.app/',
        image: pet
    },
    {
        id: 3,
        projectName: 'Resumate Resume Builder',
        projectDesc: 'A dynamic resume builder application designed to create ATS-friendly resumes for Job seekers',
        tags: ['React', 'Tailwind CSS','Nodejs','MongoDB'],
        code: 'https://github.com/om2438164/Resumate8.git',
        demo: 'https://resumate-resume.netlify.app/',
        image: two
    },
    {
        id: 4,
        projectName: 'Stock Allocation Engine',
        projectDesc: ' Developed an AI-driven stock allocation engine to recommend optimal stocks based on user financial data.',
        tags: ['React', 'Tailwind CSS', 'Python'],
        code: 'https://github.com/om2438164/AI-Stock-allocation-Engine.git',
        demo: 'https://github.com/om2438164/AI-Stock-allocation-Engine.git',
        image: one
    },
]