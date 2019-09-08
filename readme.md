Montar a imagem:
> docker build -t netstart/dockernode .
Subir o container:
> docker run -p 3000:3000 netstart/dockernode  
# 'netstart/dockernode' é o nome do projeto
Subir com Nodemon:
docker run -p 3000:3000 -v $(pwd):/usr/app netstart/dockernode
# funciona no linux
