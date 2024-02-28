import numpy as np
import matplotlib.pyplot as plt

R = 1
t = np.linspace(10,100*np.pi,1000)

x = np.sin(t) - np.sin(2.3*t)
y = np.cos(t)


plt.axis('equal')
plt.grid()
plt.plot(x,y)
plt.show()