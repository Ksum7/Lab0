const N = 1000;

function trapezoidalRule(func, a, b, n) {
    const h = (b - a) / n;
    let sum = (func(a) + func(b)) / 2;

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += func(x);
    }

    return sum * h;
}

function f4(x) {
    return x * x - x + 1;
}

function calculateIntegration() {
    const a = parseFloat(prompt("Введите нижний предел интегрирования (a):"));
    const b = parseFloat(prompt("Введите верхний предел интегрирования (b):"));

    if (isNaN(a) || isNaN(b)) {
        alert("Пожалуйста, введите корректные значения.");
        return;
    }
    const result = trapezoidalRule(f4, a, b, N);

    document.getElementById("result").textContent = `Результат интегрирования: ${result}`;
}