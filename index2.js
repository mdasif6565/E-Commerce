  
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
          event.preventDefault();

          // Remove active class from all tabs and contents
          tabs.forEach(t => t.classList.remove('text-blue-600', 'border-blue-600'));
          contents.forEach(c => c.classList.remove('active'));

          // Add active class to the clicked tab and corresponding content
          this.classList.add('text-blue-600', 'border-blue-600');
          const tabId = this.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });

