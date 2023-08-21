# Trybers and Dragons 🐉
<p align="center">
  <img src="https://user-images.githubusercontent.com/104791582/215762786-64898841-d6b0-4ae2-96e4-bd4c49aa48dd.jpg" alt="trybersAndDragons" width="60%">
</p>

## Sobre:
Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da Trybe.

Neste projeto, foi desenvolvida uma estrutura de jogo no estilo RPG.

Para seu desenvolvimento, foram utilizados os princípios de Programação Orientada a Objeto (POO) e os princípios de arquitetura SOLID.

Os objetivos principais do projeto eram:
- Aplicar e praticar os conceitos de SOLID
- Aplicar e praticar os conceitos de POO

O projeto foi desenvolvido utilizando TypeScript.

## Executando a Aplicação:

Para executar a aplicação, siga os passos abaixo:

1. Clone este repositório:
```
git clone git@github.com:claytongom/trybers-and-dragons-project.git
```
2. Navegue até a raiz do projeto:
```
cd players-and-dragons/
```
3. Instale as dependências do projeto:
```
npm install
```

<details>
  <summary><strong>Rodando a aplicação com Docker</strong></summary>
</br>
  
<strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o Docker instalado na sua máquina.

</br>

Na raíz do projeto, suba os containers players_and_dragons utilizando o docker-compose.
```
docker-compose up-d
```

Abra o terminal do container players_and_dragons.
```
docker exec -it players_and_dragons bash
```

Caso não tenha instalado anteriormente, uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.
```
npm install
```

Inicie a aplicação com ts-node usando o comando abaixo.
```
npm start
```
Para iniciar a aplicação com o nodemon, use o script abaixo.
```
npm run dev
```
</details>

# Habilidades Desenvolvidas

Neste projeto, foram desenvolvidas as seguintes habilidades:

- Criar classes, atributos e métodos
- Criar interfaces e tipos
<details>
<summary>Aplicar conceitos de Programação Orientada a Objetos (POO)</summary>
<p>

Neste projeto, foram aplicados os seguintes conceitos de Programação Orientada a Objetos:

- Abstração
- Encapsulamento
- Herança
- Composição
- Polimorfismo

</p>
</details>

<details>
<summary>Aplicar os princípios SOLID</summary>
<p>

Neste projeto, foram aplicados os seguintes princípios SOLID:

- Responsabilidade Única
- Aberto-Fechado
- Substituição de Liskov
- Segregação da Interface
- Inversão da Dependência

</p>
</details>

## Principais Tecnologias

As seguintes ferramentas foram utilizadas neste projeto:

- [TypeScript](https://www.typescriptlang.org/docs/)
- [POO (Programação Orientada a Objetos)](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos)
- [SOLID](https://en.wikipedia.org/wiki/SOLID)


## Desenvolvido por

Este projeto foi desenvolvido por [Clayton Gomes](https://www.linkedin.com/in/claytongomesdev/).
