# Projeto:

Este projeto consiste em uma aplicação web que permite que os usuários cadastrem seus treinos, a carga e a quantidade de rounds. A solução busca resolver o problema de fichas de treino poluídas, que podem ser difíceis de entender devido a rasuras ou letras ilegíveis. Além disso, a aplicação também permite que o usuário edite ou delete seus exercícios, facilitando a adaptação dos treinos conforme suas necessidades e limitações.

Uma funcionalidade adicional é um contador de tempo de descanso, que permite que o usuário controle o tempo de pausa entre as séries. Para garantir a segurança dos dados dos usuários, a autenticação é realizada através do Firebase, que permite o acesso exclusivo às séries cadastradas por cada usuário.

Com essa aplicação, o usuário pode organizar seus treinos de forma mais eficiente e personalizada, sem depender de fichas de papel e sem se preocupar com rasuras ou letras ilegíveis. A solução é acessível de qualquer dispositivo com acesso à internet e oferece uma maneira prática e fácil de gerenciar as séries de treino.

## Resumo: 

* Aplicação web para cadastro de treinos, carga e quantidade de rounds;
* Contador de tempo de descanso;
* Autenticação através do Firebase.

## Identificação do problema:

* Fichas de treino poluídas;
* Dificuldade para entender rasuras ou letras ilegíveis.

## Solução:

* Cadastro, edição e remoção de exercícios;
* Organização das séries em A, B ou C;
* Controle personalizado do tempo de descanso entre as séries;
* Acesso exclusivo e seguro através da autenticação com o Firebase. 



## Rodando o projeto:

No terminal, digite: 

```
git clone https://github.com/pvcapuano/my-workout.git
cd my-workout 
yarn install 
yarn dev
```

## Telas:

![image](https://user-images.githubusercontent.com/10540844/234419117-166f229d-6555-4eb3-9ea1-ce596ecdf773.png)
<sub>Login</sub>

![WhatsApp Image 2023-04-25 at 7 39 40 PM](https://user-images.githubusercontent.com/10540844/234419757-d0c2d94d-e3ab-4af2-8cde-1267c651973d.jpeg)

![Captura de tela 2023-04-19 110041](https://user-images.githubusercontent.com/10540844/234122213-cc3fcd92-f621-443e-b574-c928a5643ef3.jpg)
<sub>Trainings</sub>

![WhatsApp Image 2023-04-24 at 6 33 49 PM](https://user-images.githubusercontent.com/10540844/234122655-45418272-0f7c-454b-926b-dcba595243ed.jpeg)

![image](https://user-images.githubusercontent.com/10540844/234421209-98d76a5b-03ae-4636-a745-03539e9743e2.png)
<sub>Stopwatch alert</sub>

![Captura de tela 2023-04-26 121308](https://user-images.githubusercontent.com/10540844/234642929-0715c01d-d99a-4cef-8cc4-de4a24d39815.jpg)
<sub>Firebase Firestore</sub>

![image](https://user-images.githubusercontent.com/10540844/234644386-08640d21-e4c1-4cdb-a1f0-b921f78d9f95.png)
<sub>Context with Redux</sub>

## Projeto em produção:

<p>
 <a href="https://my-workout-kw91.vercel.app/" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

* NextJs
* React Hooks
* Context
* Custom Hooks
* Redux
* Tailwind
* Toastify
* Firebase Firestore
* Firebase Authentication
* Prettier

## Atividades realizadas:

* Utilização do NextJs como framework principal para o desenvolvimento da aplicação web;
* Implementação do Tailwind como biblioteca de estilos para facilitar o desenvolvimento e a estilização dos componentes;
* Utilização do Firebase Firestore como banco de dados para armazenar e gerenciar as séries de treino cadastradas pelos usuários;
* Implementação do Firebase Authentication para garantir a autenticação e segurança dos dados dos usuários;
* Utilização do Prettier para padronização do código e manutenção da sua formatação legível e consistente.
 
