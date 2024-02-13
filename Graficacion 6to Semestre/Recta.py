from sympy import *

#y = m*x +b

def recta(m,b):
    x=Symbol('x')
    plot(m*x+b)

if __name__ == "__main__":
    while True:
        print('Bienvenido a la Graficadora de Rectas')
        m = input('Ingresa la pendiente de la recta: ')
        b = input('Ingresa el Valor dodne la recta cruza el eje: ')
        recta(float(m),float(b))

        graficado = input('Te gustaria graficar otra recta y/n: ')
        if graficado == 'n':
            print('Pos si wey')
            break