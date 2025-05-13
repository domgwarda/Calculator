let mem: string = ""

function render() {
  document.getElementById("display")!.innerHTML = `<a>${mem}</a>`;
}

export function addOperation(n: string) {
    mem += n;
    render();
}

export function clearDisplay() {
  mem = '';
  render();
}

export function calculate() {
  try {
    let result2: string = (eval(mem)).toString();
    document.getElementById("display")!.innerHTML = `<a>${result2}</a>`;
    mem = ''; }
  catch (e) {
    document.getElementById("display")!.innerHTML = `<a>Error</a>`;
  }
}



(window as any).addOperation = addOperation;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;