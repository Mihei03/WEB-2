function calculate() {
    var depositType = document.getElementById('depositType').value;
    var depositTerm = document.getElementById('depositTerm').value;
    var depositAmount = parseFloat(document.getElementById('depositAmount').value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Пожалуйста, введите корректную сумму вклада.');
        return;
    }

    var interestRates = {
        пополняемый: {
            '6 месяцев': 0.20,
            '1 год': 0.22,
            '1,5 года': 0.15,
            '2 года': 0.10
        },
        срочный: {
            '3 месяца': 0.20,
            '6 месяцев': 0.22,
            '9 месяцев': 0.23,
            '1 год': 0.24,
            '1,5 года': 0.18,
            '2 года': 0.15
        }
    };

    var interestRate = interestRates[depositType][depositTerm];
    var finalAmount = depositAmount * (1 + interestRate);

    var resultMessage = `Вы выбрали ${depositType} вклад на срок ${depositTerm} со ставкой ${interestRate * 100}%. 
    Ваша сумма вклада составляет ${depositAmount}. Через указанный срок вы получите ${finalAmount.toFixed(2)}.`;

    if (window.innerWidth < 768) {
        document.getElementById('result-mobile').innerText = resultMessage;
    } else {
        document.getElementById('result-pc').innerText = resultMessage;
    }
}

function populateDepositTerm() {
    var depositType = document.getElementById('depositType').value;
    var depositTermSelect = document.getElementById('depositTerm');
    depositTermSelect.innerHTML = '';

    var terms = {
        пополняемый: ['6 месяцев', '1 год', '1,5 года', '2 года'],
        срочный: ['3 месяца', '6 месяцев', '9 месяцев', '1 год', '1,5 года', '2 года']
    };

    terms[depositType].forEach(function(term) {
        var option = document.createElement('option');
        option.value = term;
        option.textContent = term;
        depositTermSelect.appendChild(option);
    });
}

// Вызов функции populateDepositTerm() при загрузке страницы
window.onload = populateDepositTerm;