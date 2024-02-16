import numpy as np
import matplotlib.pyplot as plt
import math

def Exponencial():
    x = np.linspace (0.001,15,1000)
    y_e = np.exp(x) 

    plt.plot(x, y_e)

    plt.legend(['Exp'], loc="lower right")
    plt.xticks (range (math.floor(min(x)), math.ceil(max(x))+1))
    plt.axhline (0, color='black', linewidth='1.5')
    plt.show()

if(__name__ == "__main__"):
    Exponencial()