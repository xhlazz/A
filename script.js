document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            const arrow = this.querySelector('.arrow');

            if (targetSection.classList.contains('show')) {
                targetSection.classList.remove('show');
                arrow.classList.remove('arrow-up');
            } else {
                targetSection.classList.add('show');
                arrow.classList.add('arrow-up');
            }
        });
    });

    const birthDate = new Date('2010-12-08');
    const ageElement = document.getElementById('age');
    const birthdayInfoElement = document.getElementById('birthday-info');

    const age = calculateAge(birthDate);
    const daysUntilBirthday = calculateDaysUntilBirthday(birthDate);

    ageElement.textContent = `${age} years old`;

    if (daysUntilBirthday === 0) {
        birthdayInfoElement.innerHTML = `By the way, my birthday is today! <button onclick="showBirthdayMessageForm()">Happy Birthday!</button>`;
    } else {
        birthdayInfoElement.textContent = `By the way, my birthday is in ${daysUntilBirthday} days.`;
    }
});

function calculateAge(birthDate) {
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1;
    }
    return age;
}

function calculateDaysUntilBirthday(birthDate) {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (
