document.addEventListener('DOMContentLoaded', function() {
    // Personal Info Update
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const linkedinInput = document.getElementById('linkedin');
    const phoneInput = document.getElementById('phone');
    const objectiveInput = document.getElementById('objective');
    
    const previewName = document.getElementById('preview-name');
    const previewEmail = document.getElementById('preview-email');
    const previewLinkedin = document.getElementById('preview-linkedin');
    const previewPhone = document.getElementById('preview-phone');
    const previewObjective = document.getElementById('preview-objective');
    
    [nameInput, emailInput, linkedinInput, phoneInput, objectiveInput].forEach(input => {
        input.addEventListener('input', updatePersonalInfo);
    });
    
    function updatePersonalInfo() {
        previewName.textContent = nameInput.value || 'YOUR NAME';
        previewEmail.textContent = emailInput.value || 'email@example.com';
        previewLinkedin.textContent = linkedinInput.value || 'linkedin.com/in/yourprofile';
        previewPhone.textContent = phoneInput.value || '(123) 456-7890';
        previewObjective.textContent = objectiveInput.value || 'Your professional objective statement goes here.';
    }
    
    // Education Section
    const addEducationBtn = document.getElementById('add-education');
    const educationFields = document.getElementById('education-fields');
    const previewEducation = document.getElementById('preview-education');
    
    addEducationBtn.addEventListener('click', function() {
        const newField = document.createElement('div');
        newField.className = 'section-item';
        newField.innerHTML = `
            <input type="text" placeholder="Degree" class="degree">
            <input type="text" placeholder="Institution" class="institution">
            <input type="text" placeholder="Year/Duration" class="duration">
            <input type="text" placeholder="CGPA/Score" class="score">
            <button class="remove-btn">Remove</button>
        `;
        educationFields.appendChild(newField);
        
        newField.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateEducationPreview);
        });
        
        newField.querySelector('.remove-btn').addEventListener('click', function() {
            educationFields.removeChild(newField);
            updateEducationPreview();
        });
    });
    
    function updateEducationPreview() {
        previewEducation.innerHTML = '';
        const items = document.querySelectorAll('#education-fields .section-item');
        
        items.forEach(item => {
            const degree = item.querySelector('.degree').value;
            const institution = item.querySelector('.institution').value;
            const duration = item.querySelector('.duration').value;
            const score = item.querySelector('.score').value;
            
            if (degree || institution || duration || score) {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                    <p><strong>${degree}</strong>, ${institution}</p>
                    <p>${duration} ${score ? '| ' + score : ''}</p>
                `;
                previewEducation.appendChild(div);
            }
        });
    }
    
    // Skills Section
    const addSkillBtn = document.getElementById('add-skill');
    const skillsFields = document.getElementById('skills-fields');
    const previewSkills = document.getElementById('preview-skills');
    
    addSkillBtn.addEventListener('click', function() {
        const newField = document.createElement('div');
        newField.className = 'section-item';
        newField.innerHTML = `
            <input type="text" placeholder="Skill Category" class="skill-category">
            <textarea placeholder="Skills (comma separated)" class="skills"></textarea>
            <button class="remove-btn">Remove</button>
        `;
        skillsFields.appendChild(newField);
        
        newField.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', updateSkillsPreview);
        });
        
        newField.querySelector('.remove-btn').addEventListener('click', function() {
            skillsFields.removeChild(newField);
            updateSkillsPreview();
        });
    });
    
    function updateSkillsPreview() {
        previewSkills.innerHTML = '';
        const items = document.querySelectorAll('#skills-fields .section-item');
        
        items.forEach(item => {
            const category = item.querySelector('.skill-category').value;
            const skills = item.querySelector('.skills').value;
            
            if (category || skills) {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                    <p><strong>${category}</strong>: ${skills}</p>
                `;
                previewSkills.appendChild(div);
            }
        });
    }
    
    // Certifications Section
    const addCertBtn = document.getElementById('add-certification');
    const certFields = document.getElementById('certification-fields');
    const previewCerts = document.getElementById('preview-certifications');
    
    addCertBtn.addEventListener('click', function() {
        const newField = document.createElement('div');
        newField.className = 'section-item';
        newField.innerHTML = `
            <input type="text" placeholder="Certification Name" class="cert-name">
            <input type="text" placeholder="Issuing Organization" class="cert-org">
            <button class="remove-btn">Remove</button>
        `;
        certFields.appendChild(newField);
        
        newField.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateCertPreview);
        });
        
        newField.querySelector('.remove-btn').addEventListener('click', function() {
            certFields.removeChild(newField);
            updateCertPreview();
        });
    });
    
    function updateCertPreview() {
        previewCerts.innerHTML = '';
        const items = document.querySelectorAll('#certification-fields .section-item');
        
        items.forEach(item => {
            const name = item.querySelector('.cert-name').value;
            const org = item.querySelector('.cert-org').value;
            
            if (name || org) {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${name}</strong> — ${org}`;
                previewCerts.appendChild(li);
            }
        });
    }
    
    // Experience Section
    const addExpBtn = document.getElementById('add-experience');
    const expFields = document.getElementById('experience-fields');
    const previewExp = document.getElementById('preview-experience');
    
    addExpBtn.addEventListener('click', function() {
        const newField = document.createElement('div');
        newField.className = 'section-item';
        newField.innerHTML = `
            <input type="text" placeholder="Job Title" class="job-title">
            <input type="text" placeholder="Company" class="company">
            <input type="text" placeholder="Duration" class="duration">
            <textarea placeholder="Description (one per line)" class="description"></textarea>
            <button class="remove-btn">Remove</button>
        `;
        expFields.appendChild(newField);
        
        newField.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', updateExpPreview);
        });
        
        newField.querySelector('.remove-btn').addEventListener('click', function() {
            expFields.removeChild(newField);
            updateExpPreview();
        });
    });
    
    function updateExpPreview() {
        previewExp.innerHTML = '';
        const items = document.querySelectorAll('#experience-fields .section-item');
        
        items.forEach(item => {
            const title = item.querySelector('.job-title').value;
            const company = item.querySelector('.company').value;
            const duration = item.querySelector('.duration').value;
            const desc = item.querySelector('.description').value;
            
            if (title || company || duration || desc) {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                    <p><strong>${title}</strong> at ${company} (${duration})</p>
                    <ul>
                        ${desc.split('\n').filter(line => line.trim()).map(line => `<li>${line}</li>`).join('')}
                    </ul>
                `;
                previewExp.appendChild(div);
            }
        });
    }
    
    // Projects Section
    const addProjectBtn = document.getElementById('add-project');
    const projectFields = document.getElementById('project-fields');
    const previewProjects = document.getElementById('preview-projects');
    
    addProjectBtn.addEventListener('click', function() {
        const newField = document.createElement('div');
        newField.className = 'section-item';
        newField.innerHTML = `
            <input type="text" placeholder="Project Name" class="project-name">
            <textarea placeholder="Project Description" class="project-desc"></textarea>
            <button class="remove-btn">Remove</button>
        `;
        projectFields.appendChild(newField);
        
        newField.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', updateProjectPreview);
        });
        
        newField.querySelector('.remove-btn').addEventListener('click', function() {
            projectFields.removeChild(newField);
            updateProjectPreview();
        });
    });
    
    function updateProjectPreview() {
        previewProjects.innerHTML = '';
        const items = document.querySelectorAll('#project-fields .section-item');
        
        items.forEach(item => {
            const name = item.querySelector('.project-name').value;
            const desc = item.querySelector('.project-desc').value;
            
            if (name || desc) {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                    <p><strong>${name}</strong></p>
                    <p>${desc}</p>
                `;
                previewProjects.appendChild(div);
            }
        });
    }
    
    // PDF Generation
    const generateBtn = document.getElementById('generate-resume');
    
    generateBtn.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');
        
        html2canvas(document.getElementById('resume-preview'), {
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = doc.internal.pageSize.getWidth() - 40;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            doc.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
            doc.save('resume.pdf');
        });
    });
    
    // Initialize with one empty field for each section
    addEducationBtn.click();
    addSkillBtn.click();
    addCertBtn.click();
    addExpBtn.click();
    addProjectBtn.click();
});