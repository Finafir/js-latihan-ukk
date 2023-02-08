const persegiForm = document.getElementById('persegiForm');
const panjang = document.getElementById('panjang');
const lebar = document.getElementById('lebar');
const tampil = document.getElementById('tampilContainer');

const hasilPersegi = JSON.parse(localStorage.getItem('persegi')) || [];

const addPersegi = (panjang, lebar, hasil) => {
  hasilPersegi.push({
    panjang,
    lebar,
    hasil,
  });
  localStorage.setItem('persegi', JSON.stringify(hasilPersegi));

  return { panjang, lebar, hasil };
};

const buatPersegi = ({ panjang, lebar, hasil }) => {
  const divPersegi = document.createElement('div');
  const panjang1 = document.createElement('p');
  const lebar1 = document.createElement('p');
  const hasil1 = document.createElement('h2');
  const hr = document.createElement('hr');

  panjang1.innerHTML = 'panjang : ' + panjang;
  lebar1.innerHTML = 'lebar : ' + lebar;
  hasil1.innerHTML = 'Luas Persegi : ' + hasil;

  divPersegi.append(panjang1, lebar1, hasil1, hr);
  tampil.appendChild(divPersegi);
};

hasilPersegi.forEach(buatPersegi);

persegiForm.onsubmit = (e) => {
  e.preventDefault();

  const vPanjang = panjang.value;
  const vLebar = lebar.value;
  const Luas = vPanjang * vLebar;

  const PersegiBaru = addPersegi(vPanjang, vLebar, Luas);

  buatPersegi(PersegiBaru);
  panjang.value = '';
  lebar.value = '';
};
