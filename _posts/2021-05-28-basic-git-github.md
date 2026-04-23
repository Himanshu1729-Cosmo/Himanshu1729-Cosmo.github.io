---
layout: post
title: Manual básico de Git/GitHub
subtitle: ABC indispensable.
gh-repo: igomezv
gh-badge: [follow]
tags: [Git, Español]
comments: true
---

 --------------------------
### Contenido:
  
 - [Introducción](#introducción)
	 - [commit](#commit)
	 - [push](#push)
 - [Usar el repositorio de un tercero](#usar-el-repositorio-de-un-tercero) 
	 - [fork](#fork)
 - [Comparar entre versiones o regresar  a una versión anterior](#comparar-y-regresar)
 - [Entre las ramas](#entre-las-ramas)
 
 --------------------------
 

## Introducción
Git es un controlador de cambios de código abierto (open source) y GitHub una plataforma de desarrollo colaborativo basada en Git. 

Un controlador de cambios te permite ir reportando cada modificación en tu código, así como tener diferentes versiones de manera simultanea y la posibilidad de regresar a una versión anterior por lejana que sea. Esto hace que Git sea muy interesante y útil. Existen varias plataformas de desarrollo que utilizan Git como base: GitLab, SourceForge, GitHub y Bitbucket, entre otras. 

La intención de esta entrada es describir algunos comandos de Git (para GitHub, en particular) que en mi caso personal considero muy útiles y que no encontré tan rápido en la red la primera vez que intenté usarlos. Este escrito es para mi uso personal, pero si a alguien le es de utilidad, pues bienvenid@.

Se asumirán situaciones en las que ya se tiene instalado Git, cuenta y repositorio de GitHub. Para instalar Git desde cero, navegar en la plataforma web de GitHub y otras cuestiones hay mucha información en Internet, entre otras fuentes:

- Guía de Git: [https://rogerdudler.github.io/git-guide/index.es.html](https://rogerdudler.github.io/git-guide/index.es.html)
- [Plataforma web de GitHub](https://guides.github.com/activities/hello-world/)

### commit

Un <code>commit</code> es una confirmación de los cambios realizados en el código y Git mediante esa instrucción le asigna un identificador al bloque de cambios involucrados. Además, uno puede asignar un mensaje o descripción para recordar en qué consistieron esos cambios. En la práctica, la forma que me ha resultado más fácil es: 

```bash
git commit -m "descripción del cambio" script_mod1.py script_mod2.py
```
La bandera  <code>-m</code> le dice a Git que le pasaremos, dentro de la misma instrucción, un mensaje (o descripción) del cambio. Si no se indican los archivos modificados, el  <code>commit</code> incluirá todos los cambios realizados en el repositorio, se puede indicar así:

```bash
git commit -am "descripción del cambio" 
```

Todas las opciones de <code>commit</code>: [git-commit docs](https://git-scm.com/docs/git-commit)

### push
Para "empujar"  los cambios indicados en un <code>commit</code> al repositorio remoto se utiliza el comando <code>push</code>.

```bash
git push
```
En la forma que más suelo usar este comando es así, a secas. De esta manera, Git busca en su configuración dónde deben enviarse los nuevos cambios, y si no encuentra configuración alguna, lo hace en <code>origin</code>. 

Documentación completa de este comando: 
[git-push docs](https://git-scm.com/docs/git-push)

------------------------------------------
## Usar el repositorio de un tercero

**Descripción de la situación:**
Nos interesa mucho el repositorio de GitHub de un tercero y queremos utilizarlo para nuestros fines personales, ¿qué opciones hay?
 
1.  Descargar el comprimido desde su página web. Esto solo permite acceder al código fuente.
2. Clonarlo vía <code>git clone https://github.com/otro_usuario/repo_interesante.git</code>. Esto permite ver todo el histórico de Git y acceder a versiones previas. De esta manera, también se puede mantener actualizada nuestra copia local mediante <code>git pull</code>.
3.  Mediante un <code>fork</code>. Con esta opción creamos una copia en nuestro propia cuenta de GitHub. Me parece la opción más completa si uno planea trabajar en el código y hacer modificaciones.

Nos centraremos en la opción 3.

###  fork
 Un <code>fork</code> se puede hacer de manera muy fácil en la plataforma web de GitHub desde la página del repositorio original. Después, podemos clonar nuestra copia a nuestra computadora para trabajar en el código.  Sin embargo, a diferencia de la opción 2, no se puede hacer directamente  <code>git pull</code> para actualizar nuestra copia local con los cambios hechos en el repositorio original de un tercero, pues nuestra copia local solo está conectada a nuestra copia remota, para enlazar nuestra copia *forkeada* al repositorio original, es necesario hacer lo siguiente:
 ```bash
git remote add upstream git://github.com/otro_usuario/repo_original.git
git fetch upstream
```
Una vez hecho lo anterior, se puede actualizar nuestra copia local desde el repositorio original mediante:
```
git pull upstream master
```

--------------------------------
## Comparar y regresar

Para comparar dos versiones del código, o bien, para regresar a una versión anterior. Es útil ver el historial de commits:
```
git log
```
esto despliega el identificador de cada <code>commit</code>,  su autor y la fecha. A partir de ahí uno puede usar esos identificadores para comparar dos versiones:
```
git diff identificador_commit_i identificador_commit_j
```
 o bien, para regresar a una versión anterior:
 
```
git reset --hard identificador_commit_i 
```
donde la bandera <code>--hard</code> indica que se resetearán los archivos del índice y del directorio de trabajo. También está la opción <code>--soft</code> que no resetea estos archivos. Para más detalles de este comando, se recomienda visitar [aquí](https://devconnected.com/how-to-git-reset-to-head/).


--------------------------------
## Entre las ramas

Las ramas (<code>branch</code>) son muy útiles para mantener ordenado el código y hacer modificaciones bajo propósitos específicos. Por defecto, la rama existente es <code>master</code>. Para ver las ramas existentes:
```
git branch
```
Para crear una nueva rama:
```
git checkout -b [nombre_de_la_nueva_rama]
```
y subirla al remoto:
```
git push origin nombre_de_la_nueva_rama
```
Para cambiar de rama:
```
git checkout nombre_rama
```
Borrar rama local:
```
git branch -d nombre_rama
```
después, para borrar la rama en remoto:
```
$ git push origin :nombre_rama
```
Similar que con los archivos, para comparar dos ramas:
```
git diff nombre_rama_1..nombre_rama_2
```


