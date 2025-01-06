Features
Serves a simple HTML form for user input.
Handles HTTP POST requests to capture form data.
Writes user-submitted data to a file (output.txt) for persistence.
Includes basic routing for different URL paths.
Implements redirection after form submission.


How to Use
Clone the Repository

git clone https://github.com/Sauravkumarv/node.js_server.git
cd node.js_server
Install Node.js
Ensure that Node.js is installed on your system.

Run the Server

node server.js
Access the Application
Open your browser and navigate to:
http://localhost:5003

Submit Your Details

Enter your name and select your gender in the form.
Submit the form to see the captured data logged in the console and saved in the output.txt file.
File Structure
plaintext
Copy code
├── server.js       # Main server script
├── output.txt      # File to store submitted form data (created after submission)



Example Output in output.txt
username=JohnDoe&gender=male

Contributions
Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

