This repo is going to be used for having a history of what a I have studied/practiced in the day.

## History

### 25/Fev

### Decide revisar alguns conceitos de estados de processos:
- O que é um processo 
    - É um programa que está em execução.
- PCB (Process Control Block)
- Estados de um processo:
    - Created
    - Waiting
    - Ready
    - Running
    - Terminated
- Swapping

### 26/Fev

* Saindo um pouco dos estudos de linguagens de programação, resolvi embarcar no mundo do terminal usando linux para testar:
- Inicialmente resolvi relembrar alguns comandos: 
    - lsb_release -dc //exibe qual a versão do linux
    - touch nomeArquivo //cria um arquivo vazio
    - pwd //PrintWorkingDirectory - exibe o diretório atual
    - cat nomeArquivo //concat - concatena arquivo/exibe-os no terminal
    - cp nomeArquivo nomeArqCopia //copia um arquivo
    - rm nomeArquivo //remove um arquivo, pode ser passado algumas opções tal como: -f remove sem pedir confirmação e -r remove arquivos e subdiretorios
- Retornando com estudos de novos comandos pro terminal, encontrei:
    - mv origem destino //move (ou renomeia) arquivos, vai depender do que foi passado, um nome de arquivo ou diretorio
    - file nomeArquivo //exibe informações do arquivo
    - mkdir nomeDiretorio //cria um diretorio
    - mrdir nomeDiretorio //remove um diretorio
    - date //exibe a data e hora atual
    - df //exibe as partições usadas
    - shutdown -h now //desliga o computador, o now pode ser substituido por um valor (em minutos)
    - shutdown -r now //reinicia o computador, now pode ser substituido por um valor (em minutos)
    - uptime //mostra a quantidade de horas que o computador está ligado

### 27/Fev

- Ainda nos comandos linux, sobre user&group management:
    - adduser //adiciona um usuário ao sistema, passando algumas informações
    - useradd //assim como o adduser, também adiciona um usuario ao sistema, entretanto, nao pede informação adicionais, somente o nome do usuario
    - passwd // para alterar a senha do usuario ativo. Se passar 'passwd nomeUsuario', altera a senha do usuario selecionado
    - usermod nomeUsuario //altera informaçoes do usuario, baseado na opçao passada
    - userdel nomeUsuario //remove o usuario do sistema
    - su - nomeUsuario //permite alterar o usuario ativo no sistema

### 02/Mar

- Alguns novos comandos para gerenciamento de grupos no linux:
    - groupadd nomeGrupo //cria um novo grupo
    - groups nomeUsuario //exibe os grupos do usuario
    - groupdel nomeGrupo //deleta o grupo de usuario
    - gpasswd nomeUsuario nomeGrupo // usado para administrar o arquivo /etc/group. Opções de comando:
        -a: adicionar usuario
        -d: excluir usuario
        -r: remove a senha do grupo

### 03/Mar

- Vim (um editor no terminal)
    - i //estando no 'normal-mode' habilita o 'insert-mode';
    - esc //sai do 'insert-mode';
    - x //no 'normal-mode' deleta caracteres
    - u //no 'normal-mode' desfaz (tipo um ctrl+z);
    - :w //no 'normal-mode' salva o arquivo mas não fecha o editor;
    - :wq ou :x //no 'normal-mode' salva o arquivo e fecha o editor;
    - :q! //no 'normal-mode' fecha o terminal e não salva as alterações não salvas;
    - h j k l //no 'normal-mode' mode o cursor no 'normal-mode' - h(esquerda), j(baixo), k(cima), l(direita);

### 04/Mar

- Mais comandos no linux
    - ls -l //lista os arquivos e diretorios no diretorio atual, a opção -l é usada para uma melhor leitura
    - ls -a //lista todos os arquivos incluindo os escondidos
    - ls -lh //lista os tamanhos em um formato de leitura humana
    - tree /gera uma representação dos arquivos
    - whois nomeDominio/ip //lista de registros de contem detalhes sobre a propriedade de dominio e os proprietarios
    - lsblk //exibe informações sobre as partições do hd e de outros dispositivos
    - fdisk -l //permite gerenciar partiçoes, a opção -l lista as partiçoes existentes no disco atual
    - 