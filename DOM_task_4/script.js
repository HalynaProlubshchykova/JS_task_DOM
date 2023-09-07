// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const fio = document.querySelector('input[type="text"]');
const phone = document.querySelector('input[type="phone"]');
const birthday = document.querySelector('input[type="date"]');
const email = document.querySelector('input[type="email"]');
const btn = document.querySelector('input[type="submit"]');
const outBlock = document.querySelector('div[class="out"]');

btn.addEventListener("click", () => {
  outBlock.innerHTML = `<div>${fio.value}<br>
                        ${phone.value}<br>
                        ${birthday.value}<br>
                        ${email.value}</div>`;
});
