document.addEventListener('DOMContentLoaded', function() {
    const stories = document.querySelectorAll('.story');
    const storyModal = document.getElementById('storyModal');
    const storyModalImage = document.getElementById('storyModalImage');
    const storyProgressBar = document.getElementById('storyProgressBar');

    stories.forEach(story => {
        story.addEventListener('click', function() {
            const imgSrc = this.querySelector('.story-thumbnail').src;
            storyModal.style.display = 'block';
            storyModalImage.src = imgSrc;
            storyProgressBar.style.width = '0%'; // Reset progress bar
            setTimeout(() => {
                storyProgressBar.style.width = '100%'; // Start progress bar
            }, 10);
            
            // Close the modal after 4 seconds
            setTimeout(() => {
                storyModal.style.display = 'none';
            }, 4000);
        });
    });

    // Close the modal if clicked outside of the image
    storyModal.addEventListener('click', function(e) {
        if (e.target === storyModal) {
            storyModal.style.display = 'none';
        }
    });
});
