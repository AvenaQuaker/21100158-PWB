import numpy as np
import matplotlib.pyplot as plt

R = 1
t = np.linspace(0,2*np.pi,1000)

x = np.sin(t) + (1/2)*np.cos(5*t)+(1/4)*np.sin(13*t)
y = np.cos(t) + (1/2)*np.sin(5*t)+(1/4)*np.cos(13*t)

plt.axis('equal')
plt.grid()
plt.plot(x,y)
plt.show()