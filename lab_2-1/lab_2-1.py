import matplotlib.pyplot as plt  # lib for graphs
import random
import numpy as np
import math

n = 10
N = 256
W0 = 150
Wmax = 1500
W = np.arange(W0, Wmax + W0, W0)


def generator(n, N, W):
    signals = np.zeros(N)
    for i in range(n):
        A = random.random()
        phi = random.random()
        for t in range(N):
            signals[t] += A * math.sin(W[i] * t + phi)

    return signals


def remakeFur(signal):
    size = len(signal)

    F = np.zeros(size)
    for p in range(size):
        for t in range(size):
            F[p] += complex(math.cos(2*math.pi/N * (p*t)), -
                            math.sin(2*math.pi/N * (p*t))) * signal[t]

    
    return F

def toAbsolute(complexFur):
    l = []
    for el in complexFur:
       l.append(abs(el))
    
    return l

signal = generator(n,N,W)
spectr = toAbsolute(remakeFur(signal))
print(spectr)

##plotting signal
plt.plot(signal)
plt.xlabel('t')
plt.ylabel('X(t)')
plt.figure()

##plotting spectr
plt.plot(spectr)
plt.xlabel('signal')
plt.ylabel('spectr')
plt.show()
