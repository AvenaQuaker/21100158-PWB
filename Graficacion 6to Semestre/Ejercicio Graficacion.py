from sympy.plotting import *
from sympy import Symbol
x = Symbol('x')
plot(x**2)
plot(x**2)
plot(x**2,(x,-3,3))
plot1 = plot(x**2,(x,-3,3))
plot1[0].line_color = 'r'
plot1.show()
f1 = 3*x + 2
f2 = x**3

plot(f1,f2)
plot((f1,(x,-5,0)),(f2,(x,0,5)))

