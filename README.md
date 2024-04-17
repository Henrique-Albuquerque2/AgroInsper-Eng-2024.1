# AgroInsper-Eng-2024.1

UMA VEZ:
git checkout -b NOME_DA_BRANCH (cria branch)


ENTRANDO:
git checkout NOME_DA_BRANCH (entra na branch)
git pull origin main (puxa atualizações)

FAZER COM FREQUÊNCIA:
git commit -am "NOME_DO_COMMIT" (commita na sua branch)
git status (checa versão atual)

SAINDO:
git push origin NOME_DA_BRANCH (manda a versão da máquina para o github)
no github: create pull request (solicita fusão da sua versão na main)

--> git log: Exibe um log dos commits recentes, incluindo autor, data e mensagem do commit.
--> git stash:  salvar temporariamente ("estocar") mudanças feitas em sua área de trabalho (working directory) e no index (staged changes) sem fazer um commit dessas mudanças. Isso permite que você limpe a área de trabalho, revertendo-a para o último estado de commit, enquanto guarda as alterações que você não está pronto para commitar em um local seguro. (git stash save "mensagem opcional") 
Se ja achou um lugar seguro e deseja commitar: (git stash pop) --> dps só dar (git -am "...")
