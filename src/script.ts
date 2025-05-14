let mem: string = "";

function render() {
  document.getElementById("display")!.textContent = mem;


}

export function addOperation(n: string) {
    mem += n;
    render();
    console.log(mem);
}

export function clearDisplay() {
  mem = "";
  render();
}

export function clearLast() {
  mem = mem.substring(0, mem.length-1);
  render();
}

export function calculate() {
  try {
    let result2: string = (eval(mem)).toString();
    document.getElementById("display")!.innerHTML = `<a>${result2}</a>`;
    mem = ""; }
  catch {
    document.getElementById("display")!.innerHTML = "<a>Error</a>";
  }
}

(window as any).addOperation = addOperation;
(window as any).clearDisplay = clearDisplay;
(window as any).clearLast = clearLast;
(window as any).calculate = calculate;