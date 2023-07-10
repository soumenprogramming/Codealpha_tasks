        function handleFiles(event) {
            var fileInput = document.getElementById('image-input');
            var files = event.target.files || event.dataTransfer.files;
            fileInput.files = files;
        }

        function handleDrop(event) {
            event.preventDefault();
            handleFiles(event);
            document.getElementById('drop-zone').classList.remove('highlight');
        }

        function handleDragOver(event) {
            event.preventDefault();
        }

        function handleDragEnter(event) {
            event.preventDefault();
            document.getElementById('drop-zone').classList.add('highlight');
        }

        function handleDragLeave(event) {
            event.preventDefault();
            document.getElementById('drop-zone').classList.remove('highlight');
        }

        function convertTo(format) {
            var canvas = document.getElementById('canvas');
            var imagePreview = document.getElementById('image-preview');
            var fileInput = document.getElementById('image-input');
            var downloadLink = document.getElementById('download-link');
            var file = fileInput.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;

                image.onload = function () {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0);

                    var dataUrl;
                    var fileName;
                    
                    if (format === 'jpeg') {
                        dataUrl = canvas.toDataURL('image/jpeg');
                        fileName = 'converted_image.jpg';
                    } else if (format === 'png') {
                        dataUrl = canvas.toDataURL('image/png');
                        fileName = 'converted_image.png';
                    }
                    
                    imagePreview.src = dataUrl;

                    downloadLink.href = dataUrl;
                    downloadLink.download = fileName;
                    downloadLink.style.display = 'block';
                    document.getElementsByClassName('download-button')[0].style.display = 'block';
                };
            };

            reader.readAsDataURL(file);
        }