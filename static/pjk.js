function runCommand() {
    fetch('/execute')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to execute command');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('Command executed successfully');
            } else {
                throw new Error(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to execute command');
        });
}
