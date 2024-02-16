from numpy import sqrt
from sympy.plotting import *    
from sympy import *

#ax^2 +bx +c = 0

def raices(a,b,c):
    x = Symbol('x')
    D = (sqrt(b*b - 4*a*c))
    x1 = (-b + D)/(2*a)
    x2 = (-b - D)/(2*a)
    
    print('la primer raiz es: ' ,x1)
    print('la segunda raiz es: ', x2)
    plot(a*x**2 +b*x +c)

if __name__ == '__main__':
    while True:
        print('Bienvenido a la Calculadora de Funciones')
        a = input('Ingresa el primer valor: ')
        b = input('Ingresa el segundo valor: ')
        c = input('Ingresa el tercer valor: ')
        (raices(float(a),float(b),float(c)))

        graficado = input('Te gustaria graficar otra recta y/n: ')
        if graficado == 'n':
            print('Pos si wey')
            break