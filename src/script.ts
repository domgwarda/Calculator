let mem:string = ""

export function appendNumber(n: string) {
    mem += n;
    document.getElementById("display")!.innerHTML = `<a>${mem}</a>`;
}

export function appendOperation(o: string) {
  mem += o;
  document.getElementById("display")!.innerHTML = `<a>${mem}</a>`;
}


(window as any).appendNumber = appendNumber;
(window as any).appendOperation = appendOperation;