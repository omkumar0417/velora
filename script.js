const subjectsData = {
    1: [
        { name: "Mathematics", link: "#", description: "Mathematics is the study of numbers, shapes, and patterns." },
        { name: "Physics", link: "#", description: "Physics is the study of matter, energy, and the interactions between them." },
        { name: "Chemistry", link: "#", description: "Chemistry is the study of substances and their properties." },
        { name: "Biology", link: "#", description: "Biology is the study of living organisms." },
        { name: "English", link: "#", description: "English is the study of language and literature." },
        { name: "History", link: "#", description: "History is the study of past events." },
        { name: "Geography", link: "#", description: "Geography is the study of places and the relationships between people and their environments." }
        // Removed subject PPPS
    ],
    2: [
        { name: "Advanced Calculus and Complex Analysis", link: "#", description: "Advanced Calculus and Complex Analysis covers advanced topics in calculus and complex number theory." },
        { name: "Chemistry", link: "#", description: "Chemistry is the study of substances and their properties." },
        { name: "Electrical & Electronics Engineering", link: "#", description: "Electrical & Electronics Engineering involves the study of electrical systems and electronic devices." },
        { name: "Environmental Science", link: "#", description: "Environmental Science (Evs) is the study of the environment and solutions to environmental problems." },
        { name: "French", link: "#", description: "French is the study of the French language and its literature." },
        { name: "German", link: "#", description: "German is the study of the German language and its literature." },
        { name: "Japanese", link: "#", description: "Japanese is the study of the Japanese language and its literature." },
        { name: "Engineering Graphics and Design", link: "#", description: "Engineering Graphics and Design involves the creation of technical drawings and designs." },
        { name: "Object-Oriented Design and Programming", link: "#", description: "Object-Oriented Design and Programming (OOP) is a programming paradigm based on the concept of objects." },
        { name: "Universal Human Values", link: "#", description: "Universal Human Values focuses on the study of human values and ethics." },
        { name: "Introduction to Programming Skills", link: "#", description: "Introduction to Programming Skills covers the basics of programming and coding." },
        { name: "Constitution of India", link: "#", description: "Constitution of India covers the fundamental principles and laws of the Indian Constitution." }
    ],
    3: [
        { name: "Operating Systems", link: "#", description: "Operating systems are software that manage computer hardware and software resources." },
        { name: "Database Systems", link: "#", description: "Database systems are software for managing databases." },
        { name: "Computer Networks", link: "#", description: "Computer networks are systems of interconnected computers." },
        { name: "Software Engineering", link: "#", description: "Software engineering is the application of engineering principles to software development." },
        { name: "Artificial Intelligence", link: "#", description: "Artificial intelligence is the simulation of human intelligence in machines." },
        { name: "Machine Learning", link: "#", description: "Machine learning is a subset of artificial intelligence that focuses on the development of algorithms that allow computers to learn from data." },
        { name: "Web Development", link: "#", description: "Web development is the work involved in developing websites for the Internet." }
    ],
    4: [
        { name: "Compiler Design", link: "#", description: "Compiler design is the process of creating a compiler, a program that translates source code into machine code." },
        { name: "Computer Graphics", link: "#", description: "Computer graphics is the creation of images and animations using computers." },
        { name: "Distributed Systems", link: "#", description: "Distributed systems are systems in which components located on networked computers communicate and coordinate their actions by passing messages." },
        { name: "Cloud Computing", link: "#", description: "Cloud computing is the delivery of computing services over the Internet." },
        { name: "Cyber Security", link: "#", description: "Cyber security is the practice of protecting systems, networks, and programs from digital attacks." },
        { name: "Big Data", link: "#", description: "Big data refers to data sets that are too large or complex to be dealt with by traditional data-processing software." },
        { name: "Internet of Things", link: "#", description: "The Internet of Things (IoT) is the network of physical objects that are embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the Internet." }
    ],
    5: [
        { name: "Mobile Computing", link: "#", description: "Mobile computing is human-computer interaction by which a computer is expected to be transported during normal usage." },
        { name: "Blockchain", link: "#", description: "Blockchain is a decentralized digital ledger that records transactions across many computers." },
        { name: "Quantum Computing", link: "#", description: "Quantum computing is the use of quantum-mechanical phenomena such as superposition and entanglement to perform computation." },
        { name: "Human-Computer Interaction", link: "#", description: "Human-computer interaction (HCI) is the study of how people interact with computers and to design technologies that let humans interact with computers in novel ways." },
        { name: "Natural Language Processing", link: "#", description: "Natural language processing (NLP) is a subfield of artificial intelligence that focuses on the interaction between computers and humans through natural language." },
        { name: "Robotics", link: "#", description: "Robotics is the branch of technology that deals with the design, construction, operation, and application of robots." },
        { name: "Augmented Reality", link: "#", description: "Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information." }
    ],
    6: [
        { name: "Virtual Reality", link: "#", description: "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world." },
        { name: "Game Development", link: "#", description: "Game development is the process of creating video games." },
        { name: "Digital Marketing", link: "#", description: "Digital marketing is the component of marketing that utilizes the Internet and online-based digital technologies to promote products and services." },
        { name: "E-commerce", link: "#", description: "E-commerce is the buying and selling of goods and services over the Internet." },
        { name: "Social Media Analytics", link: "#", description: "Social media analytics is the process of collecting and analyzing data from social media platforms." },
        { name: "Data Visualization", link: "#", description: "Data visualization is the graphical representation of information and data." },
        { name: "Business Intelligence", link: "#", description: "Business intelligence (BI) is the technology-driven process for analyzing data and presenting actionable information to help executives, managers, and other corporate end users make informed business decisions." }
    ],
    7: [
        { name: "Project Management", link: "#", description: "Project management is the practice of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria at the specified time." },
        { name: "Entrepreneurship", link: "#", description: "Entrepreneurship is the process of designing, launching, and running a new business." },
        { name: "Innovation Management", link: "#", description: "Innovation management is the process of managing innovations in an organization." },
        { name: "Leadership", link: "#", description: "Leadership is the art of motivating a group of people to act toward achieving a common goal." },
        { name: "Strategic Management", link: "#", description: "Strategic management is the formulation and implementation of the major goals and initiatives taken by an organization's top management on behalf of owners." },
        { name: "Financial Management", link: "#", description: "Financial management is the efficient and effective management of money in such a manner as to accomplish the objectives of the organization." },
        { name: "Marketing Management", link: "#", description: "Marketing management is the process of developing strategies and planning for product or services, advertising, promotions, sales to reach desired customer segment." }
    ],
    8: [
        { name: "Computer Science", link: "#", description: "Computer science is the study of computers and computational systems." },
        { name: "Electronics", link: "#", description: "Electronics is the branch of physics and technology concerned with the design of circuits using transistors and microchips." },
        { name: "Advanced Algorithms", link: "#", description: "Advanced algorithms are complex algorithms used to solve difficult computational problems." },
        { name: "Advanced Data Structures", link: "#", description: "Advanced data structures are complex ways of organizing and storing data." },
        { name: "Advanced Machine Learning", link: "#", description: "Advanced machine learning involves sophisticated techniques for training models on large datasets." },
        { name: "Advanced Artificial Intelligence", link: "#", description: "Advanced artificial intelligence involves cutting-edge techniques for creating intelligent systems." },
        { name: "Advanced Web Development", link: "#", description: "Advanced web development involves creating complex web applications." }
    ]
};

function showSemesters() {
    const semesterOptions = document.getElementById('semester-options');
    const container = document.querySelector('.container');
    const subjectsContainer = document.getElementById('subjects-container');
    semesterOptions.style.display = 'flex';
    semesterOptions.innerHTML = ''; // Clear previous buttons
    subjectsContainer.innerHTML = ''; // Clear subject details

    for (let i = 1; i <= 8; i++) {
        const button = document.createElement('button');
        button.innerText = `Semester ${i}`;
        button.onclick = () => showSubjects(i);
        semesterOptions.appendChild(button);
    }

    // Change the heading text to "Select a Semester"
    const heading = document.querySelector('.container h1');
    heading.innerText = 'Select a Semester';
}

function showSubjects(semester) {
    const subjectsContainer = document.getElementById('subjects-container');
    subjectsContainer.innerHTML = ''; // Clear previous subjects

    const subjects = subjectsData[semester];
    if (subjects) {
        const table = document.createElement('table');
        subjects.forEach((subject, index) => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerHTML = `
                <div class="subject-card" onclick="showSubjectDetails(${semester}, ${index})">
                    <h3>${subject.name}</h3>
                    <p>${subject.description}</p>
                </div>
            `;
            row.appendChild(cell);
            table.appendChild(row);
        });
        subjectsContainer.appendChild(table);
    } else {
        subjectsContainer.innerHTML = '<p>No subjects found for this semester.</p>';
    }
}

function showSubjectDetails(semester, index) {
    const subjectsContainer = document.getElementById('subjects-container');
    const subject = subjectsData[semester][index];
    subjectsContainer.innerHTML = `
        <div class="subject-details">
            <h3>${subject.name}</h3>
            <p><strong>Description:</strong> ${subject.description}</p>
            ${subject.name === "French" ? `
            <div class="notes">
                <h4>Notes</h4>
                <p><a href="https://example.com/complete-1-to-5-ppt" target="_blank" class="unit-link">Complete Notes Unit 1 to 5 PPT</a></p>
                <p><a href="https://example.com/french-book" target="_blank" class="unit-link">French Book</a></p>
                <p><a href="https://example.com/french-book-translation" target="_blank" class="unit-link">French Book Translation</a></p>
            </div>
            <div class="pyq">
                <h4>PYQ</h4>
                <p><a href="https://example.com/pyq1" target="_blank" class="pyq-link">Previous Year Question 1</a></p>
                <p><a href="https://example.com/pyq2" target="_blank" class="pyq-link">Previous Year Question 2</a></p>
                <p><a href="https://example.com/pyq3" target="_blank" class="pyq-link">Previous Year Question 3</a></p>
            </div>
            ` : `
            <div class="notes">
                <h4>Notes</h4>
                <p><a href="https://en.wikipedia.org/wiki/Unit_1" target="_blank" class="unit-link">Unit 1</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Unit_2" target="_blank" class="unit-link">Unit 2</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Unit_3" target="_blank" class="unit-link">Unit 3</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Unit_4" target="_blank" class="unit-link">Unit 4</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Unit_5" target="_blank" class="unit-link">Unit 5</a></p>
            </div>
            <div class="pyq">
                <h4>PYQ</h4>
                <p><a href="https://example.com/pyq1" target="_blank" class="pyq-link">Previous Year Question 1</a></p>
                <p><a href="https://example.com/pyq2" target="_blank" class="pyq-link">Previous Year Question 2</a></p>
                <p><a href="https://example.com/pyq3" target="_blank" class="pyq-link">Previous Year Question 3</a></p>
            </div>
            `}
            <button onclick="showSemesters()">Back to Semesters</button>
        </div>
    `;

    // Update semester buttons to show subjects of the selected semester
    const semesterOptions = document.getElementById('semester-options');
    semesterOptions.innerHTML = ''; // Clear previous buttons

    const subjects = subjectsData[semester];
    subjects.forEach((subject, index) => {
        const button = document.createElement('button');
        button.innerText = subject.name;
        button.onclick = () => showSubjectDetails(semester, index);
        semesterOptions.appendChild(button);
    });

    // Change the heading text to "Select a Different Subject"
    const heading = document.querySelector('.container h1');
    heading.innerText = 'Select a Different Subject';
}

function showAboutUsPrompt() {
    window.open("about-us.html", "_blank");
}

document.addEventListener('DOMContentLoaded', showSemesters);