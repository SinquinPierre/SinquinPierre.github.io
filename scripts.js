document.addEventListener('DOMContentLoaded', function () {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    const softwareSkillsData = {
        labels: ['Laravel', 'Django', 'HTML', 'CSS', 'PHP', 'SQL', 'Cypher', 'TypeScript', 'JavaScript', 'SPAD', 'SAS', 'Medidata', 'RStudio', 'Business Objects', 'Java', 'Python', 'C#', 'Snakemake', 'Nextflow', 'Bash'],
        datasets: [{
            label: 'Proficiency Level',
            data: [7, 8, 9, 9, 7, 8, 7, 8, 9, 6, 7, 7, 8, 6, 8, 9, 7, 6, 7, 8],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('softwareSkillsChart').getContext('2d');
    const softwareSkillsChart = new Chart(ctx, {
        type: 'bar',
        data: softwareSkillsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });

    window.updateChart = function (skill) {
        let filteredData = [];
        let title = '';
        switch (skill) {
            case 'Web and software development':
                filteredData = ['Laravel', 'Django', 'HTML', 'CSS', 'PHP', 'SQL', 'Cypher', 'TypeScript', 'JavaScript'];
                title = 'Web and Software Development';
                break;
            case 'Statistics and computer science applied to health':
                filteredData = ['SPAD', 'SAS', 'Medidata', 'RStudio', 'Business Objects'];
                title = 'Statistics and Computer Science Applied to Health';
                break;
            case 'Bioinformatics':
                filteredData = ['Java', 'Python', 'C#', 'Snakemake', 'Nextflow', 'Bash'];
                title = 'Bioinformatics';
                break;
        }

        const filteredIndices = filteredData.map(skill => softwareSkillsData.labels.indexOf(skill));
        const newLabels = filteredData;
        const newData = filteredIndices.map(index => softwareSkillsData.datasets[0].data[index]);

        softwareSkillsChart.data.labels = newLabels;
        softwareSkillsChart.data.datasets[0].data = newData;
        softwareSkillsChart.data.datasets[0].label = `${title} Proficiency Level`;
        softwareSkillsChart.update();
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}
