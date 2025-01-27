export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: ``,
    },
    { 
        id: "software-proposal", 
        label: "Software development proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>

            <h2>Project Overview</h2>
            <p>Provide a brief overview of the project, including the problem being solved and the proposed solution.</p>

            <h2>Objectives</h2>
            <ul>
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
            </ul>

            <h2>Deliverables</h2>
            <ul>
                <li>List the key deliverables for the project.</li>
            </ul>

            <h2>Timeline</h2>
            <table>
                <tr>
                    <th>Phase</th>
                    <th>Duration</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Phase 1</td>
                    <td>X weeks</td>
                    <td>Description of phase 1</td>
                </tr>
                <tr>
                    <td>Phase 2</td>
                    <td>X weeks</td>
                    <td>Description of phase 2</td>
                </tr>
            </table>

            <h2>Budget</h2>
            <p>Provide an estimated cost breakdown for the project.</p>

            <h2>Team</h2>
            <ul>
                <li>Name 1 (Role)</li>
                <li>Name 2 (Role)</li>
            </ul>

            <h2>Contact</h2>
            <p>Include contact details for follow-up.</p>
        `,
    },
    { 
        id: "project-proposal", 
        label: "Project proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>

            <h2>Project Title</h2>
            <p>Provide the name of the project.</p>

            <h2>Background</h2>
            <p>Explain the context or problem that the project aims to address.</p>

            <h2>Objectives</h2>
            <ul>
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
            </ul>

            <h2>Methodology</h2>
            <p>Describe the approach, methods, and resources required for the project.</p>

            <h2>Timeline</h2>
            <p>Provide a timeline for the project milestones.</p>

            <h2>Budget</h2>
            <p>Include an estimated budget for the project.</p>

            <h2>Conclusion</h2>
            <p>Summarize the value and impact of the project.</p>
        `,
    },
    { 
        id: "business-letter", 
        label: "Business letter", 
        imageUrl: "/business-letter.svg",
        initialContent: `
            <p>[Your Name]<br>
            [Your Job Title]<br>
            [Your Company Name]<br>
            [Your Address]<br>
            [City, State, ZIP Code]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]<br>
            [Recipient's Job Title]<br>
            [Recipient's Company Name]<br>
            [Recipient's Address]<br>
            [City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Opening paragraph stating the purpose of the letter.]</p>

            <p>[Body of the letter with additional details, supporting information, or requests.]</p>

            <p>[Closing paragraph with a call to action or summary.]</p>

            <p>Sincerely,<br>
            [Your Name]<br>
            [Your Job Title]<br>
            [Your Contact Information]</p>
        `,
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>

            <h2>Contact Information</h2>
            <ul>
                <li>Email: [your.email@example.com]</li>
                <li>Phone: [Your Phone Number]</li>
                <li>LinkedIn: [Your LinkedIn URL]</li>
                <li>Portfolio: [Your Portfolio URL]</li>
            </ul>

            <h2>Professional Summary</h2>
            <p>Write a brief summary about your experience, skills, and career goals.</p>

            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>

            <h2>Experience</h2>
            <h3>[Job Title], [Company Name]</h3>
            <p>[Start Date] – [End Date]</p>
            <ul>
                <li>Responsibility 1</li>
                <li>Responsibility 2</li>
                <li>Achievement 1</li>
            </ul>

            <h3>[Job Title], [Company Name]</h3>
            <p>[Start Date] – [End Date]</p>
            <ul>
                <li>Responsibility 1</li>
                <li>Responsibility 2</li>
                <li>Achievement 1</li>
            </ul>

            <h2>Education</h2>
            <h3>[Degree], [University Name]</h3>
            <p>[Graduation Year]</p>

            <h2>Certifications</h2>
            <ul>
                <li>Certification Name, Issuer, Year</li>
            </ul>
        `,
    },
    { 
        id: "cover-letter", 
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p>[Your Name]<br>
            [Your Address]<br>
            [City, State, ZIP Code]<br>
            [Your Email Address]<br>
            [Your Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]<br>
            [Recipient's Job Title]<br>
            [Company Name]<br>
            [Company Address]<br>
            [City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Opening paragraph expressing interest in the position and summarizing why you're a good fit.]</p>

            <p>[Second paragraph elaborating on your experience, skills, and achievements relevant to the role.]</p>

            <p>[Closing paragraph expressing enthusiasm for the opportunity and a call to action.]</p>

            <p>Sincerely,<br>
            [Your Name]</p>
        `,
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
            <p>[Your Name]<br>
            [Your Address]<br>
            [City, State, ZIP Code]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]<br>
            [Recipient's Address]<br>
            [City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Write the main content of your letter here. Be clear and concise.]</p>

            <p>[Include a closing line summarizing your intent or expressing gratitude.]</p>

            <p>Sincerely,<br>
            [Your Name]</p>
        `,
    },
];
