import "./script.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#calculator")!.innerHTML = `
    <div id="display" class="display"></div>
    <div class="buttons">
        <button class="button__number" onclick="addOperation('1')">1</button>
        <button class="button__number" onclick="addOperation('2')">2</button>
        <button class="button__number" onclick="addOperation('3')">3</button>
        <button class="button" onclick="clearDisplay()">DEL</button>
        
        <button class="button__number" onclick="addOperation('4')">4</button>
        <button class="button__number" onclick="addOperation('5')">5</button>
        <button class="button__number" onclick="addOperation('6')">6</button>
        <button class="button" onclick="clearLast()">CE</button>

        <button class="button__number" onclick="addOperation('7')">7</button>
        <button class="button__number" onclick="addOperation('8')">8</button>
        <button class="button__number" onclick="addOperation('9')">9</button>
        <button class="button__operator" onclick="addOperation('+')">+</button>


        <button class="button__number" onclick="addOperation('0')">0</button>
        <button class="button" onclick="addOperation('(')">(</button>
        <button class="button" onclick="addOperation(')')">)</button>
        <button class="button__operator" onclick="addOperation('-')">-</button>

        

        <button class="button__operator" onclick="addOperation('*')">*</button>
        <button class="button__operator" onclick="addOperation('/')">/</button>
        <button class="button" onclick="addOperation('.')">.</button>
        <button class="button" onclick="calculate()">=</button>

    </div>
`;
