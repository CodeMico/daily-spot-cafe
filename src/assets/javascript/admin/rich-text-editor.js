document.addEventListener('DOMContentLoaded', function() {
    let quill = null;
    const modalEl = document.getElementById('addProductModal');

    if (modalEl) {
        // We use the 'shown' event because Quill needs the div to be VISIBLE to render
        modalEl.addEventListener('shown.bs.modal', function () {
            const container = document.getElementById('editor-container');
            
            // Only create if it doesn't exist and the container is found
            if (!quill && container) {
                quill = new Quill('#editor-container', {
                    theme: 'snow',
                    placeholder: 'Enter detailed product description...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['clean']
                        ]
                    }
                });
                console.log("Quill initialized successfully!");
            }
        });
    }

    // Sync data before form submit
    const form = document.getElementById('addProductForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const longDescInput = document.getElementById('long_description');
            if (quill && longDescInput) {
                longDescInput.value = quill.root.innerHTML;
            }
        });
    }
});
