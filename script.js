TrackJS.track('Testing TrackJS!');

let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  try {
      if(operator == '/' && secondNum == '0') { throw new DivideByZeroError();}
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
      console.error("You have attempted to divide by zero!", error);
  }
});

//custom error class
class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZeroError";
  }
}

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
errorBtns[0].addEventListener('click', function() { //log
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    console.log("values", firstNum, operator, secondNum);
});
errorBtns[1].addEventListener('click', function() { //error
    console.error('There seems to be an issue. Did you try turning it off and on again?');
});
errorBtns[2].addEventListener('click', function() { //dir
    console.dir(document.body);
});
errorBtns[3].addEventListener('click', function() { //dirxml
    console.dirxml(document);
});
errorBtns[4].addEventListener('click', function() { //begin grouping
    console.log("Begin grouping");
    console.group("Console Group");
});
errorBtns[5].addEventListener('click', function() { //end grouping
    console.log("End grouping");
    console.groupEnd("Console Group");
});
errorBtns[6].addEventListener('click', function() { //table
    let table = [
        {
            name: "George Washington",
            party: "Independent",
            years: "1789-1797"
        },
        {
            name: "John Adams",
            party: "Federalist",
            years: "1797-1801"
        },
        {
            name: "Thomas Jefferson",
            party: "Democratic-Republican",
            years: "1801-1809"
        },
        {
            name: "James Madison",
            party: "Democratic-Republican",
            years: "1809-1817"
        }
    ];
    console.table(table);
});
errorBtns[7].addEventListener('click', function() { //start timer
    console.log("Timer start");
    console.time("timer1");
});
errorBtns[8].addEventListener('click', function() { //end timer
    console.log("Timer end");
    console.timeEnd("timer1");
});
errorBtns[9].addEventListener('click', function() { //trace
    const one = () => { two(); };
    const two = () => { three(); };
    const three = () => { console.trace(); };
    one();
});
errorBtns[10].addEventListener('click', function() { //global error
    let thisValueDoesNotExist = document.querySelector("#error-btns > p").value;
});
