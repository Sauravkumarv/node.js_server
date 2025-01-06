const fs = require('fs');
const http=require('http')

const server=http.createServer( (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter your details :</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name" /><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<br><input value="submit" type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk); // Collect data chunks
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // Combine chunks into a string
      console.log(parsedBody);

      // Write data to a file
      fs.writeFileSync('output.txt', parsedBody);

      // Redirect the user back to "/"
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return; // Ensure no further response handling in this block
  }

  // Fallback response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Share and Subscribe</h1></body>');
  res.write('</html>');

  return res.end();
});


const port=5003;

server.listen(port,()=>{
  console.log(`Your server is running on http://localhost:${port}`)
})

