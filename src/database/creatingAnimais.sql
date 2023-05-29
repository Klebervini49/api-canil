CREATE TABLE animais (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  cor VARCHAR(50),
  genero VARCHAR(50),
  img VARCHAR(200),
  tipo VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO animais (nome, cor, genero, img, tipo)
VALUES
  ('Pastor-alemão', 'Preto e castanho', 'Macho', 'https://tudosobrecachorros.com.br/wp-content/uploads/pastor-alemao-01.jpg', 'cachorro'),
  ('Labrador-retriever', 'Branco e amarelo', 'Macho', 'https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg', 'cachorro'),
  ('Zwergspitz', 'Branca e Laranja', 'Fêmeas', 'https://www.hunde-info.de/wp-content/uploads/zwergspitz-pomeranian-678x381.jpg', 'cachorro'),
  ('Husky siberiano', 'Preto e branco', 'Macho', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fsiberian-husky-100800827-2000.jpg', 'cachorro'),
  ('Pug', 'Preto', 'Fêmea', 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/71206096_123166475748704_4158513011025248256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEPDF6tNHs1ckyh5_pssUvCmK5UBBzavo6YrlQEHNq-jks5_CDs5tSjbtWzutPgIhz3fwJiANFdm5-kJCBn4PnW&_nc_ohc=wUe-kMLk2j4AX9oSqa_&_nc_ht=scontent.fcgh22-1.fna&oh=00_AfDsBYKr2fLZzSVRMC4RD9572M1DwnOwV8p4UP3A0IZf-A&oe=6499EE05', 'cachorro'),
  ('limpa vidros', 'Verde e branco', 'Macho', 'https://peixes.animais.info/Imagens/limpa-vidros.jpg', 'peixe'),
  ('Tetra Red Laser', 'Vermelho', 'Fêmea', 'https://images.tcdn.com.br/img/img_prod/749804/tetra_red_laser_3_a_4_cm_hemmigramus_coeruleus_raridade_1675_1_d51bc56663b2b836afe90a8fc1280735.jpg', 'peixe'),
  ('Persa', 'Amarelo', 'Macho', 'https://i.pinimg.com/564x/a3/16/01/a3160124b5b8f4e2c8bdfbe1a7cfe366.jpg', 'gato'),
  ('Bengal', 'Branco, Preto e Amarelo', 'Fêmea', 'https://inspirationseek.com/wp-content/uploads/2014/08/Bengal-Cat-Pictures.jpg', 'gato');
