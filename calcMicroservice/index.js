import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

let numbers = [];
const windowSize = 10;


app.get('/numbers/:numberType', async (req, res) => {
    const { numberType } = req.params;
    const validTypes = ['p', 'f', 'e', 'r'];
    // validate numberType
    if (!validTypes.includes(numberType)) {
      return res.status(400).json({ error: 'Invalid number type' });
    }
  
    const startTime = Date.now(); // check for 500ms
  
    try {
        // fetch form test server
        const res = await fetch(`https://test-server.com/numbers/${numberType}`);
        const data = await res.json();
        // filter duplicate numbers 
        const newNumbers = data.filter(num => !numbers.includes(num));
  
        numbers = [...numbers, ...newNumbers].slice(-windowSize);
        //average of elements in array
        const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        const windowPrevState = [...numbers]; // store previous state of window
        //response object
        const response = {
            numbers: newNumbers,
            windowPrevState,
            windowCurrState: numbers,
            avg,
        };
        // check for exceeding response time
        const endTime = Date.now();
        const responseTime = endTime - startTime;
  
        if (responseTime > 500) {
            console.log('Response took longer than 500ms');
        }
        // sending response
        res.json(response);
    } catch (error) {
        // error logging herex`x`
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
  });

app.listen(9876, () => {
    console.log("Server live on port 9876");
});