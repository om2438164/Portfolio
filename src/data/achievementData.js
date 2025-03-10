import sql from "./sql.png";
import tiaa from "./tiaa.png";
import HackerRank from "./HackerRank.png";
export const achievementData = {
    bio : "I have consistently excelled in academics and technology, maintaining a 9.40 CGPA in engineering while honing my problem-solving skills. I achieved a 5-star rating in C++ on HackerRank and solved 200+ DSA problems on platforms like LeetCode and Coding Ninjas. As a finalist in the TIAA Hackathon 2024, I contributed to developing an AI-driven stock allocation engine. Additionally, I built Resumate, a resume builder used by 100+ users, and earned a MySQL Certification from Infosys Springboard. Beyond coding, I secured first place in a chess competition and achieved a 90 WPM typing speed.",
    achievements : [
        {
            id : 1,
            title : '5 Star Coder',
            details : 'Achieved a 5-star rating in C++ programming on HackerRank, demonstrating strong problem-solving skills.',
            date : 'Mar, 2024',
            field : 'HackerRank',
            image : HackerRank
        },
        {
            id : 2,
            title : 'TIAA Hackathon Finalist',
            details : 'Developed an AI-driven stock allocation engine to recommend optimal stocks based on user Financial Data.',
            date : '2024',
            field : 'Hackathon',
            image : tiaa
        },
        {
            id : 3,
            title : 'MySQL Certification',
            details : 'Earned a MySQL Certification from Infosys Springboard, showcasing expertise in database management, SQL queries, data manipulation.',
            date : 'Jun 13, 2023',
            field : 'Database',
            image : sql
        }

    ]
}
