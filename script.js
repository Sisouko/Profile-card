// script.js: interactive behavior for the profile card page

const actionButton = document.getElementById('actionButton');
const bioText = document.getElementById('bio');
const skillsSection = document.getElementById('skillsSection');
let isHidden = false;

actionButton.addEventListener('click', function () {
  isHidden = !isHidden;
  if (isHidden) {
    bioText.textContent = 'Nice click! Skill tags are now hidden so you can focus on the bio.';
    skillsSection.style.display = 'none';
    actionButton.textContent = 'Show skills';
  } else {
    bioText.textContent = 'A curious web learner who loves building clean interfaces, reading sci-fi, and exploring new ideas.';
    skillsSection.style.display = 'flex';
    actionButton.textContent = 'Hide skills';
  }
});
