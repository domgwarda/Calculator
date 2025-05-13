import { setupCounter } from "./counter.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#calculator")!.innerHTML = `
    <input type="text" id="display" class="display" disabled>
    <div class="buttons">
        <button class="button_number" onclick="appendNumber('1')">1</button>
        <button class="button_number" onclick="appendNumber('2')">2</button>
        <button class="button_number" onclick="appendNumber('3')">3</button>
        <button class="button_operator" onclick="appendOperation('+')">+</button>

        <button class="button_number" onclick="appendNumber('4')">4</button>
        <button class="button_number" onclick="appendNumber('5')">5</button>
        <button class="button_number" onclick="appendNumber('6')">6</button>
        <button class="button_operator" onclick="appendOperation('-')">-</button>

        <button class="button_number" onclick="appendNumber('7')">7</button>
        <button class="button_number" onclick="appendNumber('8')">8</button>
        <button class="button_number" onclick="appendNumber('9')">9</button>
        <button class="button" onclick="clearDisplay()">Clear</button>

        <button class="button_number" onclick="appendNumber('0')">0</button>
        <button class="button_operator" onclick="appendOperation('*')">*</button>
        <button class="button_operator" onclick="appendOperation('/')">/</button>
        <button class="button" onclick="calculate()">=</button>
    </div>
`;

setupCounter(
  document.querySelector<HTMLButtonElement>("#counter")!,
);