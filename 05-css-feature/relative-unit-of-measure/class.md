# EM

- A unidade de medida [em] é sempre baseda no font size do elemento pai
- Ele somente vai herdar do elemento pai, um nível acima.

````css
.box{
  font-size: 20px;
}

.box-interno{
  background-color: pink;
  width: 10em;
  height: 10em;
}
````

<!--  -->

# REM

- É baseado no primeiro elemento da estrutura

````css

html{
  font-size: 5px;
}

body{
  margin: 0;
}

h1{
  font-size: 15rem;
}

.box{
  font-size: 5rem;
}

.box-interno{
  background-color: pink;
  width: 50rem;
  height: 50rem;
}
````

<!--  -->

# %

- Sempre vai ocupar o espaço disponível que ele tem
- Responde ao elemento na qual esta inserida

````css
.box{
  width: 50%;
  background-color: #999;
}

.box-interno{
  width: 50%;
  background-color: #333;
}
````

<!--  -->



# EX

- Baseada no tipo de font que está sendo usada
- Significa que o tamanho da font vai ser do tamanho da letra X da font.

<!--  -->


# CH

- É baseada no tamanho da largura da font
- Ela só funciona em font monospace

<!--  -->


# VH

- Ultiliza  o espaço disponível da tela inteira

<!--  -->

# VW

- Ultiliza a largura disponível da tela inteira

<!--  -->

# INHERIT

- Inherit vai forçar uma herança do elemento pai
- Se o elemento pai tiver 30px  elemento filho também vai ter

````css

````