//your JS code here. If required.
  const inputs = document.querySelectorAll('.code');

    inputs[0].focus();

    inputs.forEach((input, index) => {

      // Forward typing
      input.addEventListener('input', (e) => {
        const value = e.target.value;

        // Allow only digits
        if (!/^\d$/.test(value)) {
          e.target.value = '';
          return;
        }

        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Backspace behavior
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '' && index > 0) {
            inputs[index - 1].value = '';
            inputs[index - 1].focus();
          }
        }
      });
    });